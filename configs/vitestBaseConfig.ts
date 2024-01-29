import { resolve } from 'node:path';

import findWorkspaceRoot from 'find-yarn-workspace-root';
import { defineConfig } from 'vitest/config';

import { getPkgName } from '../utils/getPkgName';

export const vitestBaseConfig = (dirname: string) => {
  const rootDir = findWorkspaceRoot()!;
  const pkgName = getPkgName(dirname);

  return defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: resolve(rootDir, './scripts/setup-tests.ts'),
      reporters: ['junit'],
      outputFile: {
        // NOTE: output fileName 바꾸면 `test.yml`도 바꿔야함.
        junit: resolve(rootDir, 'reports', `${pkgName}.vitest.xml`),
      },
    },
  });
};
