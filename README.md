# GradesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Libraries Used

This app was built with Angular 7 using the Angular CLI.

In addition Bootstrap was used for styling and ng-bootstrap was used to provide directives for native Angular functionality.

The Kolkov angular-editor was used 'as-is' for the Editor component. 

## Architecture

Seeing as the demo app is extremely simple, several components were implemented under one module. Each component provides a different part of the view.
A service was created to return data and implement non-view logic, and several model classes were created for typing. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
