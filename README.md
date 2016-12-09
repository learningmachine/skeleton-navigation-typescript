# aurelia-skeleton-typescript

## Changes

Added the following features to the default aurelia webpack typescript project
- async / await (users.ts)
- autoinject (users.ts)
- pushstate
- animations
- postcss (autoprefixer, precss, lost)
  - cleaned up styles
- bluebird promises
- fixed splash flicker

## Getting started

Before you start, make sure you have a working [NodeJS](http://nodejs.org/) environment, preferably with NPM 3.

From the project folder, execute the following command:

```shell
npm install aurelia-cli -g
npm install
```

This will install all required dependencies.

If the TypeScript references do not work or you get some runtime errors you can try to execute the following command:

```shell
npm dedupe
```

To run the app execute the following command:

```shell
au run --watch
```

This command starts the development server that serves the app.
You can now browse the skeleton app at http://localhost:9000. Changes in the code
will automatically build and reload the app.

## Bundling

To build a development bundle execute:

```shell
au build
```

To build an optimized, minified production bundle execute:

```shell
au build --env prod
```

The production bundle includes all files that are required for deployment.

## Testing
To run the unit tests:

```shell
au test
```
