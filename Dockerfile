# Imagem base
FROM node:16-alpine3.16

# Workdir
WORKDIR /app

# Coping package.json and package-lock.json
COPY package*.json ./

# Installing dependencies
RUN npm install 
# Copying source code
COPY . .

# Exposing port
EXPOSE 3000

# Starting app
CMD [ "npm","start" ]
