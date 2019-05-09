#!/bin/bash

if [ "$1" = 'start' ]; then
  su digithinkit -c "node dist/main.js"
fi

exec runuser -u digithinkit "$@"