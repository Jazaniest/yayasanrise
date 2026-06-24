import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Kegiatan = sequelize.define('Kegiatan', {
  judul: { type: DataTypes.STRING, allowNull: false },
  deskripsi: DataTypes.TEXT,
  tanggal: DataTypes.DATEONLY,
  lokasi: DataTypes.STRING,
  foto_url: DataTypes.STRING(500),
  status: { type: DataTypes.ENUM('draft', 'published'), defaultValue: 'draft' },
}, { tableName: 'kegiatan' });

export default Kegiatan;
