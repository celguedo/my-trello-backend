#!/bin/bash
basePath=$PWD
environment=$1
projectName="my-trello-api"

source "$basePath/scripts/environment.sh"
source "$basePath/scripts/github.sh"
source "$basePath/scripts/dependencies.sh"
source "$basePath/scripts/pm2.sh"