const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');

/**
 * POST /api/staff
 * Create a new staff member.
 */
router.post('/', staffController.createStaff);

/**
 * GET /api/staff
 * Retrieve all staff members.
 */
router.get('/', staffController.getStaff);

/**
 * PUT /api/staff/:id
 * Update a staff member by ID.
 * @param {string} id - The ID of the staff member to update.
 */
router.put('/:id', staffController.updateStaff);

/**
 * DELETE /api/staff/:id
 * Delete a staff member by ID.
 * @param {string} id - The ID of the staff member to delete.
 */
router.delete('/:id', staffController.deleteStaff);

/**
 * Export the router to be used in the app.
 */
module.exports = router;

