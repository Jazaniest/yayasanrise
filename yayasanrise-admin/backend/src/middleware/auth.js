import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import Admin from '../models/Admin.js';

export const authenticate = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided', data: null });
    }

    const decoded = jwt.verify(token, env.JWT_SECRET);
    const admin = await Admin.findByPk(decoded.id);

    if (!admin) {
      return res.status(401).json({ success: false, message: 'Admin not found', data: null });
    }

    req.admin = admin.toSafeJSON();
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid token', data: null });
  }
};
