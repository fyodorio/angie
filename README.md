# Angie

Modern opinionated barebones Angular starter project generated
using [Angular CLI](https://github.com/angular/angular-cli) and enriched with the latest and experimental framework
features (but not spoiled by unnecessary 3rd-party dependencies).

This boilerplate incorporates years of enterprise
Angular apps development yielding into the main base principle: don't bloat the supply chain unless you like pain.

One of the trickiest problems (for Angular ecosystem at least) is unit testing tools and maintaining their simplest
behaviour even with smallest framework updates, that's why unit testing is fully removed from this project.

### Featuring

* Angular 19
* SSR with route-dependant hybrid rendering, event replay, and incremental hydration
* New Application Builder using esbuild and Vite
* API routes with Express
* FetchAPI for HttpClient
* Zoneless change detection with OnPush strategy for components
* Angular CDK and animations
* View transitions for the router
* Angular's build-time i18n
* Single-file component schematic by default
* Plain CSS split to functional modules
* Remote Google Fonts loading
* `NgOptimizedImage` usage

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will
automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build
optimizes your application for performance and speed.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit
the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
