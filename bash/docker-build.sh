#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

IMAGE_NAME="cw_node_protoc_plugin"
VERSION=$(node -p "require('./package.json').version")

docker build \
  -f docker/Dockerfile \
  -t ${IMAGE_NAME}:${VERSION} \
  -t ${IMAGE_NAME}:latest \
  .
