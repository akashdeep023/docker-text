# 🐳 Docker CheatSheet

## 📦 IMAGES

-   **List all local images**

    ```bash
    docker images
    ```

-   **Delete an image**

    ```bash
    docker rmi <image_name>
    ```

-   **Remove unused images**

    ```bash
    docker image prune
    ```

-   **Build an image from a Dockerfile**

    ```bash
    docker build -t <image_name>:<version> .
    # Version is optional

    docker build -t <image_name>:<version>.-no-cache
    # Build without cache
    ```

## 🧱 CONTAINERS

-   **List all containers (running & stopped)**

    ```bash
    docker ps -a
    ```

-   **List only running containers**

    ```bash
    docker ps
    ```

-   **Create & run a new container**

    ```bash
    docker run <image_name>
    # If image is not local, it's pulled from DockerHub
    ```

-   **Run container in background**

    ```bash
    docker run -d <image_name>
    ```

-   **Run container with a custom name**

    ```bash
    docker run --name <container_name> <image_name>
    ```

-   **Port binding in a container**

    ```bash
    docker run -p <host_port>:<container_port> <image_name>
    ```

-   **Set environment variables**

    -   `<container_name>` or `<container_id>`

    ```bash
    docker run -e <var_name>=<var_value> <container_name>
    ```

-   **Start / Stop container**

    ```bash
    docker start <container_name>
    docker stop <container_name>
    ```

-   **Inspect a running container**

    ```bash
    docker inspect <container_name>
    ```

-   **Delete a container**
    ```bash
    docker rm <container_name>
    ```

## 🧰 TROUBLESHOOTING

-   **Fetch logs**

    ```bash
    docker logs <container_name>
    ```

-   **Open shell in running container**
    ```bash
    docker exec -it <container_name> /bin/bash
    # or
    docker exec -it <container_name> sh
    ```

## 📤 DOCKER HUB

-   **Pull an image**

    ```bash
    docker pull <image_name>
    ```

-   **Push an image**

    ```bash
    docker push <username>/<image_name>
    ```

-   **Login to DockerHub**

    ```bash
    docker login -u <username>
    # or just
    docker login
    # logout using
    docker logout
    ```

-   **Search an image**
    ```bash
    docker search <image_name>
    ```

## 💾 VOLUMES

-   **List all volumes**

    ```bash
    docker volume ls
    ```

-   **Create named volume**

    ```bash
    docker volume create <volume_name>
    ```

-   **Delete named volume**

    ```bash
    docker volume rm <volume_name>
    ```

-   **Mount named volume**

    ```bash
    docker run --volume <volume_name>:<mount_path>
    # or
    docker run --mount type=volume,src=<volume_name>,dst=<mount_path>
    ```

-   **Mount anonymous volume**

    ```bash
    docker run --volume <mount_path>
    ```

-   **Create a bind mount**

    ```bash
    docker run --volume <host_path>:<container_path>
    # or
    docker run --mount type=bind,src=<host_path>,dst=<container_path>
    ```

-   **Remove unused volumes**
    ```bash
    docker volume prune
    ```

## 🌐 NETWORKING

-   **List networks**

    ```bash
    docker network ls
    ```

-   **Create a new network**

    ```bash
    docker network create <network_name>
    ```

-   **Remove a network**

    ```bash
    docker network rm <network_name>
    ```

-   **Prune unused networks**
    ```bash
    docker network prune
    ```
