# Senior Celebration

> Built using [Eleventy](https://www.11ty.dev/) and [Tailwindcss](https://tailwindcss.com/). Deployed with [GitHub Actions](https://github.com/features/actions)

![Deploy](https://github.com/middlebury/senior-celebration/workflows/Deploy/badge.svg)

## Requirements

- Node 12.14+

## Getting started

```bash
# clone repo then...

# install dependencies
npm install


# run local dev server
npm start

# OR

# build production site
npm run build
```

## Deploy

Simply push to `master` branch and GitHub Actions will build and deploy to `site` branch.

### Manual deploy

Cleans, builds, and deploys via gh-pages manually

```bash
npm run deploy
```
