# Use the base Node.js image
FROM node:14-alpine

# Create the application directory
WORKDIR /app

# Copy the application files
COPY app.js /app/
COPY public /app/public

# Install Express dependencies
RUN npm install express

# Expose port 5002
EXPOSE 5002

# Run the application
CMD ["node", "app.js"]