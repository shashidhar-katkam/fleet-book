# this script will inspect the input value for |
# if the input matches pattern such as dev|dm
# script will look for files matching pattern dev* and copy to dm*
# for example, if dev-us-east-1.yml is found, it will duplicate to dm-us-east-1.yml
# script will inspect current directory and first level subdirectories
# you could execute this script 
#         source ../../cicd_scripts/copy_env_file.sh $DEPLOY_ENVIRONMENT
#         sls deploy --stage $DEPLOY_ENVIRONMENT
# this would duplicate the dev file and update the environment variable $DEPLOY_ENVIRONMENT from dev|dlm to dlm 

IFS='|' read -ra env_input_array <<< "$1"

if [ -z ${env_input_array[1]} ] 
then
    # the input environment had no pipes
    # set the deployment environment to the parameter
    export DEPLOY_ENVIRONMENT="$1"
else
    # the input environment had pipes, will copy all files for the first element to the second element
    #check for files in current and first level subdirectories
    for d in $(ls -d */ ./)
    do
      for f in $(ls -1 $d | grep ${env_input_array[0]})
      do
        # make sure there are no destination files
        if [ $(ls $d | grep ${env_input_array[1]} | wc -l) -eq 0 ]
        then
          cp "$d$f" "$(echo $d$f | sed s/${env_input_array[0]}/${env_input_array[1]}/)"
        fi
      done
    done
    # set the deployment environment to the second element
    export DEPLOY_ENVIRONMENT=${env_input_array[1]}
fi