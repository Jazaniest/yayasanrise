// This is a one-time script to create a superadmin.
// Run it with: node --experimental-specifier-resolution=node src/seedSuperAdmin.js
// Remember to delete this file after use.

import Admin from './src/models/Admin.js';
import { sequelize } from './src/config/database.js';

const createSuperAdmin = async () => {
  try {
    await sequelize.sync({ alter: true }); // Sync models with database, altering tables if necessary

    const superAdmin = await Admin.create({
      name: 'Super Admin',
      email: 'superadmin@example.com',
      password: 'superadminpassword', // This will be hashed by the model hook
      role: 'superadmin',
    });

    console.log('Superadmin created successfully:');
    console.log(superAdmin.toSafeJSON());
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      console.log('Superadmin with this email already exists.');
    } else {
      console.error('Error creating superadmin:', error);
    }
  } finally {
    await sequelize.close();
  }
};

createSuperAdmin();
