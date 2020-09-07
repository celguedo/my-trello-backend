if [ "$environment" != "staging" ] && [ "$environment" != "production" ]; then
  echo "ERROR: You need to pass as parameter the name of the environment (staging or production) to run this script.";
  exit 1;
fi