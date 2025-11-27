const pool = require('../config/db_pgsql');
const queries = require('./queries');

const getAuthorByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAuthorByEmail, [email]);
        result = data.rows[0];
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

const createAuthor = async (name, surname, email, image) => {
    let client;
    try {
        client = await pool.connect();
        await client.query(queries.createAuthor, [name, surname, email, image]);
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        client.release();
    }
};

const updateAuthor = async (id, name, surname, email, image) => {
    let client;
    try {
        client = await pool.connect();
        await client.query(queries.updateAuthor, [name, surname, email, image, id]);
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        client.release();
    }
};

const deleteAuthor = async (id) => {
    let client;
    try {
        client = await pool.connect();
        await client.query(queries.deleteAuthor, [id]);
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        client.release();
    }
};

const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllAuthors);
        result = data.rows;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

// Example calls for methods in authors.model.js

/* // Example: Get author by email
getAuthorByEmail("example@domain.com")
    .then(author => console.log("Author by email:", author))
    .catch(err => console.error("Error fetching author by email:", err));

// Example: Create a new author
createAuthor("John", "Doe", "john.doe@domain.com", "image_url")
    .then(() => console.log("Author created successfully."))
    .catch(err => console.error("Error creating author:", err));

// Example: Update an author
updateAuthor(1, "Jane", "Doe", "jane.doe@domain.com", "new_image_url")
    .then(() => console.log("Author updated successfully."))
    .catch(err => console.error("Error updating author:", err));

// Example: Delete an author
deleteAuthor(1)
    .then(() => console.log("Author deleted successfully."))
    .catch(err => console.error("Error deleting author:", err));

// Example: Get all authors
getAllAuthors()
    .then(authors => console.log("All authors:", authors))
    .catch(err => console.error("Error fetching all authors:", err));

 */
module.exports = {
    getAuthorByEmail,
    createAuthor,
    updateAuthor,
    deleteAuthor,
    getAllAuthors
};