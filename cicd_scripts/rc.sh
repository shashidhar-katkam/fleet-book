#!/bin/sh
# stop execution when an error is encountered
set -e

# configure environment
. ./cicd_scripts/env.sh

# ensure we've got valid AWS credentials before proceeding
# aws sts get-caller-identity

# login into CodeArtifact repo
# we don't want to use the command as-is because it modifies user copy of `.npmrc`, which we will avoid
NPM_LOGIN_DRY_RUN=`aws codeartifact login --tool npm --repository prod.iot --domain iot-carrier --domain-owner 889079238629 --dry-run`
# we don't want to use the command as-is because it modified user copy of `pip.conf`, which we will avoid
PIP_LOGIN_DRY_RUN=`aws codeartifact login --tool pip --repository prod.iot --domain iot-carrier --domain-owner 889079238629 --dry-run`

# shellcheck disable=SC2016
TRANSFORM_DRY_RUN_TO_NPMRC='
BEGIN {
  print "# generated file; do not edit directly";
}
$4~/registry/ || $5~/true/ || $4~/_authToken$/ {
  print $4 "=" $5;
}
'
# overwrite the contents of placeholder `.npmrc`
echo "${NPM_LOGIN_DRY_RUN}" | awk "${TRANSFORM_DRY_RUN_TO_NPMRC}" > .npmrc

# shellcheck disable=SC2016
TRANSFORM_DRY_RUN_TO_YARNRC='
BEGIN {
  print "# generated file; do not edit directly";
}
$4~/registry/ {
  print $4 " \"" $5 "\"";
}
'
# overwrite the contents of placeholder `.yarnrc`
echo "${NPM_LOGIN_DRY_RUN}" | awk "${TRANSFORM_DRY_RUN_TO_YARNRC}" > .yarnrc

# shellcheck disable=SC2016
TRANSFORM_DRY_RUN_TO_PIP_CONF='
BEGIN {
  print "# generated file; do not edit directly";
  print "[global]";
}
$1~/pip/ && $2~/config/ && $3~/set/ && $4~/global.index-url/ {
  print "index-url = " $5;
}
'
# overwrite the contents of placeholder `pip.conf`
echo "${PIP_LOGIN_DRY_RUN}" | awk "${TRANSFORM_DRY_RUN_TO_PIP_CONF}" > pip.conf
echo "Instructions for pip:"
echo "export PIP_CONFIG_FILE=$(pwd)/pip.conf"
