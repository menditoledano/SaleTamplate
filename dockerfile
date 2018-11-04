# FROM node:8

# # Create app directory
# WORKDIR /usr/src/app

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./

# RUN npm install && ng build
# # If you are building your code for production
# # RUN npm install --only=production

# # Bundle app source
# COPY . .

# EXPOSE 7700
# CMD [ "npm", "start" ]


FROM node:8.11.2-alpine as node

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build







# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

COPY server.js /usr/src/app/
# Bundle app source
COPY . /usr/src/app

#EXPOSE 7700
CMD [ "npm", "run", "build" ]