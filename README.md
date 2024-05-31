# Happynrwl

## Migration Steps

When using custom or additional plugins that rely on Nx context in Webpack, they may not function correctly because Webpack is no longer running through the executor. This issue might necessitate a migration similar to the approach taken with Rollup.

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
