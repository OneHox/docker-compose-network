docker compose -f redis/docker-compose.yaml down
docker compose -f mongo/docker-compose.yaml down
docker compose -f users/docker-compose.yaml down
docker compose -f posts/docker-compose.yaml down

docker network rm main-network
docker network rm in-memory-db
docker network rm persist-db