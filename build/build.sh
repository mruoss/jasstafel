#/bin/#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BASE_DIR="${DIR}/.."

docker build -t michael_ruoss/wedding/jt_build:latest -f "${DIR}/Dockerfile.build"  "$BASE_DIR"
docker build -t gitlab.ufirstgroup.com:4567/michael_ruoss/wedding/jasstafel:latest -f "${DIR}/Dockerfile" "$BASE_DIR"
