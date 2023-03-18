#/bin/#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BASE_DIR="${DIR}/.."

cd $BASE_DIR
yarn build
docker buildx build --progress=plain -t registry.gitlab.com/mruoss/wedding/jasstafel:latest -f "build/Dockerfile" "." --push
