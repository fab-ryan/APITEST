import Role from '../models/Role.js';
const createRoles = async (req, res) => {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count > 0) res.status(400).json({ message: 'Roles already created' });
    else {
      const values = await Promise.all([
        new Role({ name: 'user' }).save(),
        new Role({ name: 'student' }).save(),
        new Role({ name: 'admin' }).save(),
      ]);
      res.status(201).json({ message: 'Roles created', values });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json({ roles });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export { createRoles, getRoles };
