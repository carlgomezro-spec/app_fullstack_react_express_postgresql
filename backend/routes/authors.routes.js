const express = require('express');
const authorsController = require("../controllers/authors.controller");
const router = express.Router();

// GET all authors
router.get('/', authorsController.getAllAuthors);

// GET author by email
router.get('/:email', authorsController.getAuthorByEmail);

// POST create a new author
router.post('/', authorsController.createAuthor);

// PUT update an author by ID
router.put('/:id', authorsController.updateAuthor);

// DELETE an author by ID
router.delete('/:id', authorsController.deleteAuthor);

module.exports = router;