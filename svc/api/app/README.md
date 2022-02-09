# API

Provides API endpoint for all api needs. In addition to API
endpoint also provides CLI interface.

## Building locally

Building supports specific targets for desired environment

```commandLine
docker build . -t api --target development
```

## API endpoints

Upon building the api is immediately available like so

```commandLine
docker run -it api
```

## CLI commands

Upon building the cli is immediately available like so

```commandLine
docker run -it api jane <commands>
```
