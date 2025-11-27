const author = require('../models/authors.model');

// GET http://localhost:3000/authors --> ALL
const getAllAuthors = async (req, res) => {
    try {
        const authors = await author.getAllAuthors();
        res.status(200).json(authors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET http://localhost:3000/authors/:email --> By Email
const getAuthorByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const authorData = await author.getAuthorByEmail(email);
        if (authorData) {
            res.status(200).json(authorData);
        } else {
            res.status(404).json({ message: "Author not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// POST http://localhost:3000/authors --> Create Author
const createAuthor = async (req, res) => {
    try {
        const { name, surname, email, image } = req.body;
        await author.createAuthor(name, surname, email, image);
        res.status(201).json({ message: "Author created successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// PUT http://localhost:3000/authors/:id --> Update Author
const updateAuthor = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, surname, email, image } = req.body;
        await author.updateAuthor(id, name, surname, email, image);
        res.status(200).json({ message: "Author updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE http://localhost:3000/authors/:id --> Delete Author
const deleteAuthor = async (req, res) => {
    try {
        const id = req.params.id;
        await author.deleteAuthor(id);
        res.status(200).json({ message: "Author deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllAuthors,
    getAuthorByEmail,
    createAuthor,
    updateAuthor,
    deleteAuthor
};