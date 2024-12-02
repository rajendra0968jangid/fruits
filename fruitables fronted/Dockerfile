# Use the official Node.js image as a base image
FROM node:18  

# Set the working directory in the container
WORKDIR /usr/src/app  

# Copy package.json and package-lock.json from the correct directory
COPY "fruitables fronted/package*.json" ./  

# Install the dependencies
RUN npm install  

# Copy the rest of the application code to the working directory
COPY "fruitables fronted/" .

# Expose the application port
EXPOSE 3000   

# Command to run the application
CMD ["npm", "run", "dev"]
