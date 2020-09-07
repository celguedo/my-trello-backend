echo "Installing dependencies of $projectName..."
{
  npm install
} ||
{
  echo "[npm Error]: We cannot install dependencies for the $projectName module"
  exit 1;
}