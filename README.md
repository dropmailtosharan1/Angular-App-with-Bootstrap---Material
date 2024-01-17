# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## for the reference gothrough this github link - https://github.com/arctutorials

## Added the Bootstrap CSS link & JS link in index.js & commented it

## Install bootstrap jquery popper

npm install bootstrap jquery popper --save
If you don't give the save it goes to global reference we use save it comes to the local node-modules reference is good


## Update angular.json file

 "styles": [
              "src/styles.scss",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "./node_modules/bootstrap/dist/js/bootstrap.min.js",
              "./node_modules/popper/index.js",
              "./node_modules/jquery/dist/jquery.min.js"
            ]

## Install Angular Material

ng add @angular/material