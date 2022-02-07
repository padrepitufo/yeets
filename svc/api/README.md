# API Service

This service provides an API for the corresponding database

## Building

run a particular stage

```commandLine
docker build .  -t api --target development
```

## Running with local docker

```commandLine
docker run -it -p 127.0.0.1:8080:8000/tcp api
```
