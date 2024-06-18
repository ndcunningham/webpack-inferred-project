# Happynrwl

## Migration Steps

This is a guide to help you migrate your Nx workspace that uses

Migration Steps (Done)

1. Move to `NxAppWebpackPlugin` and `NxReactWebpackPlugin`

    After running `@nx/webpack:convert-config-to-webpack-plugin` the current webpack config is now standardized. 
    The former now called `webpack.config.old.js` uses Nx args (ExecutorContext, projectGraph etc...)
    Which are not available when running Webpack outside of the executor.

    In order to ensure that the webpack config is compatible with the new plugins, the following changes were made:
    - The webpack confg is now returns an `async` object
    - The config now imports `useLegacyNxPlugin` to provide Nx args which will be deprecated in the future.
    - All the old options which we inside `withNx`, `withReact` or `withWeb` were migrated to the `options` object inside `webpack.config.js`

1. Project config

    A `standardWebpackConfigFunction` option was added to the build options inside `project.json`

The `main` branch is the vanillia version of the app, it was generated using `NX_ADD_PLUGIN=false npx create-nx-workspace@latest --preset=react --bundler=webpack`.

### The migration steps should be done in the following order

1. Migrate the webpack config to be standardized (`migrate-phase-1` branch)

1. Migrate the project config to use the new webpack plugins (`migrate-phase-2` branch)
