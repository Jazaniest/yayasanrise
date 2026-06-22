CREATE DATABASE IF NOT EXISTS yayasanrise CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE yayasanrise;

-- 1. ADMINS
CREATE TABLE IF NOT EXISTS admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 2. ARTIKEL ILMIAH
CREATE TABLE IF NOT EXISTS artikel_ilmiah (
  id INT AUTO_INCREMENT PRIMARY KEY,
  judul VARCHAR(255) NOT NULL,
  penulis VARCHAR(255),
  abstrak TEXT,
  link_url VARCHAR(500),
  tahun VARCHAR(4),
  status ENUM('draft','published') DEFAULT 'draft',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 3. POLICY BRIEF
CREATE TABLE IF NOT EXISTS policy_brief (
  id INT AUTO_INCREMENT PRIMARY KEY,
  judul VARCHAR(255) NOT NULL,
  deskripsi TEXT,
  file_url VARCHAR(500),
  tahun VARCHAR(4),
  status ENUM('draft','published') DEFAULT 'draft',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 4. LAPORAN PENELITIAN
CREATE TABLE IF NOT EXISTS laporan_penelitian (
  id INT AUTO_INCREMENT PRIMARY KEY,
  judul VARCHAR(255) NOT NULL,
  penulis VARCHAR(255),
  deskripsi TEXT,
  file_url VARCHAR(500),
  tahun VARCHAR(4),
  status ENUM('draft','published') DEFAULT 'draft',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 5. BUKU
CREATE TABLE IF NOT EXISTS buku (
  id INT AUTO_INCREMENT PRIMARY KEY,
  judul VARCHAR(255) NOT NULL,
  penulis VARCHAR(255),
  deskripsi TEXT,
  cover_url VARCHAR(500),
  file_url VARCHAR(500),
  tahun VARCHAR(4),
  status ENUM('draft','published') DEFAULT 'draft',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 6. INFOGRAFIS
CREATE TABLE IF NOT EXISTS infografis (
  id INT AUTO_INCREMENT PRIMARY KEY,
  judul VARCHAR(255) NOT NULL,
  deskripsi TEXT,
  image_url VARCHAR(500),
  tahun VARCHAR(4),
  status ENUM('draft','published') DEFAULT 'draft',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 7. KEGIATAN
CREATE TABLE IF NOT EXISTS kegiatan (
  id INT AUTO_INCREMENT PRIMARY KEY,
  judul VARCHAR(255) NOT NULL,
  deskripsi TEXT,
  tanggal DATE,
  lokasi VARCHAR(255),
  foto_url VARCHAR(500),
  status ENUM('draft','published') DEFAULT 'draft',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 8. TIM PAKAR
CREATE TABLE IF NOT EXISTS tim_pakar (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  jabatan VARCHAR(255),
  bidang_keahlian VARCHAR(255),
  bio TEXT,
  foto_url VARCHAR(500),
  email VARCHAR(255),
  urutan INT DEFAULT 0,
  status ENUM('draft','published') DEFAULT 'draft',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 9. INSIGHT
CREATE TABLE IF NOT EXISTS insight (
  id INT AUTO_INCREMENT PRIMARY KEY,
  judul VARCHAR(255) NOT NULL,
  konten TEXT,
  penulis VARCHAR(255),
  thumbnail_url VARCHAR(500),
  kategori ENUM('insight','opini') DEFAULT 'insight',
  status ENUM('draft','published') DEFAULT 'draft',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 10. MITRA
CREATE TABLE IF NOT EXISTS mitra (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  tipe ENUM('donatur','kolaborator','sponsor') DEFAULT 'kolaborator',
  logo_url VARCHAR(500),
  website VARCHAR(500),
  deskripsi TEXT,
  urutan INT DEFAULT 0,
  status ENUM('draft','published') DEFAULT 'draft',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Seed admin: run `npm run seed` from backend/ (Task 14) to create admin
-- or use: INSERT INTO admins (name, email, password) VALUES
-- ('Admin RISE', 'admin@yayasanrise.or.id', '<bcrypt_hash_of_admin123>');
