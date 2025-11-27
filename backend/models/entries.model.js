/**
 * @author Alejandro Reyes <alejandroreyes.com> 
 * @exports entries
 * @namespace SQLQueries 
 */

const queries = require("./queries"); // Queries SQL
const pool = require('../config/db_pgsql'); // Datos de conexión

// GET
/**
  * Descripción de la función: Esta función busca todas las entries de cierto autor por email.
  * @memberof SQLQueries 
  * @method getEntriesByEmail 
  * @async
  * @param {String} email email del autor
  * @return {Array} Devuelve las entries encontradas en un array []
  * @throws {Error} Error de consulta a la BBDD
  */
const getEntriesByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getEntriesByEmail, [email]);
        result = data.rows;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

// GET
/**
 * Descripción: Esta función devuelve todas las entries del sistema
 * @memberof SQLQueries 
 * @method getAllEntries 
 * @async 
 * @return {Array} Devuelve todas las entries en un array
 * @throws {Error} Error de consulta a la BBDD
 */
const getAllEntries = async () => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getAllEntries);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// CREATE
/**
 * Descripción: Esta función crea una nueva entry en el sistema
 * @memberof SQLQueries
 * @method createEntry
 * @async
 * @param {Object} entry objeto con los datos de la nueva entry
 * @return {Number} Devuelve el número de filas afectadas
 * @throws {Error} Error de consulta a la BBDD
 */
const createEntry = async (entry) => {
  const { title, content, email, category } = entry;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.createEntry, [
      title,
      content,
      email,
      category,
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// DELETE
/**
 * Descripción: Esta función elimina una entry del sistema
 * @memberof SQLQueries
 * @method deleteEntry
 * @async
 * @param {Number} id ID de la entry a eliminar
 * @throws {Error} Error de consulta a la BBDD
 */
const deleteEntry = async (id) => {
  let client;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    await client.query(queries.deleteEntry, [id]);
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
};

// UPDATE
/**
 * Descripción: Esta función actualiza una entry en el sistema
 * @memberof SQLQueries
 * @method updateEntry
 * @async
 * @param {Number} id ID de la entry a actualizar
 * @param {String} title Nuevo título de la entry
 * @param {String} content Nuevo contenido de la entry
 * @param {String} category Nueva categoría de la entry
 * @throws {Error} Error de consulta a la BBDD
 */
const updateEntry = async (id, title, content, category) => {
  let client;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    await client.query(queries.updateEntry, [title, content, category, id]);
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
};

const entries = {
  getEntriesByEmail,
  getAllEntries,
  createEntry,
  deleteEntry,
  updateEntry
};

module.exports = entries;

// Pruebas

/*     getEntriesByEmail("birja@thebridgeschool.es")
    .then(data=>console.log(data)) */

/* getAllEntries()
.then(data=>console.log(data)) */

/* let newEntry = {
  title: "Se acabaron las mandarinas de TB",
  content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
  email: "guillermu@thebridgeschool.es",
  category: "sucesos",
};

createEntry(newEntry).then((data) => console.log(data));
 */