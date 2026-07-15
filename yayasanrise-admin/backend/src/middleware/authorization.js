export const isSuperAdmin = (req, res, next) => {
  // Assuming the authenticated admin's data is attached to req.admin by a previous middleware
  if (req.admin && req.admin.role === 'superadmin') {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden: Requires superadmin role' });
  }
};
