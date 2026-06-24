import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';
import { createCrudController } from '../controllers/crudController.js';
import ArtikelIlmiah from '../models/ArtikelIlmiah.js';
import PolicyBrief from '../models/PolicyBrief.js';
import LaporanPenelitian from '../models/LaporanPenelitian.js';
import Buku from '../models/Buku.js';
import Infografis from '../models/Infografis.js';

const router = Router();

// Helper to mount CRUD routes for a model
function mountCrud(path, model, options = {}) {
  const ctrl = createCrudController(model, options);
  router.get(path, ctrl.list);
  router.get(`${path}/:id`, ctrl.getById);
  router.post(path, authenticate, ctrl.create);
  router.put(`${path}/:id`, authenticate, ctrl.update);
  router.delete(`${path}/:id`, authenticate, ctrl.remove);
}

mountCrud('/artikel-ilmiah', ArtikelIlmiah);
mountCrud('/policy-brief', PolicyBrief);
mountCrud('/laporan-penelitian', LaporanPenelitian);
mountCrud('/buku', Buku);
mountCrud('/infografis', Infografis);

export default router;
