import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Infografis = sequelize.define('Infografis', {
  judul: { type: DataTypes.STRING, allowNull: false },
  deskripsi: DataTypes.TEXT,
  image_url: DataTypes.STRING(500),
  tahun: DataTypes.STRING(4),
  status: { type: DataTypes.ENUM('draft', 'published'), defaultValue: 'draft' },
}, { tableName: 'infografis' });

export default Infografis;
