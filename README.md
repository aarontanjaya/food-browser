## Environment Setup

- Ensure to use Node.js version 20 or higher
- Ensure to use Yarn version 4.4.1

## Install Yarn

- after node js has been installed run `npm install --global yarn`
- run `yarn --version` to check if yarn already installed (the script should return the installed yarn version)

## Install Dependencies

- run `yarn` in root folder to install the dependencies

## Running on Development

Currently we use MSW for both development and 'production' build. Please remove the service worker file in the future if any APIs is available for production build.

To run the app in development mode, run:
`yarn dev`

To run tests:
`yarn test`

To run linters:
`yarn lint`

To initialize msw:
`yarn init-msw`

# Folder Structure

```
.vscode
|-settings.json -> repo specific settings, will extend from user settings
.yarn -> contains default yarn releases used
public -> public assets, contains service worker and favicon
src
|-app -> contains global, app-wide components (wrappers, error boundaries, navigations)
|-assets -> contains media assets
|-configs -> contains configs used for this app (library configs, env configs etc)
|-hooks -> contains general hooks applicable to multiple pages
|-mocks -> contains mock files for testing
|-pages -> contains pages, maps 1 to 1 for each page in the app
|-|-components -> contains page-specific component, organized based on atomic design
|-|-hooks -> contains page-specific hooks
|-|-translations -> contains i18n translation mapping json files
|-|-index.tsx -> contains view component of the page
|-|-index.view-model.ts -> contains the view model of the page and integrate the logic for the page, maps 1->1 with index.tsx
|-services -> contains service-related code for APIs/DBs etc
|-|-[module_name] -> contains the code for a specific service module
|-|-|-mocks -> contains mock handlers and mock data for the module
|-|-|-models -> contains data definitions and constants for the service module
|-|-|-repository -> contains the repository interface definition and implementation
|-|-|-index.ts -> module exports
|-|-|-[module_name].module.ts -> service instance
|-translations -> base translation i18n json files
|- ui -> shared UI components, organized in atomic design
|- utils -> utility functions, hooks, etc

```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```
