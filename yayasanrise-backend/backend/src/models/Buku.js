import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Buku = sequelize.define('Buku', {
  judul: { type: DataTypes.STRING, allowNull: false },
  penulis: DataTypes.STRING,
  deskripsi: DataTypes.TEXT,
  cover_url: DataTypes.STRING(500),
  file_url: DataTypes.STRING(500),
  tahun: DataTypes.STRING(4),
  status: { type: DataTypes.ENUM('draft', 'published'), defaultValue: 'draft' },
}, { tableName: 'buku' });

export default Buku;
