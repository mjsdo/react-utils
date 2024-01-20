import { resolve } from 'node:path';

import findWorkspaceRoot from 'find-yarn-workspace-root';
import { defineConfig } from 'vitest/config';

const rootDir = findWorkspaceRoot() as string;

export const vitestBaseConfig = defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: resolve(rootDir, './scripts/setup-tests.ts'),
  },
});
