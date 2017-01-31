# Our Wedding Planner - Website

[![Build Status](https://travis-ci.org/ourweddingplanner/website.svg?branch=master)](https://travis-ci.org/ourweddingplanner/website)

Our Wedding Planner helps couples to enjoy their wedding day by taking the 
headache out of the organisation and planning of suppliers, venues, 
photographers, guest lists, gift wish lists, gifts received, etc. 
as well as to help manage costs.

### Setup

##### Prerequisites

First, install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli

Then, install [Bower](https://bower.io/) using
[npm](https://www.npmjs.com)

    npm install -g bower

Finally, install [Firebase CLI](https://firebase.google.com/docs/cli/) using
[npm](https://www.npmjs.com)

    npm install -g firebase-tools

##### Set active Firebase project

    firebase use

### Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app:

    polymer serve --open

### Build

This command performs HTML, CSS, and JS minification on the application
dependencies, and generates a service-worker.js file with code to pre-cache the
dependencies based on the entrypoint and fragments specified in `polymer.json`.
The minified files are output to the `build/unbundled` folder, and are suitable
for serving from a HTTP/2+Push compatible server.

In addition the command also creates a fallback `build/bundled` folder,
generated using fragment bundling, suitable for serving from non
H2/push-compatible servers or to clients that do not support H2/Push.

    polymer build

### Preview the build

This command serves the minified version of the app at `http://localhost:8080`
in an unbundled state, as it would be served by a push-compatible server:

    polymer serve build/unbundled

This command serves the minified version of the app at `http://localhost:8080`
generated using fragment bundling:

    polymer serve build/bundled

### Run tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

    polymer test

### Adding a new view

You can extend the app by adding more views that will be demand-loaded
e.g. based on the route, or to progressively render non-critical sections of the
application. Each new demand-loaded fragment should be added to the list of
`fragments` in the included `polymer.json` file. This will ensure those
components and their dependencies are added to the list of pre-cached components
and will be included in the `bundled` build.

### Deploy

This command deploys the `build/unbundled` folder to Firebase.

    npm run deploy