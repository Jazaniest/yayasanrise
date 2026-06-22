import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { env } from './config/env.js';
import { sequelize, testConnection } from './config/database.js';
import authRoutes from './routes/auth.js';
import publikasiRoutes from './routes/publikasi.js';
import kontenRoutes from './routes/konten.js';
import dashboardRoutes from './routes/dashboard.js';
import uploadRoutes from './routes/upload.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(cors({ origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static uploads
app.use('/uploads', express.static(join(__dirname, '../uploads')));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'API is running', data: null });
});

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', publikasiRoutes);
app.use('/api/v1', kontenRoutes);
app.use('/api/v1/dashboard', dashboardRoutes);
app.use('/api/v1/upload', uploadRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    data: null,
  });
});

// Start server
const start = async () => {
  await testConnection();
  await sequelize.sync();
  app.listen(env.PORT, () => {
    console.log(`✓ Server running on http://localhost:${env.PORT}`);
  });
};

start();
