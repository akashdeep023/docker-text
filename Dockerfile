# Build a Docker image for a Node.js application with MongoDB
# Command to build the image: docker build -t <your-dockerhub-username>/testapp .
# Command to push the image to Docker Hub: docker push <your-dockerhub-username>/testapp

# Use an official Python runtime as a parent image
FROM node

# Define environment variable
ENV MONGODB_USERNAME=admin \
    MONGODB_PASSWORD=password
   
# Install any needed packages specified in requirements.txt
RUN mkdir -p textapp
    
# Copy the current directory contents into the container at /app
COPY . /textapp

# Run app.py when the container launches
CMD ["node", "/textapp/server.js"]