import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const TimPakar = sequelize.define('TimPakar', {
  nama: { type: DataTypes.STRING, allowNull: false },
  jabatan: DataTypes.STRING,
  bidang_keahlian: DataTypes.STRING,
  bio: DataTypes.TEXT,
  foto_url: DataTypes.STRING(500),
  email: DataTypes.STRING,
  urutan: { type: DataTypes.INTEGER, defaultValue: 0 },
  status: { type: DataTypes.ENUM('draft', 'published'), defaultValue: 'draft' },
}, { tableName: 'tim_pakar' });

export default TimPakar;
