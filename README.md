# Happynrwl

## Migration Steps

This is a guide to help you migrate your Nx workspace that uses

Migration Steps (Done)

1. Migrate the webpack config to be standardized (`migrate-phase-1` branch) to use inferred plugins

    This means moving options from `project.json` to `webpack.config.js` and removing the targets from `project.json` if no other options are present

1. Add `webpack-cli` to the workspace

- By default this is not installed and is necessary for inferred plugins to work

### Note

The `baseHref` options exists in both `build` and `serve` targets.

However because it only affects the index.html file and it's `base` tag which are not available in development mode. It should be safe to only have it as a build option.

If this needs to be customized you could have something like

```js
baseHref: process.env.NODE_ENV === 'production' ? '/my-custom-base-href/' : '/',
```

The `main` branch is the vanillia version of the app, it was generated using `NX_ADD_PLUGIN=false npx create-nx-workspace@latest --preset=react --bundler=webpack`.

### The migration steps should be done in the following order

1. Migrate the webpack config to be standardized (`migrate-phase-1` branch)

1. Migrate the project config to use the inferred webpack plugins (`migrate-phase-2` branch)