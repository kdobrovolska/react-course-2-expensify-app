git init -create new repository
git add .       //all files
git commit -m "message"
git log
git status 
git commit -am "message' (together add and commit -only if there are no new files , only modified)

/////////// (GitHub password => Lika1987)
copy local repository to remote:
1) git remote add origin  git"github.com/kdobrovolska/react-course-2-expensify-app.git
2)git push -u origin master  (only first time)

git remote  - look to GitHub
git push  - send changes to GitHub

//heroku (heroku password => Lika1987!!)
heroku login 
git push heroku master    (send data to heroku)
heroku logs     -log file of heroku
heroku open     - start application


//to work with production version:
1)yarn run build:prod       ( "webpack -p --env production")
2) yarn run start           ("node server/server.js")

// to work locally
yarn run dev-server

//install programm (for instace chalk) for devDependencies:
yarn add chalk --dev

// install all from package.json for production mode 
//(after deleting node_modules)
yarn install --production

// install all from package.json 
//(after deleting node_modules)
yarn install

