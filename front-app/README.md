# FrontApp

## Setup

```
$ npm install -g nx
$ npm install
```

## Start

```
$ docker-compose up -d
$ npx nx serve frontend
$ npx nx serve api
# Run both applications
npx nx run-many --target=serve
```

## Test

```
$ npx nx test frontend
$ npx nx test api
# Run both applications
$ npx nx run-many --target=test
```

```
# using Cypress
$ npx nx e2e frontend-e2e
$ npx nx e2e api-e2e
```

## Lint

```
$ npx nx lint frontend
$ npx nx lint api
# Run both applications
$ npx nx run-many --target=lint
```

## Build

```
$ npx nx lint frontend
$ npx nx run-many --target=build
```
After building, artifacts will be outputted in dist dir.  

## Code Generate

See [https://nx.dev/packages/react](https://nx.dev/packages/react) .

```
# For Components
$ npx nx g @nrwl/react:component --dry-run --export=false --project=frontend --dir=app/components/pages --pascalCaseFiles=true --pascalCaseDirectory=true
$ npx nx g @nrwl/react:component --export=false --project=frontend --dir=app/components/pages --pascalCaseFiles=true --pascalCaseDirectory=true
```

```
# For Hooks
$ npx nx g @nrwl/react:hook --directory=app/hooks --name=useAuth --flat=true --pascalCaseFiles=true --dry-run
$ npx nx g @nrwl/react:hook --directory=app/hooks --name=useAuth --flat=true --pascalCaseFiles=true
```

## Migrations

Fix `schema.prisma` and run this command.

```
npx nx prisma-migrate api --name xxxx
```
 
