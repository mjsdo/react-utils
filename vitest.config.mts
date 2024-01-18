import { resolve } from 'node:path';

import { defineConfig } from 'vitest/config';

console.log(__dirname);
console.log(process.cwd());
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: resolve(__dirname, './scripts/setup-tests.ts'),
  },
});
