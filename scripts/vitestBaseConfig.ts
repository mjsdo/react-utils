import { resolve } from 'node:path';

import { findUpSync } from 'find-up';
import { defineConfig } from 'vitest/config';

const rootDir = (findUpSync('nx.json') as string).replace(
  /(.*)([\/\\])nx.json$/,
  '$1'
);

export const vitestBaseConfig = defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: resolve(rootDir, './scripts/setup-tests.ts'),
  },
});
