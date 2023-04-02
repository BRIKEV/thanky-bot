# Use an official Node.js runtime as a parent image
FROM node:18.15.0-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to /app
COPY . .

# Set the environment variable for the Slack app token
ENV SLACK_APP_TOKEN=your-app-token-here

# Set the environment variable for the Slack bot token
ENV SLACK_BOT_TOKEN=your-bot-token-here

# Set the command to start the application
CMD ["npm", "start"]
