#!/bin/sh

if [ -z "$1" ]; then
  echo "Path not set. Usage: ./codegen.sh PATH"
  exit 1
fi

yarn envsub $1/subgraph.yaml $1/subgraph.temp.yaml

yarn graph deploy \
    --node ${DEPLOY_URL} \
    --ipfs ${IPFS_URL} \
    ${SUBGRAPH_NAME} \
    $1/subgraph.temp.yaml