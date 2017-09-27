## rootAir-ng2

- Angular 2+ ( 4.x )
- ExpressJS ( 4.x - with compression )
- Webpack ( angular-cli )

<img width="150" src="https://i.cloudup.com/zfY6lL7eFa-3000x3000.png" />
<img width="50" src="https://angular.io/assets/images/logos/angular/angular.svg" />

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Concepts

- Redux ( NgRx/Store - with server calls)
- Smart & dumb components
- AOT: Ahead-of-Time compilation
- Advanced routing ( lazy loading, router outlets...)

## Install / Development

```bash
# Install dependencies
npm install

# start server
npm run start

# Client url: http://localhost:4200
# Application ( epxress ) API: http://localhost:4300
```

Install Redux DevTools chrome extenstion:

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

## Build / Production

```bash

npm run build

## Deploy dist folder to app server

Structure of dist folder:

/dist/server <-- expressjs
/dist/client <-- angular2

```
## Note

All html and css are from: http://www.w3schools.com/howto/