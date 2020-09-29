git checkout master
git pull origin master
yarn install
npm run build:systemtest
ssh -i systemtest-ssh-key.pem root@139.180.136.101 << EOF
  mkdir -p /var/www/manage-document-vnpost
  rm -rf /var/www/manage-document-vnpost/build
EOF
scp -i systemtest-ssh-key.pem -C -r /Users/vnhuyha/Desktop/Work/Project/VnPostDocument/manage-document-vnpost/build root@139.180.136.101:/var/www/manage-document-vnpost/build
scp -i systemtest-ssh-key.pem -C /Users/vnhuyha/Desktop/Work/Project/VnPostDocument/manage-document-vnpost/package.json root@139.180.136.101:/var/www/manage-document-vnpost/package.json
scp -i systemtest-ssh-key.pem -C /Users/vnhuyha/Desktop/Work/Project/VnPostDocument/manage-document-vnpost/server.js root@139.180.136.101:/var/www/manage-document-vnpost/server.js
ssh -i systemtest-ssh-key.pem root@139.180.136.101 << EOF
  cd /var/www/manage-document-vnpost
  npm install
  pm2 stop manage-document-vnpost
  pm2 start server.js --name manage-document-vnpost
EOF
