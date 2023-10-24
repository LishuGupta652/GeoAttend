FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . ./
RUN yarn build
EXPOSE 8080
CMD npm run start:frontend