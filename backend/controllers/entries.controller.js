const entry = require('../models/entries.model'); // Importar el modelo de la BBDD
const author = require('../models/authors.model'); // Importar el modelo de autores

//getEntries
// if(hay email)
//     busca por mail
// else
//     busca todo

// GET http://localhost:3000/entries --> ALL
// GET http://localhost:3000/entries?email=hola@gmail.com --> por email
const getEntries = async (req, res) => {
    let entries;
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);
    }
    else {
        entries = await entry.getAllEntries();
    }
    res.status(200).json(entries); // [] con las entries encontradas
}

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear entry por email
const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}

    // Validar que el email esté presente
    if (!newEntry.email) {
        return res.status(400).json({ error: "Email is required to create an entry." });
    }

    // Verificar si el autor existe
    const existingAuthor = await author.getAuthorByEmail(newEntry.email);
    if (!existingAuthor) {
        return res.status(400).json({ error: "Author does not exist. Entry cannot be created." });
    }

    const response = await entry.createEntry(newEntry);
    res.status(201).json({
        "items_created": response,
        data: newEntry
    });
}

// DELETE http://localhost:3000/entries/:id --> Delete Entry
const deleteEntry = async (req, res) => {
    try {
        const id = req.params.id;
        await entry.deleteEntry(id);
        res.status(200).json({ message: "Entry deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// PUT http://localhost:3000/entries/:id --> Update Entry
const updateEntry = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, content, category } = req.body;
        await entry.updateEntry(id, title, content, category);
        res.status(200).json({ message: "Entry updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getEntries,
    createEntry,
    deleteEntry,
    updateEntry
};