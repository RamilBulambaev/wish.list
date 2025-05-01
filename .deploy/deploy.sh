cd ~/wish.list
npm run build:prod 

rm -rf ~/../var/www/wish.list/html
mv ~/wish.list/build ~/../var/www/wish.list/html