#!/bin/bash
docker stop fe
docker rm -f fe
docker build -t fe-image .
docker run --name fe -d -p 8080:80 fe-image
