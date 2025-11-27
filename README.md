# Proyecto Fullstack

Este proyecto contiene una aplicación fullstack con un backend en Node.js y un frontend en React.

---

## Backend

### Tecnologías usadas
- **Node.js**: Entorno de ejecución para el servidor.
- **Express.js**: Framework para construir la API REST.
- **PostgreSQL**: Base de datos relacional.
- **Swagger**: Documentación de la API.
- **dotenv**: Manejo de variables de entorno.
- **cors**: Habilitación de CORS.
- **nodemon**: Herramienta para desarrollo con recarga automática.

### Estructura de carpetas
- **`controllers/`**: Contiene la lógica de los controladores para manejar las solicitudes.
- **`models/`**: Define las interacciones con la base de datos.
- **`routes/`**: Define los endpoints de la API.
- **`middlewares/`**: Contiene middlewares personalizados.
- **`config/`**: Configuración de Swagger y otros ajustes.
- **`app.js`**: Punto de entrada del servidor.

### Endpoints principales
- **`GET /api/entries`**: Obtiene todas las entradas o filtra por email.
- **`POST /api/entries`**: Crea una nueva entrada.
- **`DELETE /api/entries/:id`**: Elimina una entrada por ID.
- **`PUT /api/entries/:id`**: Actualiza una entrada por ID.
- **`GET /api/authors`**: Obtiene todos los autores.

### Variables de entorno necesarias
Crea un archivo `.env` en la carpeta `backend` con las siguientes variables:
```
PORT=3000
DATABASE_URL=postgresql://usuario:password@host:puerto/database
```

### Instalación del backend
1. Ve a la carpeta `backend`:
   ```bash
   cd backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```
4. Inicia el servidor en modo producción:
   ```bash
   npm start
   ```

---

## Frontend

### Tecnologías usadas
- **React**: Biblioteca para construir la interfaz de usuario.
- **Vite**: Herramienta para el desarrollo y construcción del frontend.
- **Axios**: Cliente HTTP para realizar solicitudes al backend.

### Estructura de carpetas
- **`src/components/`**: Contiene los componentes de React.
- **`src/services/`**: Define las interacciones con el backend.
- **`src/styles/`**: Archivos CSS para los estilos.
- **`src/main.jsx`**: Punto de entrada del frontend.

### Variables de entorno necesarias
Crea un archivo `.env` en la carpeta `frontend` con las siguientes variables:
```
VITE_API_URL=http://localhost:3000/api
```

### Instalación del frontend
1. Ve a la carpeta `frontend`:
   ```bash
   cd frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```
4. Genera el build para producción:
   ```bash
   npm run build
   ```
5. Previsualiza el build generado:
   ```bash
   npm run start
   ```

---

## Arrancar el sistema completo

### Modo desarrollo
1. Ve a la carpeta raíz del proyecto:
   ```bash
   cd app_fullstack
   ```
2. Ejecuta el comando:
   ```bash
   npm run dev
   ```
   Esto iniciará el backend y el frontend simultáneamente.

### Modo producción
1. Genera el build del frontend:
   ```bash
   npm run build --prefix frontend
   ```
2. Inicia el backend y el frontend:
   ```bash
   npm start
   ```

---

## Notas adicionales
- Asegúrate de configurar correctamente las variables de entorno en los archivos `.env` para cada entorno (desarrollo y producción).
- En Render, configura las variables de entorno necesarias en el panel de cada servicio (backend y frontend).
- Verifica que el backend y el frontend estén correctamente conectados mediante la variable `VITE_API_URL` en el frontend.