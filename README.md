# Parcel Starter Kit

## Getting Started

Get a copy of [this repository](https://github.com/braden337/parcel)

```shell
npx degit braden337/parcel my-new-project
cd my-new-project
```

## Install Dependencies

```shell
npm install
```

## Development

```shell
npm start
```

## Deployment

You can deploy to any of these services:

- [Netlify](https://netlify.com) (default)
- [Surge](https://surge.sh)
- [GitHub Pages](https://pages.github.com)

You just need to change one of the `publish` npm script in your `package.json`

| Service      | Command                      |
| ------------ | ---------------------------- |
| Netlify      | run-s netlify                |
| Surge        | run-s surge                  |
| GitHub Pages | run-s gh-pages               |
| Multiple     | run-s netlify surge gh-pages |

and then run the command

```shell
npm run deploy
```
