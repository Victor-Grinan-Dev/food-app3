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

  (notice that the command start is for deploying in heroku)

- If you want to change the port that json server uses you can specify it in that last command.
  Just remember to change it also in ./src/components/pages/Browse.js line 7.

# To deploy the application, follow the below steps.

## 1) Add GitHub Pages dependency package

Install "gh-pages" package using the below command.

```shell
npm install gh-pages — save-dev
Makefile
```

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
  Makefile
```

The "predeploy" command is used to bundle the react application and the "deploy" command helps to deploy the bundled file.

## 4) Create a remote GitHub repository

Initialize the Git using "git init" command.
Add it as remote using "git remote add origin your-github-repository-url.git" command.

## 5) Deploy the Application to GitHub Pages

Now run the below command to deploy your react application to GitHub Pages.

```shell
npm run deploy
Makefile
```

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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
