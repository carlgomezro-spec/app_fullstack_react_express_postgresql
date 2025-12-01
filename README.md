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

### **Ejecutar el frontend individualmente**
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

## **Cargar el Seeder**

El archivo `seeder.js` se utiliza para inicializar la base de datos con datos de ejemplo. Sigue estos pasos para ejecutarlo:

1. Ve a la carpeta `backend`:
   ```bash
   cd backend
   ```
2. Ejecuta el seeder:
   ```bash
   node seeder.js
   ```

Esto creará las tablas necesarias y las poblará con datos de ejemplo.

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

### **Dockerfile del Backend**

El Dockerfile del backend se encuentra en la carpeta `backend/` y está diseñado para crear una imagen ligera y eficiente utilizando Node.js.

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

#### **Construcción y ejecución**
Para construir y ejecutar la imagen del backend utilizando este Dockerfile, sigue estos pasos:

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

#### **Construir y ejecutar el sistema completo con Docker**
1. Ve a la carpeta raíz del proyecto:
   ```bash
   cd app_fullstack
   ```
2. Construye la imagen del sistema completo:
   ```bash
   docker build -t fullstack-image .
   ```
3. Ejecuta el contenedor del sistema completo:
   ```bash
   docker run -d -p 80:80 --name fullstack-container fullstack-image
   ```
   - Esto expone el sistema completo en el puerto `80`.

### **Dockerfile del Sistema Completo**

El Dockerfile del sistema completo está diseñado para crear una imagen ligera y eficiente utilizando Node.js. A continuación, se detalla su contenido y pasos para su uso.

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

#### **Construcción y ejecución**
Para construir y ejecutar la imagen del sistema completo utilizando este Dockerfile, sigue estos pasos:

1. Ve a la carpeta raíz del proyecto:
   ```bash
   cd app_fullstack
   ```
2. Construye la imagen del sistema completo:
   ```bash
   docker build -t fullstack-system .
   ```
3. Ejecuta el contenedor del sistema completo:
   ```bash
   docker run -d -p 3000:3000 --name fullstack-container fullstack-system
   ```
   - Esto expone el sistema completo en el puerto `3000`.

### **Comandos utilizados para Docker**

#### **Construir la imagen del sistema completo**
```bash
docker build -t app_fullstack .
```

#### **Ejecutar el contenedor del sistema completo**
```bash
docker run -p 3000:3000 \
  --env-file backend/.env.production \
  --env-file frontend/.env \
  app_fullstack
```
- Este comando utiliza los archivos de variables de entorno específicos para el backend y el frontend.
- Expone el sistema completo en el puerto `3000`.

---

## **Variables de Entorno**

Para que el sistema funcione correctamente, es necesario configurar las siguientes variables de entorno:

### **Backend**
Crea un archivo `.env` en la carpeta `backend` con las siguientes variables:
```env
PORT=3000
PG_USER=postgres
PG_PASSWORD=123456
PG_HOST=localhost
PG_DATABASE=postgres
PG_PORT=5432
PG_SSL=false
```

### **Sistema Completo**
Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
```env
# Variables del backend
PORT=3000
PG_USER=postgres
PG_PASSWORD=123456
PG_HOST=localhost
PG_DATABASE=postgres
PG_PORT=5432
PG_SSL=false

# Variables del frontend
VITE_API_URL=http://localhost:3000/api
```

---

## **Notas Adicionales**

- Asegúrate de que las variables de entorno estén configuradas correctamente en los archivos `.env`.
- Usa rutas relativas (`/api`) para evitar problemas con las URLs en diferentes entornos.
- Verifica los logs del backend y frontend para solucionar problemas.
- Asegúrate de que las variables de entorno estén configuradas correctamente antes de construir las imágenes.
- Usa rutas relativas (`/api`) para evitar problemas con las URLs en diferentes entornos.
- Verifica los logs de los contenedores para solucionar problemas.

---

## **Comandos del package.json en la carpeta raíz**

El archivo `package.json` en la carpeta raíz contiene varios scripts que facilitan la gestión del proyecto. A continuación, se explica la funcionalidad de cada uno de ellos:

#### **Scripts**

1. **`install`**
   ```bash
   npm run install
   ```
   - Este comando instala las dependencias tanto del backend como del frontend.
   - Utiliza el flag `--prefix` para especificar las carpetas correspondientes.

2. **`start:backend`**
   ```bash
   npm run start:backend
   ```
   - Inicia el servidor del backend ejecutando el script `start` definido en el `package.json` del backend.

3. **`start:frontend`**
   ```bash
   npm run start:frontend
   ```
   - Construye el frontend y luego lo inicia.
   - Ejecuta el script `build` seguido del script `start` definidos en el `package.json` del frontend.

4. **`start`**
   ```bash
   npm run start
   ```
   - Inicia tanto el backend como el frontend de manera concurrente.
   - Utiliza la dependencia `concurrently` para ejecutar los scripts `start:backend` y `start:frontend` al mismo tiempo.

5. **`build`**
   ```bash
   npm run build
   ```
   - Construye el frontend ejecutando el script `build` definido en su `package.json`.

6. **`test`**
   ```bash
   npm run test
   ```
   - Este comando está configurado como un placeholder y actualmente no ejecuta pruebas.
   - Devuelve un mensaje indicando que no hay pruebas especificadas.

7. **`dev`**
   ```bash
   npm run dev
   ```
   - Inicia el backend y el frontend en modo de desarrollo de manera concurrente.
   - Utiliza `concurrently` para ejecutar los scripts `dev` definidos en los `package.json` de ambas carpetas.

#### **Dependencias**

- **`concurrently`**: Permite ejecutar múltiples comandos de forma simultánea en una sola línea de comando. Es utilizado en los scripts `start` y `dev` para iniciar el backend y el frontend al mismo tiempo.

# Comandos del package.json

Este archivo contiene una lista de scripts que facilitan la gestión del proyecto. A continuación, se explica el propósito de cada comando:

- **install**: Instala las dependencias necesarias tanto para el backend como para el frontend.
  ```bash
  npm run install
  ```

- **start:backend**: Inicia el servidor del backend.
  ```bash
  npm run start:backend
  ```

- **start:frontend**: Construye la aplicación del frontend y luego la inicia.
  ```bash
  npm run start:frontend
  ```

- **start**: Ejecuta tanto el backend como el frontend de manera concurrente.
  ```bash
  npm run start
  ```

- **build**: Construye la aplicación del frontend.
  ```bash
  npm run build
  ```

- **test**: Comando de prueba predeterminado que actualmente no ejecuta ningún test.
  ```bash
  npm run test
  ```

- **dev**: Ejecuta el backend y el frontend en modo de desarrollo de manera concurrente.
  ```bash
  npm run dev
  ```

### Dependencias de desarrollo

- **concurrently**: Permite ejecutar múltiples comandos de npm al mismo tiempo.