# Roykung.com

於此紀念我們最好的朋友林昆彥

In memory of our best friend, Roy Lin.

## Development

Requires Node 24 (see `.nvmrc` / the `engines` field): run `nvm use` before installing.

If `npm install` fails with `sharp: Attempting to build from source via node-gyp`, a globally installed libvips (e.g. Homebrew `vips`) is the likely cause — sharp prefers it over its prebuilt binaries. Install with:

```sh
SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm install
```

Common scripts: `npm run dev`, `npm run build`, `npm run lint`, `npm run test:coverage`.

## Authors

- [@roykunglin](https://github.com/roykunglin)

## Contributors

- [@imgarylai](https://github.com/imgarylai)
- [@linyiru](https://github.com/linyiru)
