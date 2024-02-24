FROM node:alpine

ENV PORT=5000

WORKDIR /app

COPY package.json .
RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE ${PORT}
CMD [ "npm", "start" ]