const express = require('express');
const router = express.Router();
const membersController = require('../controllers/membersController');

/**
 * POST /api/members
 * Create a new member.
 */
router.post('/', membersController.createMember);

/**
 * GET /api/members
 * Retrieve all members.
 */
router.get('/', membersController.getMembers);

/**
 * PUT /api/members/:id
 * Update a member by ID.
 * @param {string} id - The ID of the member to update.
 */
router.put('/:id', membersController.updateMember);

/**
 * DELETE /api/members/:id
 * Delete a member by ID.
 * @param {string} id - The ID of the member to delete.
 */
router.delete('/:id', membersController.deleteMember);

/**
 * Export the router to be used in the app.
 */
module.exports = router;




