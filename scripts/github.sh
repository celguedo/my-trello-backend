echo "Cleaning previous changes..."
git checkout .

echo "The project $projectName is going to be deployed in the " $environment " environment.";


if [ "$environment" = "staging" ]; then
  echo "Switching to test branch..."
  git checkout test
fi

if [ "$environment" = "production" ]; then
  echo "Switching to master branch..."
  git checkout master
fi

echo "Fetching updates..."
{
  git pull
} || 
{ 
  echo "[github Error]: Authentication or Fetch failed"
  exit 1;
}