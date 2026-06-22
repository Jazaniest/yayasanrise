# Admin Backend & Dashboard — Yayasan RISE

**Date:** 2026-06-22
**Status:** Draft

## 1. Overview

Membangun backend (REST API) dan admin dashboard SPA untuk Yayasan RISE Sosial Ekologis Indonesia. Admin dapat melakukan CRUD pada seluruh konten website yayasan (publikasi, kegiatan, tim, insight, mitra) melalui interface dashboard yang aman dengan autentikasi JWT.

## 2. Architecture

### Monolith Approach (Approach A)

Seluruh project berada dalam satu folder `yayasanrise-backend/` yang terdiri dari:

```
yayasanrise-backend/
├── backend/                  # Express.js REST API
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   │   └── env.js
│   │   ├── middleware/
│   │   │   └── auth.js
│   │   ├── models/           # Sequelize models
│   │   ├── routes/           # Express routes
│   │   ├── controllers/      # Route handlers
│   │   └── app.js
│   ├── uploads/              # Uploaded files (gitignored)
│   ├── package.json
│   └── .env
├── admin-dashboard/          # React + Vite admin SPA
│   ├── src/
│   │   ├── components/       # Layout, Sidebar, PrivateRoute
│   │   ├── pages/            # Login, Dashboard, CRUD pages
│   │   ├── api/
│   │   │   └── client.js     # Axios + JWT interceptor
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── schema.sql
├── package.json              # Root — "dev" script runs both
└── README.md
```

**Alasan:** Development praktis (satu `npm run dev`), deployment fleksibel (admin bisa di-build dan di-serve oleh Express, atau dipisah ke subdomain nanti).

## 3. Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Backend | Node.js, Express.js, Sequelize ORM, MySQL2 |
| Auth | jsonwebtoken, bcryptjs |
| Upload | multer |
| Admin Frontend | React 19, Vite 8, React Router 7, Axios |
| Styling Admin | Tailwind CSS 4 |
| Dev Tools | Nodemon, concurrently |

## 4. Database Schema

10 tabel utama:

### 4.1 `admins`
Kolom: id, name, email (UNIQUE), password (bcrypt hash), created_at, updated_at.

### 4.2 `artikel_ilmiah`
Kolom: id, judul, penulis, abstrak (TEXT), link_url, tahun (YEAR), status (ENUM: draft/published), created_at, updated_at.

### 4.3 `policy_brief`
Kolom: id, judul, deskripsi (TEXT), file_url, tahun (YEAR), status (ENUM: draft/published), created_at, updated_at.

### 4.4 `laporan_penelitian`
Kolom: id, judul, penulis, deskripsi (TEXT), file_url, tahun (YEAR), status (ENUM: draft/published), created_at, updated_at.

### 4.5 `buku`
Kolom: id, judul, penulis, deskripsi (TEXT), cover_url, file_url, tahun (YEAR), status (ENUM: draft/published), created_at, updated_at.

### 4.6 `infografis`
Kolom: id, judul, deskripsi (TEXT), image_url, tahun (YEAR), status (ENUM: draft/published), created_at, updated_at.

### 4.7 `kegiatan`
Kolom: id, judul, deskripsi (TEXT), tanggal (DATE), lokasi, foto_url, status (ENUM: draft/published), created_at, updated_at.

### 4.8 `tim_pakar`
Kolom: id, nama, jabatan, bidang_keahlian, bio (TEXT), foto_url, email, urutan (INT), status (ENUM: draft/published), created_at, updated_at.

### 4.9 `insight`
Kolom: id, judul, konten (TEXT), penulis, thumbnail_url, kategori (ENUM: insight/opini), status (ENUM: draft/published), created_at, updated_at.

### 4.10 `mitra`
Kolom: id, nama, tipe (ENUM: donatur/kolaborator/sponsor), logo_url, website, deskripsi (TEXT), urutan (INT), status (ENUM: draft/published), created_at, updated_at.

## 5. API Endpoints

Prefix: `/api/v1`

### Autentikasi
- `POST /api/v1/auth/login` — Login, return JWT token
- `GET /api/v1/auth/me` — Profile admin saat ini

### Publikasi & Riset (pola identik untuk 5 tipe)
- `GET /api/v1/artikel-ilmiah` — List dengan filter (status, tahun)
- `GET /api/v1/artikel-ilmiah/:id` — Detail
- `POST /api/v1/artikel-ilmiah` — Create
- `PUT /api/v1/artikel-ilmiah/:id` — Update
- `DELETE /api/v1/artikel-ilmiah/:id` — Delete

Endpoint sama untuk: `/policy-brief`, `/laporan-penelitian`, `/buku`, `/infografis`, `/kegiatan`, `/tim-pakar`, `/insight`, `/mitra`.

### Dashboard
- `GET /api/v1/dashboard/stats` — Ringkasan jumlah semua entitas
- `GET /api/v1/dashboard/recent` — 5-10 entitas terbaru

### Upload
- `POST /api/v1/upload` — Upload file, return URL

## 6. Admin Dashboard Pages

### Route Structure
```
/login              → Login page
/dashboard          → Statistik overview
/publikasi/artikel-ilmiah       → List & Form (create/edit)
/publikasi/policy-brief         → List & Form
/publikasi/laporan-penelitian   → List & Form
/publikasi/buku                 → List & Form
/publikasi/infografis           → List & Form
/kegiatan           → List & Form
/tim-pakar          → List & Form
/insight            → List & Form
/mitra              → List & Form
```

### Layout
- Sidebar (navigasi menu dengan ikon)
- Header (info admin + logout)
- Content area (list/forms)

### Fitur per Halaman CRUD
- **List:** Tabel responsif, search, filter status draft/published, pagination
- **Form:** Input fields, upload file, status toggle (draft / publish)
- **Delete:** Konfirmasi sebelum hapus
- **Protected routes:** redirect ke /login jika token invalid/expired

## 7. Alur Autentikasi

1. Admin login via form → POST ke `/auth/login`
2. Server verifikasi email + password (bcrypt)
3. Server return JWT token (expiry: misal 24 jam)
4. Frontend simpan token di localStorage
5. Axios interceptor attach header `Authorization: Bearer <token>`
6. Middleware `auth.js` di backend verifikasi token setiap request protected
7. Jika 401 → redirect ke /login

## 8. Error Handling

- Backend: Global error handler middleware, format response seragam `{ success, message, data }`
- Frontend: Toast/snackbar notifikasi untuk success/error, axios interceptor untuk error global

## 9. Catatan Implementasi

- File upload sementara pakai `multer` ke folder `/uploads`, nanti bisa migrasi ke cloud
- Semua endpoint publik dari website utama tetap seperti sekarang — tidak perlu diubah
- Admin SPA di-build (`dist/`), di production bisa di-serve oleh Express di path `/admin`
- CORS diaktifkan untuk development (backend:3001, admin:5173)

## 10. Non-Goals (Tidak Dicakup)
- Role-based access (multiple admin levels) — tidak diperlukan saat ini
- Logging / audit trail — bisa ditambahkan nanti
- File versioning — langsung replace file
- Email notification — tidak diperlukan
