import { nxComponentTestingPreset } from '@nx/react/plugins/component-testing';
import { defineConfig } from 'cypress';

export const nxComponentConfig = nxComponentTestingPreset(__filename, {
  bundler: 'vite',
});

export default defineConfig({
  component: {
    ...nxComponentConfig,
    specPattern: [
      './packages/**/*.cy.{ts,tsx,js,jsx}',
      './cypress/**/*.cy.{ts,tsx,js,jsx}',
    ],
  },
});
