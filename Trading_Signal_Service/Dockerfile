# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the service source code into the container
COPY Trading_signal.js .

# Expose port 8000 for the Express server
EXPOSE 8000

# Specify the command to run the service
CMD ["node", "Trading_signal.js"]
