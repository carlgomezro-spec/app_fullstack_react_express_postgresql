# Proyecto Fullstack con Seeder y Docker

Este proyecto es una aplicación fullstack que utiliza un backend en Node.js con Express y una base de datos PostgreSQL. El frontend está construido con Vite + React. Todo el sistema está diseñado para facilitar su despliegue y ejecución. Además, la aplicación está dockerizada, con un Dockerfile específico para el backend y otro para el sistema completo.

---

## **Estructura del Proyecto**

```
app_fullstack/
├── backend/          # Código del backend (Node.js + Express)
│   ├── config/       # Configuración de la base de datos y otros ajustes
│   ├── models/       # Modelos de datos
│   ├── routes/       # Rutas de la API
│   ├── seeder.js     # Script para inicializar la base de datos
│   ├── Dockerfile    # Dockerfile específico para el backend
│   └── ...
├── frontend/         # Código del frontend (Vite)
│   ├── src/          # Código fuente del frontend
│   └── ...
├── Dockerfile        # Dockerfile para el sistema completo
├── package.json      # Configuración de scripts para el proyecto completo
├── README.md         # Documentación del proyecto
└── ...
```
---

## **Comandos Útiles**

### **Arrancar el proyecto en local**
1. Ve a la carpeta raíz del proyecto:
   ```bash
   cd app_fullstack
   ```
2. Instala las dependencias del proyecto completo:
   ```bash
   npm install
   ```
3. Arranca el backend y el frontend simultáneamente:
   ```bash
   npm run dev
   ```
   - Este comando utiliza el script definido en el `package.json` de la raíz para iniciar ambos servicios.

### **Ejecutar el backend individualmente**
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

## Ejecutar el Seeder

Para ejecutar el seeder y poblar la base de datos con datos iniciales, sigue estos pasos:

1. Asegúrate de que las dependencias estén instaladas ejecutando:
   ```bash
   npm install
   ```

2. Ejecuta el comando del seeder:
   ```bash
   npm run seed
   ```

Esto ejecutará el script de seed configurado en tu proyecto.

---

## **Backend**

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

Hay 3 variables posible que se pueden utilizar. 2 son para pruebas de desarrollo (`.env`, `.env.staging`) y una que simula el entorno de despliegue como el que puedes encontrar en render (`.env.production`)

- **Development**: Archivo `.env` en la carpeta `backend`. Este será el fichero para **lanzar el sistema local sin docker** Recuerda que esto es un ejemplo y lo tienes que guardar con tus datos:
```
# Datos BBDD PostgreSQL
PG_USER=postgres
PG_HOST=localhost
PG_DATABASE=postgres
PG_PASSWORD=123456
PG_PORT=5433
PG_SSL=false

# Servidor
PORT=3000

# Con docker o en render: NODE_ENV=production
NODE_ENV=development
```

- **Staging**: Archivo `.env.staging` en la carpeta `backend`. Este fichero sirve para emular más adelante el sistema fullstack completo utilizando `Docker local + BBDD SQL local`:
```
# Datos BBDD PostgreSQL
PG_USER=postgres
# Busca la IP de tu ordenador y cambiala en HOST:
PG_HOST=192.168.0.21
PG_DATABASE=postgres
PG_PASSWORD=123456
PG_PORT=5433
PG_SSL=false

# Servidor
PORT=3000
# Con docker o en render: NODE_ENV=production
NODE_ENV=production
```

NOTA: En PG_HOST no puedes usar `localhost` porque entra en conflicto con el contenedor que creará Docker, porque dentro de el también hay un `localhost`

