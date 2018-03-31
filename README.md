# MySQL API Node with JWT authentication
Main MVC structure to have the base of an API with Node and MySQL.

How to use it
-------------
The first thing: you need to edit the .env.example file and fill in the requested configuration.

Then: you need to have created a database with at least one user table and at least the id (usually primary key), email and password fields.

The last thing:
```console
$ mv .env.example .env
$ npm install
$ npm run watch:server
```
By default a development server on port 3000 will be started.
