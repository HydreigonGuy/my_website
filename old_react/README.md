# my_website

Welcome to my website project!

### CICD

This project has CICD with github actions, it will automatically build the docker image for this code and send it on docker-hub.

### Deploying

To deploy the project, just use the docker image:

> docker login

> docker run image-name:latest

You can also use docker-compose, the ***prod.docker-compose.yaml*** file is made for deploying it on prod.

### Running it on local

To run it locally use the docker-compose by running:

> sudo docker-compose up --build
