
# Product-Management-System

PIM is an eCommerce business needing to collect, manage, enrich, and distribute product content to sales and eCommerce channels with speed and efficiency. As well as managing product data, there is also the need to manage and distribute digital assets and various media files.

## Schema

![Supbase Schema](https://user-images.githubusercontent.com/114575157/210393190-b626c025-50a5-4476-83dc-b778d92b3cc3.png)

## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v18.11.0

    $ npm --version
    8.19.2

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

## Install

    $ git clone https://github.com/tanu-sh1201/PIM.git
    $ cd product-managment
    $ npm install

## Configure app

    create .env file with following values

    SERVER_PORT=3004
    DB_HOST = Database Host ex localhost:3306
    DB_DATABASE= Database Name ex PIM
    DB_PORT= Port No on which database is running ex for postgres 3306
    DB_USERNAME= User Name of DB User
    DB_PASSWORD= Paasword of Db User



    #required for sending email
    CLIENT_ID
    CLEINT_SECRET
    REDIRECT_URI
    REFRESH_TOKEN


    #Custom values can be used for this fields
    FPT_EXPIRES_IN : expire time for reset password link
    BASE_URL = "http://localhost:3004"
    REDIS_PORT = Port for redis ex 5678
    REDIS_EXT = "120"
    STDOUT_LOG = "true"
    JWT_ACCESS_EXPIRATION : expire time fot access token
    JWT_REFRESH_EXPIRATION : expire time for refresh token
    SECRET_KEY_ACCESS : Secret key for access token
    SECRET_KEY_REFRESH : Secret key for refresh token

## Database conectivity

    you need a database and make changes in .env and config.js file

## Running the project

     npm start

## Output on running npm start

    Executing (default): SELECT 1+1 AS result
    ... Microservice db ???
    ... Redis db ???
    --- Server started on 3004 ---

## API Documentation

- For further details about each feature you can refere to Api docs
  [here](https://documenter.getpostman.com/view/23688373/2s8Z72UrN9
=======

