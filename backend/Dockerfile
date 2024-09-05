# Utiliser une image Node.js officielle comme base
FROM node:21

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier le reste des fichiers de l'application dans le répertoire de travail
COPY . .

# Exposer le port sur lequel l'application fonctionne (assurez-vous que ce port correspond à celui utilisé dans votre application)
EXPOSE 6005

# Démarrer l'application (remplacez 'server.js' par le nom de votre fichier d'entrée principal)
CMD ["node", "server.js"]
