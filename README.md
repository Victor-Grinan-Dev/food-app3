# FoodApp

Food app is a class project for the react22k course

dependencies:

- react framework
- axios
- json server (for local serve the db.json file)

clone the repo, cd in it and type in terminal:

```shell
npm install
npm start
npm local-start
```

(notice that the command 'npm start' is for deploying in heroku, use local-start instead)

- If you want to change the port that json server uses you can specify it in that last command.
  Just remember to change it also in ./src/components/pages/Browse.js line 7.

# To deploy the application, follow the below steps.

## 1) Add GitHub Pages dependency package

Install "gh-pages" package using the below command.

```shell
npm install gh-pages save-dev
```

Makefile

## 2) Add homepage property to package.json file

Add the below property to your package.json file.
For a GitHub user site:
"homepage": "https://{username}.github.io"
For a custom domain:
"homepage": "https://testwebsite.com"

## 3) Add deploy scripts to package.json file

Add both predeploy and deploy property scripts to the package.json file as below,

```shell
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
```

Makefile

The "predeploy" command is used to bundle the react application and the "deploy" command helps to deploy the bundled file.

## 4) Create a remote GitHub repository, if not done

Initialize the Git using "git init" command.
Add it as remote using "git remote add origin your-github-repository-url.git" command.

## 5) Deploy the Application to GitHub Pages

Now run the below command to deploy your react application to GitHub Pages.

```shell
npm run deploy
```

Makefile

## 6) Access deployed site

To get the published URL,

Go to your GitHub Repo.
Click Settings menu.

Go to the "Pages" Section.

You can see the "Your site is published" message.
Select branch to "gh-pages" and click on the "Save" button.

Now, you can access the deployed site using the published URL!

### remember - Commit and Push the codebase

Commit and push your code changes to the GitHub repo. It is an optional one. But, for maintaining the code base we can do this step.

```shell
git add .
git commit -m "commit message"
git push origin master
```

## Heroku deploy

1- create an account in heroku https://signup.heroku.com/login

in dashboard right top corner:
create new app button

2- install Heroku in your computer

```shell
brew tap heroku/brew && brew install heroku
```

3- install heroku in your app

- create new file in the root of your repository called:

```
server.js
```

- copy this in it:
  ```shell
  const jsonServer = require('json-server'); const server = jsonServer.create(); const router = jsonServer.router('./db.json'); const middlewares = jsonServer.defaults({ static: './build' }); const PORT = process.env.PORT || 8000; server.use(middlewares); server.use(jsonServer.rewriter({ '/api/\*': '/$1', })); server.use(router); server.listen(PORT, () => { console.log('Server is running'); });
  ```
- create new file in the root of your repository called: (notice - no extension)
  ```
  Procfile
  ```
- copy this in it:

  ```
  web: node? server.js
  ```

- in the package.json file of your app change:
  ```
  "start": "react-scripts start" => "start":"node server.js",
  ```
- in IDE terminal: (you might get an error... is ok)

```shell
npm install -g heroku
heroku --version
heroku login
heroku git:remote -a {your_app_name}
git remote show
git add .
git commit -m "awesome"
git push heroku
heroku open
```

4- go to browser and find "open app" btn, press it.

- copy the url of the browser, that is your app url.

5- setup database

5.a - if you are using a database from react json-server:

      ```
      change the end-point of your database url to "api/{your_database_end_point_name}" wherever your app is using it.
      ```

5.b - if you are using a database from mysql with symfony

      ```
      ????
      ```

5.c - if you are using a database external api remains unchanged.

6- remember save changes:

    ```shell
    git add .
    git commit -m "awesome"
    git push heroku
    ```

### dismount from heroku

in terminal:

```shell
heroku apps:destroy --app <appname> --confirm <appname>
```
