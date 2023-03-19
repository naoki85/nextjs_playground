# Frontend

## Setup

```
$ npm install
$ npm run prepare
```

## Start

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Husky

```
$ npm run prepare
```

## Test

```
$ npm run test
$ npm run test-watch
```

## Build for deploy

```
$ docker build -t nextjs-docker .
```
Run this image.

```
$ docker run -p 3000:3000 nextjs-docker
```