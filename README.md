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


## Next, take out the config

Config extracted from running container, see Dockerfile for how it is copied back into new image (with any mods)

```
mkdir nginx
docker cp fe:/etc/nginx/conf.d/default.conf nginx/default.conf
```

## And then

With the addition of the `try_files` line in nginx config, as discussed in [this gist](https://gist.github.com/cjus/b46a243ba610661a7efb), it is possible to type angular-ui-router addresses into the address bar!
