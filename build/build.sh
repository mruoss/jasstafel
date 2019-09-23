#/bin/#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BASE_DIR="${DIR}/.."

DOCKER_BUILDKIT=1 docker build -t gitlab.ufirstgroup.com:4567/michael_ruoss/wedding/jasstafel:latest -f "${DIR}/Dockerfile" "$BASE_DIR"
