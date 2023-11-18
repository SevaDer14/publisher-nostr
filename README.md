# Publisher

Publish long form posts on Nostr with fine-grained monetization via Lightning

## Local Development

There are 3 components for the local development: Svelte app, Cypress test, local Relay.
Install all dependencies by running `npm i`

### Svelte App

Run the Svelte app using command

```
npm run dev
```

### Cypress Tests

There are 2 types of tests to assist FE development: `e2e` and `component` tests.
You can choose the type from Cypress UI by running command:

```
npm run cypress
```

Or you can run tests in a headless mode with one of the following commands

```
npm run test:e2e            // to run all e2e tests
npm run test:component      // to run all component tests
```

Note that when running component tests, cypress starts its own vite server with the component loaded.
However to have e2e tests working Cypress needs a Svelte app running in the background.
