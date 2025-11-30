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