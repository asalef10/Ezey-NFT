
echo "Build app.."
npm run build

echo "Deploying files to server..."
scp -r build/* tim@209.250.225.186:/var/www/html/portfolio

echo "Done!"