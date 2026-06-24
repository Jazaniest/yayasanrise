import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Mitra = sequelize.define('Mitra', {
  nama: { type: DataTypes.STRING, allowNull: false },
  tipe: { type: DataTypes.ENUM('donatur', 'kolaborator', 'sponsor'), defaultValue: 'kolaborator' },
  logo_url: DataTypes.STRING(500),
  website: DataTypes.STRING(500),
  deskripsi: DataTypes.TEXT,
  urutan: { type: DataTypes.INTEGER, defaultValue: 0 },
  status: { type: DataTypes.ENUM('draft', 'published'), defaultValue: 'draft' },
}, { tableName: 'mitra' });

export default Mitra;
