import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';
import { sequelize } from '../config/database.js';

const router = Router();

const MODELS = [
  'artikel_ilmiah', 'policy_brief', 'laporan_penelitian', 'buku', 'infografis',
  'kegiatan', 'tim_pakar', 'insight', 'mitra',
];

router.get('/stats', authenticate, async (req, res, next) => {
  try {
    const stats = {};
    for (const table of MODELS) {
      const [[row]] = await sequelize.query(`SELECT COUNT(*) as count FROM \`${table}\``);
      stats[table] = row.count;
    }
    res.json({ success: true, message: 'Dashboard stats', data: stats });
  } catch (error) { next(error); }
});

router.get('/recent', authenticate, async (req, res, next) => {
  try {
    const recent = [];
    for (const table of MODELS) {
      // Use 'nama' for 'tim_pakar' and 'mitra', otherwise use 'judul'
      const titleColumn = ['tim_pakar', 'mitra'].includes(table) ? 'nama' : 'judul';

      const [rows] = await sequelize.query(
        `SELECT id, \`${titleColumn}\` AS title, '${table}' AS type, created_at FROM \`${table}\` ORDER BY created_at DESC LIMIT 3`
      );
      recent.push(...rows);
    }
    recent.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    res.json({ success: true, message: 'Recent items', data: recent.slice(0, 10) });
  } catch (error) { next(error); }
});

export default router;
