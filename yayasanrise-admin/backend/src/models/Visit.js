import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Visit = sequelize.define('Visit', {
  country_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'visits',
  // timestamps are true by default, which is what we want (createdAt)
});

export default Visit;
