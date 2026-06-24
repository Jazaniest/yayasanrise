import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';
import { createCrudController } from '../controllers/crudController.js';
import Kegiatan from '../models/Kegiatan.js';
import TimPakar from '../models/TimPakar.js';
import Insight from '../models/Insight.js';
import Mitra from '../models/Mitra.js';

const router = Router();

function mountCrud(path, model, options = {}) {
  const ctrl = createCrudController(model, options);
  router.get(path, ctrl.list);
  router.get(`${path}/:id`, ctrl.getById);
  router.post(path, authenticate, ctrl.create);
  router.put(`${path}/:id`, authenticate, ctrl.update);
  router.delete(`${path}/:id`, authenticate, ctrl.remove);
}

mountCrud('/kegiatan', Kegiatan);
mountCrud('/tim-pakar', TimPakar);
mountCrud('/insight', Insight);
mountCrud('/mitra', Mitra);

export default router;
