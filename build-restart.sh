#!/usr/bin/env bash

git pull
# build the docker image
docker build -t leena.site -f Dockerfile .

docker rm -f leena.site && ~/containers/leena-site.sh