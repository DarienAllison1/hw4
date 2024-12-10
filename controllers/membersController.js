const Member = require('../models/Member'); // Ensure this path is correct

/**
 * Create a new member.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.createMember = async (req, res) => {
  console.log('Request body:', req.body); // Log the incoming data
  try {
    const member = new Member(req.body);
    console.log('Saving member:', member); // Log the member object
    await member.save();
    res.status(201).json(member);
  } catch (err) {
    console.error('Error saving member:', err.message); // Log errors
    res.status(400).json({ error: err.message });
  }
};

/**
 * Retrieve all members.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.getMembers = async (req, res) => {
  console.log('GET /api/members called'); // Log the route access
  try {
    const members = await Member.find(); // Fetch all members from the database
    console.log('Members retrieved:', members); // Log the retrieved members
    res.status(200).json(members); // Send them as JSON
  } catch (err) {
    console.error('Error retrieving members:', err.message); // Log errors
    res.status(500).json({ error: err.message });
  }
};

/**
 * Update a member by ID.
 * @param {Object} req - The request object, including member ID and updated data.
 * @param {Object} res - The response object.
 */
exports.updateMember = async (req, res) => {
  console.log(`Updating member with ID: ${req.params.id}`); // Log the ID
  try {
    const member = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!member) return res.status(404).json({ error: 'Member not found' });
    console.log('Updated member:', member); // Log the updated member
    res.status(200).json(member);
  } catch (err) {
    console.error('Error updating member:', err.message); // Log errors
    res.status(400).json({ error: err.message });
  }
};

/**
 * Delete a member by ID.
 * @param {Object} req - The request object, including member ID.
 * @param {Object} res - The response object.
 */
exports.deleteMember = async (req, res) => {
  console.log(`Deleting member with ID: ${req.params.id}`); // Log the ID
  try {
    const member = await Member.findByIdAndDelete(req.params.id);
    if (!member) return res.status(404).json({ error: 'Member not found' });
    console.log('Deleted member:', member); // Log the deleted member
    res.status(200).json({ message: 'Member deleted' });
  } catch (err) {
    console.error('Error deleting member:', err.message); // Log errors
    res.status(500).json({ error: err.message });
  }
};