Para encontrar la IP local de tu ordenador:
 - [what-is-my-local-ip-address](https://www.whatismybrowser.com/detect/what-is-my-local-ip-address/)

- **Production**: Archivo `.env.production` en la carpeta `backend`. Este fichero sirve para emular más adelante el sistema fullstack completo utilizando Docker + BBDD PostgreSQL desplegada en Render:
```
# Datos BBDD PostgreSQL en Render
PG_USER=demo_bbdd_user
PG_HOST=dpg-d3mbv2i5bo4t73a67kog-a.frankfurt-postgres.render.com
PG_DATABASE=demo_bbdd
PG_PASSWORD=fOT62hej0IY50nR35vq6hXLlVu7fUIJI
PG_PORT=5432
PG_SSL=true

# Servidor
PORT=3000
# Con docker o en render: NODE_ENV=production
NODE_ENV=production
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
# En producción con Render, personalizar con la URL de la API
# VITE_API_URL=https://tu-backend-en-render.com/api

# Para pruebas en local
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
   npm run preview
   ```

---

## **Montaje con Docker**

### **Backend**
El backend tiene su propio Dockerfile ubicado en `backend/Dockerfile`. Este archivo define cómo construir la imagen del backend.

#### **Construir y ejecutar el backend con Docker**
1. Ve a la carpeta `backend`:
   ```bash
   cd backend
   ```
2. Construye la imagen del backend:
   ```bash
   docker build -t backend-image .
   ```
3. Ejecuta el contenedor del backend:
   ```bash
   docker run -d -p 3000:3000 --name backend-container backend-image
   ```
   - Esto expone el backend en el puerto `3000`.

### **Sistema Completo**
El sistema completo (backend y frontend) está definido en el Dockerfile ubicado en la raíz del proyecto (`Dockerfile`). Este archivo combina ambos servicios en una sola imagen.

### **Dockerfile del Sistema Completo**

El Dockerfile del sistema completo está diseñado para crear una imagen ligera y eficiente utilizando Node.js del sistema FullStack completo. A continuación, se detalla su contenido y pasos para su uso.

#### **Código del Dockerfile**
```dockerfile
# Usar una imagen base de Node.js
FROM node:20-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json y package-lock.json del backend
COPY package*.json ./

# Instalar dependencias del backend
RUN npm install

# Copiar el resto de los archivos del backend
COPY . .

# Exponer el puerto del backend
EXPOSE 3000

# Establecer las variables de entorno en tiempo de ejecución
ENV NODE_ENV=production

# Comando para iniciar el backend
CMD ["npm", "start"]
```

#### **Explicación del Dockerfile**
1. **Imagen base**: Se utiliza `node:20-alpine` como imagen base por su ligereza y optimización.
2. **Directorio de trabajo**: Se establece `/app` como el directorio de trabajo dentro del contenedor.
3. **Copia de dependencias**: Se copian `package.json` y `package-lock.json` para instalar las dependencias del backend.
4. **Instalación de dependencias**: Se ejecuta `npm install` para instalar las dependencias necesarias.
5. **Copia del código fuente**: Se copian todos los archivos restantes del backend al contenedor.
6. **Exposición del puerto**: Se expone el puerto `3000` para que el backend sea accesible.
7. **Variables de entorno**: Se establece `NODE_ENV=production` para optimizar el rendimiento en producción.
8. **Comando de inicio**: Se utiliza `npm start` para iniciar el servidor del backend.

### **Comandos utilizados para Docker**

#### **Construir la imagen del sistema completo**
```bash
docker build -t app_fullstack .
```

#### **Ejecutar el contenedor del sistema completo**

- **Staging** Uso del `.env.staging`. Entorno de pruebas con contenedor Docker en local
```bash
docker run -p 3000:3000 \
  --env-file backend/.env.staging \
  --env-file frontend/.env \
  app_fullstack
```
- Este comando utiliza los archivos de variables de entorno específicos para el backend y el frontend.
- Expone el sistema completo en el puerto `3000`.


- **Production** Uso del `.env.production`. Emula el entorno de producción con contenedor Docker en local + datos de BBDD postgreSQL desplegada en la nube (Render)
```bash
docker run -p 3000:3000 \
  --env-file backend/.env.production \
  --env-file frontend/.env \
  app_fullstack
```
- Este comando utiliza los archivos de variables de entorno específicos para el backend y el frontend.
- Expone el sistema completo en el puerto `3000`.
