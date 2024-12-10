const Staff = require('../models/Staff');

/**
 * Create a new staff member.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.createStaff = async (req, res) => {
  try {
    const staff = new Staff(req.body);
    await staff.save();
    res.status(201).json(staff);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Retrieve all staff members.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.getStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Update a staff member by ID.
 * @param {Object} req - The request object, including staff ID and updated data.
 * @param {Object} res - The response object.
 */
exports.updateStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!staff) return res.status(404).json({ error: 'Staff member not found' });
    res.status(200).json(staff);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Delete a staff member by ID.
 * @param {Object} req - The request object, including staff ID.
 * @param {Object} res - The response object.
 */
exports.deleteStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndDelete(req.params.id);
    if (!staff) return res.status(404).json({ error: 'Staff member not found' });
    res.status(200).json({ message: 'Staff member deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
