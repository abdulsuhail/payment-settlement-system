# Use the official Node.js image as a base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript code into JavaScript
RUN npm run build

# Expose the port that the application will run on
EXPOSE 8080

# Command to run the application
CMD [ "npm", "start" ]
