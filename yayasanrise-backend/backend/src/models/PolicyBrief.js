import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const PolicyBrief = sequelize.define('PolicyBrief', {
  judul: { type: DataTypes.STRING, allowNull: false },
  deskripsi: DataTypes.TEXT,
  file_url: DataTypes.STRING(500),
  tahun: DataTypes.STRING(4),
  status: { type: DataTypes.ENUM('draft', 'published'), defaultValue: 'draft' },
}, { tableName: 'policy_brief' });

export default PolicyBrief;
