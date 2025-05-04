# docker-test

---

## Use terminal

### Install `mongo` docker image

```bash
docker run -d \
-p27017:27017 \
--name mongo \
--network mongo-network \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
mongo
```

### Install `mongo-express` docker image

```bash
docker run -d \
-p8081:8081 \
--name mongo-express \
--network mongo-network \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
-e ME_CONFIG_MONGODB_URL="mongodb://admin:password@mongo:27017/" \
mongo-express
```

-   Make sure the `mongo` and `mongo-express` _username_ and _password_ are the same.

## Use `name.yaml` file

### `.env` file setup

```
MONGO_USERNAME=admin
MONGO_PASSWORD=password
MONGO_URL=mongodb://<username>:<password>@localhost:27017
MONGO_DB=database-name
```

### `name.yaml` file setup

```yaml
# docker compose -f mongodb.yaml up -d => start the containers in detached mode
# docker compose -f mongodb.yaml down => stop the containers
version: "3.8" # optional, specify the version of the docker-compose file format

services:
    mongo:
        image: mongo
        ports:
            - "27017:27017"
        environment:
            - MONGO_INITDB_ROOT_USERNAME=${MONGO_USERNAME} # MONGO_INITDB_ROOT_USERNAME: username
            - MONGO_INITDB_ROOT_PASSWORD=${MONGO_PASSWORD}
            - MONGO_INITDB_DATABASE=${MONGO_DB}
        volumes:
            - /c/Users/path-dir/Desktop/data:/data/db # persist data in a named volume (host_directory:/container_directory) (mongodb data path = /data/db)

    mongo-express:
        image: mongo-express
        ports:
            - "8081:8081"
        depends_on:
            - mongo
        environment:
            - ME_CONFIG_MONGODB_ADMINUSERNAME=${MONGO_USERNAME}
            - ME_CONFIG_MONGODB_ADMINPASSWORD=${MONGO_PASSWORD}
            - ME_CONFIG_MONGODB_SERVER=mongo
```

---

## Create Dockerfile

```Dockerfile
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
```
