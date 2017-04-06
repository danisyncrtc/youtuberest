FROM node:7.7.3

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# nodemon for live reloading in development
RUN npm install -gq nodemon

# Install app dependencies
COPY package.json /app
RUN npm install -q

# Bundle app source
COPY . /app

EXPOSE 3000

ENV MONGO_HOST='mongo'

CMD [ "npm", "start" ]
