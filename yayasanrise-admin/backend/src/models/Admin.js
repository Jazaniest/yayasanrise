import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import bcrypt from 'bcryptjs';

const Admin = sequelize.define('Admin', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: {
    type: DataTypes.ENUM('admin', 'superadmin'),
    allowNull: false,
    defaultValue: 'admin',
  },
}, {
  tableName: 'admins',
  hooks: {
    beforeCreate: async (admin) => {
      admin.password = await bcrypt.hash(admin.password, 10);
    },
  },
});

Admin.prototype.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

Admin.prototype.toSafeJSON = function () {
  return { id: this.id, name: this.name, email: this.email, role: this.role };
};

export default Admin;
