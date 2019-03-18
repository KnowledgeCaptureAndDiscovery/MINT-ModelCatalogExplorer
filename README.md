# MINT-ModelCatalogExplorer
A repository to show and explore models included in the MINT Model Catalog

A demo of this application may be found at http://ontosoft.isi.edu:8081/

At the moment, **we only support Google Chrome browser**.

## Running using Docker

The images are available at [DockerHub](https://cloud.docker.com/u/mintproject/repository/docker/mintproject/modelcatalog)

To run the production image

```shell
$ docker-compose  -f docker-compose.yml -f docker-compose.prod.yml up -d
```

To run the dev image

```shell
$ docker-compose  -f docker-compose.yml -f docker-compose.dev.yml up -d
```

## Running without Docker 

### Install Node.js and npm

If you don't have Node.js or npm installed, follow the instructions [here](https://www.npmjs.com/get-npm). 

### Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

### Installing dependencies

Install the Polymer front-end related dependencies with

```
$ npm install
```
It will install all the dependencies in package.json.


### Viewing Your Application

Run from the parent directory

```
$ cd ..
$ npm start
```

### Building Your Application

```
$ polymer build
```

This will create builds of your application in the `build/` directory, optimized to be served in production. You can then serve the built versions by giving `polymer serve` a folder to serve from:

```
$ polymer serve build/default
```

### Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
