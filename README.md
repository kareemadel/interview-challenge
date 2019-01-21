## Fullstack Challenge
The goal of this challenge is to assess your general domain knowledge of web development.

### Summary
Develop an application a simple weather application with 2 components
1. A simple front end which displays a 7 day forecast of the weather,users should be able to view only 14 days in total
2. A simple rest api should be created which the front end will interface with in order to access the weather data

### Rules
1. You must utilize a front end framework like angular or react
2. Instructions must be included to run this codebase locally
3. It is not expected for you to create a database server, feel free to reference a static file for the weateher data
4. Include comments in your code
5. Create a fork of this repo and send the url of the fork once finished to jason@scoutible.com

### Suggestions
1. While design is not critical, having the interface be accessible is crucial
2. Feel free to overwrite this file when creating your codebase
3. Be clear how and why you chose your data model for the weather data

### Requirements
1. Node.js(LTS)
2. npm
3. The apps use ports 3000 and 5000 so make sure that no other app is using these ports.

### How to run
1. Clone the repo
    ```bash
    $ git clone https://github.com/kareemadel/interview-challenge
    ```
2. Run the API in a shell.
    ```bash
    # cd to the API directory
    $ cd interview-challenge/backend_weather/
    # install the dependencies
    $ npm i
    # Start the app
    $ npm start
    ```
3. Run the React app in a separate shell.
    ```bash
    # Go the folder of the react app
    $ cd interview-challenge/frontend_weather/
    # install the dependencies
    $ npm i
    # start the app
    $ npm start
    ```
4. Visit the app at http://localhost:3000