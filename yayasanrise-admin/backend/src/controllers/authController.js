import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';
import { env } from '../config/env.js';

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password required', data: null });
    }

    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
      return res.status(401).json({ success: false, message: 'Invalid credentials', data: null });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials', data: null });
    }

    const token = jwt.sign({ id: admin.id, role: admin.role }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN });

    res.cookie('token', token, {
      httpOnly: true,
      secure: env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });

    res.json({
      success: true,
      message: 'Login successful',
      data: { admin: admin.toSafeJSON() }, // Token is no longer sent in the body
    });
  } catch (error) {
    next(error);
  }
}

export async function me(req, res) {
  res.json({ success: true, message: 'Admin profile', data: req.admin });
}

export async function logout(req, res) {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ success: true, message: 'Logout successful' });
}
