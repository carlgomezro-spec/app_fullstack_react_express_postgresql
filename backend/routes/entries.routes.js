const express = require('express');
// Rutas de productos
const entriesController = require("../controllers/entries.controller");
const router = express.Router();

/**
 * @swagger
 * /api/entries:
 *   get:
 *     summary: Obtener todas las entradas o filtrar por email
 *     tags:
 *       - Entries
 *     parameters:
 *       - in: query
 *         name: email
 *         required: false
 *         schema:
 *           type: string
 *         description: Email del autor
 *     responses:
 *       200:
 *         description: Entradas encontradas
 */
router.get('/', entriesController.getEntries);



/**
 * @swagger
 * /api/entries:
 *   post:
 *     summary: Crear una nueva entrada
 *     tags:
 *       - Entries
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               email:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Entrada creada
 */
router.post('/', entriesController.createEntry);

/**
 * @swagger
 * /api/entries/{id}:
 *   delete:
 *     summary: Eliminar una entrada por ID
 *     tags:
 *       - Entries
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la entrada
 *     responses:
 *       200:
 *         description: Entrada eliminada
 */
router.delete('/:id', entriesController.deleteEntry);

/**
 * @swagger
 * /api/entries/{id}:
 *   put:
 *     summary: Actualizar una entrada por ID
 *     tags:
 *       - Entries
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la entrada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               email:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Entrada actualizada
 */
router.put('/:id', entriesController.updateEntry);

module.exports = router;

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries
/*
{
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"alejandru@thebridgeschool.es",
    "category":"sucesos"
}
    */