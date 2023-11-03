#!/bin/sh
# stop execution when an error is encountered
set -e

login(){
    write_log "INFO" "Logging into Code Artifact for $1"
    aws codeartifact login --tool $1 --repository $2 --domain $3 --domain-owner $4
    write_log "INFO" "Logged into Code Artifact for $1 Successfully"
}

write_log() {
    if [ $1 = ERROR ]
    then
        echo "-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_"
        echo "$0: $1: $2"
        echo "-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_"
    else
        echo "$0: $1: $2"
    fi
}
# configure environment
. ./cicd_scripts/env.sh

# login into CodeArtifact repo
login "npm" "prod.iot" "iot-carrier" "889079238629"
login "pip" "prod.iot" "iot-carrier" "889079238629"
