import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const ArtikelIlmiah = sequelize.define('ArtikelIlmiah', {
  judul: { type: DataTypes.STRING, allowNull: false },
  penulis: DataTypes.STRING,
  abstrak: DataTypes.TEXT,
  link_url: DataTypes.STRING(500),
  tahun: DataTypes.STRING(4),
  status: { type: DataTypes.ENUM('draft', 'published'), defaultValue: 'draft' },
}, { tableName: 'artikel_ilmiah' });

export default ArtikelIlmiah;
