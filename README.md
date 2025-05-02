# docker-test

## Install `mongo` docker image

```bash
docker run -d \
-p27017:27017 \
--name mongo \
--network mongo-network \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
mongo
```

## Install `mongo-express` docker image

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

Make sure the `mongo` and `mongo-express` _username_ and _password_ are the same.

## .env file setup

```
MONGO_URL=mongodb://<username>:<password>@localhost:27017
MONGO_NAME=database-name
```
