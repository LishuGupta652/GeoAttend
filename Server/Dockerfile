FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm rebuild bcrypt 
COPY . .
EXPOSE 5000
CMD [ "npm", "run", "start:dev" ]
