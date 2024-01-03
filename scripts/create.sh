#!/bin/sh

yarn graph create \
    --node ${DEPLOY_URL} \
    ${SUBGRAPH_NAME}
