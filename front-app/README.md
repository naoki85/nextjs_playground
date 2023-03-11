# FrontApp

## Setup

```
npm install -g nx
```

## Start

```
$ npx nx serve frontend
```


## Test

```
$ npx nx test frontend
```

```
# using Cypress
$ npx nx e2e frontend-e2e
```

## Lint

```
$ npx nx lint frontend
```

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
 
