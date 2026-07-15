import { Router } from 'express';
import { createAdmin, getAdmins, deleteAdmin } from '../controllers/superadmin.controller.js';
import { authenticate } from '../middleware/auth.js';
import { isSuperAdmin } from '../middleware/authorization.js';

const router = Router();

// Define middleware array for clarity
const superAdminOnly = [authenticate, isSuperAdmin];

router.post('/admins', superAdminOnly, createAdmin);
router.get('/admins', superAdminOnly, getAdmins);
router.delete('/admins/:id', superAdminOnly, deleteAdmin);

export default router;
