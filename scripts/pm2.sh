echo "Killing the pm2 ec-upload-api instance..."
pm2 delete "$projectName"

echo "Starting the pm2 instance..."
{
  pm2 restart ecosystem.config.js --env $environment --update-env
} ||
{
  echo "[pm2 Error]: We cannot deploy $projectName😱"
  exit 1;
}

echo "$projectName deployed successfully"