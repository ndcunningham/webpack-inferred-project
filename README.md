# Happynrwl

## Migration Steps

This is a guide to help you migrate your Nx workspace that uses

Migration Steps

1. Move to `NxAppWebpackPlugin` and `NxReactWebpackPlugin`

    We should transition from using `withNx`, `withWeb` and `withReact` to `NxAppWebpackPlugin` and `NxReactWebpackPlugin` since the former uses Nx args (ExecutorContext, projectGraph etc...)
    Which are not available when running Webpack outside of the executor.
    You might encounter errors such as:

    ```shell
    Error: [readCachedProjectGraph] ERROR: No cached ProjectGraph is available
    ```

1. Dependencies
`webpack-cli` is not installed by default and needs to be added since the `@nx/webpack/plugin` relies on it.

The `main` branch is the vanillia version of the app, it was generated using `NX_ADD_PLUGIN=false npx create-nx-workspace@latest --preset=react --bundler=webpack`
