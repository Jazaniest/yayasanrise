import Admin from '../models/Admin.js';

export const createAdmin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' });
    }
    const newAdmin = await Admin.create({ name, email, password, role: role || 'admin' });
    res.status(201).json(newAdmin.toSafeJSON());
  } catch (error) {
    res.status(500).json({ message: 'Error creating admin', error: error.message });
  }
};

export const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.json(admins.map(admin => admin.toSafeJSON()));
  } catch (error) {
    res.status(500).json({ message: 'Error fetching admins', error: error.message });
  }
};

export const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findByPk(id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    // Prevent a superadmin from deleting themselves
    if (req.admin.id === parseInt(id, 10)) {
        return res.status(400).json({ message: 'Cannot delete yourself' });
    }
    await admin.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting admin', error: error.message });
  }
};
