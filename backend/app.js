const express = require("express"); // Importando express
const path = require("path");
const cowsay = require("cowsay");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const cors = require("cors"); // Importar el middleware de CORS

const app = express(); // Creando el servidor
const port = process.env.PORT || 3000; // Usar el puerto asignado por Render o el 3000 como fallback
// Leer fichero .env
require('dotenv').config();

// Middlewares
const error404 = require("./middlewares/error404");
// Morgan
const morgan = require("./middlewares/morgan");

// Configuración del logger con Morgan
app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));

// Habilitar recepción de JSON por mi backend
// Parsear el body entrante a JSON
app.use(express.json());
// Habilitar recepción de objetos enviados en POST
app.use(express.urlencoded({ extended: true }));

// Habilitar CORS
app.use(cors());

// Rutas
const entriesRoutes = require("./routes/entries.routes");
const authorsRoutes = require("./routes/authors.routes"); // Importar las rutas de authors


// GET http://localhost:3000/
app.get("/api", (req, res) => {
  res.send("Hello World! Welcome to the API.");
});

// API
// Rutas habilitadas
app.use("/api/entries", entriesRoutes); // Rutas de entries
app.use("/api/authors", authorsRoutes); // Rutas de authors


// Documentación
app.use('/api-jsdoc', express.static(path.join(__dirname, '/jsondocs')));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

if (process.env.NODE_ENV==="production") {
  // Servir archivos estáticos del frontend con React
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  // Manejar cualquier ruta que no sea de la API y servir el index.html de React
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
  });
}

app.use(error404); // Manejo de rutas no encontradas

// Iniciar el servidor
app.listen(port, () => {
  console.log(
    cowsay.say({
      text: `Example app listening on port http://localhost:${port}`,
      f: "owl", // Use the owl ASCII art // owl
    })
  );
});

module.exports = app; // Exportar la app para usarla en tests