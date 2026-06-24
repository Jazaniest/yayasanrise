import { sequelize } from './config/database.js';
import Admin from './models/Admin.js';

async function seed() {
  try {
    await sequelize.sync({ force: false });

    const [admin, created] = await Admin.findOrCreate({
      where: { email: 'admin@yayasanrise.or.id' },
      defaults: {
        name: 'Admin RISE',
        password: 'admin123',
      },
    });

    if (created) {
      console.log('✓ Admin created: admin@yayasanrise.or.id / admin123');
    } else {
      console.log('• Admin already exists');
    }

    process.exit(0);
  } catch (error) {
    console.error('✗ Seed failed:', error);
    process.exit(1);
  }
}

seed();
