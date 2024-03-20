# Use an official Node.js runtime as a base image
FROM node:lts

# Set the working directory in the container
WORKDIR /app

# Secure
# RUN groupadd -r app && useradd -r -g app app-user
# Copy the rest of the application code to the working directory
# COPY src/ ./src
# COPY public/ ./public
COPY . .

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

RUN ls -alR
# Install app dependencies
RUN npm install

# Expose the port that your app will run on
EXPOSE 3000

# Define the command to run your application
CMD [ "npm", "run", "start" ]


