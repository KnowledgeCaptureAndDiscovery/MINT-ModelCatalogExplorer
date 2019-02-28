# This branch is deprecated. Use Polymer3 or main branch
# MINT-ModelCatalogExplorer
A repository to show and explore models included in the MINT Model Catalog

## Install Node.js and npm

If you don't have Node.js or npm installed, follow the instructions [here](https://www.npmjs.com/get-npm). 

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Installing dependencies

Install the Polymer front-end related dependencies with

```
$ bower install
```
It will install all the dependencies in bower.json.


## Viewing Your Application

Run from the parent directory

```
$ cd ..
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create builds of your application in the `build/` directory, optimized to be served in production. You can then serve the built versions by giving `polymer serve` a folder to serve from:

```
$ polymer serve build/default
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
