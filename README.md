# Docker, nginx and angular

## Examine app

- `node server.js`

## Simple example

From [the most basic setup](https://hub.docker.com/_/nginx/)

```
docker build -t fe-image .
docker run --name fe -d -p 8080:80 fe-image
```

This has an error where typing in a url is intercepted by Docker, not forwarded to Angular app!
