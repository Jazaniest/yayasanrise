import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const LaporanPenelitian = sequelize.define('LaporanPenelitian', {
  judul: { type: DataTypes.STRING, allowNull: false },
  penulis: DataTypes.STRING,
  deskripsi: DataTypes.TEXT,
  file_url: DataTypes.STRING(500),
  tahun: DataTypes.STRING(4),
  status: { type: DataTypes.ENUM('draft', 'published'), defaultValue: 'draft' },
}, { tableName: 'laporan_penelitian' });

export default LaporanPenelitian;
