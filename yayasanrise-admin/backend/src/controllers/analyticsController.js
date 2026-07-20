import { sequelize } from '../config/database.js';
import Visit from '../models/Visit.js';

// Track a new visit
export const trackVisit = async (req, res, next) => {
  try {
    const { country_name, country_code } = req.body;
    if (!country_name || !country_code) {
      return res.status(400).json({ success: false, message: 'Country name and code are required.' });
    }
    await Visit.create({ country_name, country_code });
    res.status(201).json({ success: true, message: 'Visit tracked.' });
  } catch (error) {
    next(error);
  }
};

// Get aggregated visitor statistics
export const getVisitorStats = async (req, res, next) => {
  try {
    const stats = await Visit.findAll({
      attributes: [
        'country_name',
        'country_code',
        [sequelize.fn('COUNT', sequelize.col('id')), 'count'],
      ],
      group: ['country_name', 'country_code'],
      order: [[sequelize.fn('COUNT', sequelize.col('id')), 'DESC']],
    });
    res.json({ success: true, data: stats });
  } catch (error) {
    next(error);
  }
};
