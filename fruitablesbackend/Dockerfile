# Use the official Node.js image as a base image  
FROM node:18  

# Set the working directory in the container  
WORKDIR /usr/src/app  

# Copy package.json and package-lock.json files to the working directory  
COPY package*.json ./  

# Install the dependencies  
RUN npm install  

# Copy the rest of the application code to the working directory  
COPY . .  

# Expose the application port  
EXPOSE 8800   

# Command to run the application  
CMD ["npm", "run","dev"]
