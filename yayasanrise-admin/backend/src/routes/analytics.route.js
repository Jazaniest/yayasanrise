import { Router } from 'express';
import { trackVisit, getVisitorStats } from '../controllers/analyticsController.js';

const router = Router();

// Endpoint to track a new visit
router.post('/track-visit', trackVisit);

// Endpoint to get visitor statistics
router.get('/visitor-stats', getVisitorStats);

export default router;
