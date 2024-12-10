const Book = require('../models/Book');

/**
 * Create a new book.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Retrieve all books.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Update a book by ID.
 * @param {Object} req - The request object, including book ID and updated data.
 * @param {Object} res - The response object.
 */
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Delete a book by ID.
 * @param {Object} req - The request object, including book ID.
 * @param {Object} res - The response object.
 */
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
