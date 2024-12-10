const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

/**
 * POST /api/books
 * Create a new book.
 */
router.post('/', booksController.createBook);

/**
 * GET /api/books
 * Retrieve all books.
 */
router.get('/', booksController.getBooks);

/**
 * PUT /api/books/:id
 * Update a book by ID.
 * @param {string} id - The ID of the book to update.
 */
router.put('/:id', booksController.updateBook);

/**
 * DELETE /api/books/:id
 * Delete a book by ID.
 * @param {string} id - The ID of the book to delete.
 */
router.delete('/:id', booksController.deleteBook);

/**
 * Export the router to be used in the app.
 */
module.exports = router;



