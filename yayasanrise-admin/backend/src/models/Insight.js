import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Insight = sequelize.define('Insight', {
  judul: { type: DataTypes.STRING, allowNull: false },
  konten: DataTypes.TEXT,
  penulis: DataTypes.STRING,
  thumbnail_url: DataTypes.STRING(500),
  kategori: { type: DataTypes.ENUM('insight', 'opini'), defaultValue: 'insight' },
  status: { type: DataTypes.ENUM('draft', 'published'), defaultValue: 'draft' },
}, { tableName: 'insight' });

export default Insight;
