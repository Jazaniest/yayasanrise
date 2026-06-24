export function createCrudController(model, options = {}) {
  const allowedFields = options.allowedFields || Object.keys(model.rawAttributes).filter(
    f => !['id', 'created_at', 'updated_at'].includes(f)
  );

  const list = async (req, res, next) => {
    try {
      const where = {};
      if (req.query.status) where.status = req.query.status;
      if (req.query.tahun) where.tahun = req.query.tahun;

      const data = await model.findAll({
        where,
        order: [['created_at', 'DESC']],
      });
      res.json({ success: true, message: 'List retrieved', data });
    } catch (error) { next(error); }
  };

  const getById = async (req, res, next) => {
    try {
      const data = await model.findByPk(req.params.id);
      if (!data) return res.status(404).json({ success: false, message: 'Not found', data: null });
      res.json({ success: true, message: 'Detail retrieved', data });
    } catch (error) { next(error); }
  };

  const create = async (req, res, next) => {
    try {
      const payload = {};
      allowedFields.forEach(f => { if (req.body[f] !== undefined) payload[f] = req.body[f]; });
      const data = await model.create(payload);
      res.status(201).json({ success: true, message: 'Created successfully', data });
    } catch (error) { next(error); }
  };

  const update = async (req, res, next) => {
    try {
      const data = await model.findByPk(req.params.id);
      if (!data) return res.status(404).json({ success: false, message: 'Not found', data: null });
      const payload = {};
      allowedFields.forEach(f => { if (req.body[f] !== undefined) payload[f] = req.body[f]; });
      await data.update(payload);
      res.json({ success: true, message: 'Updated successfully', data });
    } catch (error) { next(error); }
  };

  const remove = async (req, res, next) => {
    try {
      const data = await model.findByPk(req.params.id);
      if (!data) return res.status(404).json({ success: false, message: 'Not found', data: null });
      await data.destroy();
      res.json({ success: true, message: 'Deleted successfully', data: null });
    } catch (error) { next(error); }
  };

  return { list, getById, create, update, remove };
}
