# FrontAppNext

## Setup

```
$ npm install -g nx
$ npm install
```

## Start dev server

```
$ nx serve frontend
```

## Lint

```
$ nx lint frontend
```

## Test

```
$ nx test frontend
```

## Code Generate

See [https://nx.dev/packages/next#generators](https://nx.dev/packages/next#generators) .

```
# For Components
$ npx nx g @nrwl/next:component --dry-run --project=frontend --pascalCaseFiles=true --pascalCaseDirectory=true --style=scss
$ npx nx g @nrwl/next:component --project=frontend --pascalCaseFiles=true --pascalCaseDirectory=true --style=scss
```

```
# For Pages
$ npx nx g @nrwl/next:page --dry-run
$ npx nx g @nrwl/next:page
```