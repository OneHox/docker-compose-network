docker network create main-network
docker network create in-memory-db
docker network create persist-db

docker compose -f redis/docker-compose.yaml up -d --build
docker compose -f mongo/docker-compose.yaml up -d --build
docker compose -f users/docker-compose.yaml up -d --build
docker compose -f posts/docker-compose.yaml up -d --build