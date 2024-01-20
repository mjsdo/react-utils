import { resolve } from 'node:path';

import { nxComponentTestingPreset } from '@nx/react/plugins/component-testing';
import { defineConfig } from 'cypress';
import findPkgDir from 'find-pkg-dir';
import findWorkspaceRoot from 'find-yarn-workspace-root';

export const nxCypressComponentConfig = nxComponentTestingPreset(__filename, {
  bundler: 'vite',
});

// `__dirname`을 `nxCypressConfig`에서 사용하면 `nxCypressConfig`의 dirname으로 결정되므로 불러오는 모듈 내에서 `__dirname`를 전달해야함
export const nxCypressConfig = (dirname: string) => {
  const rootDir = findWorkspaceRoot() as string;
  const pkgDir = findPkgDir(dirname) as string;

  return defineConfig({
    component: {
      ...nxCypressComponentConfig,
      supportFile: resolve(rootDir, './cypress/support/component.ts'),
      indexHtmlFile: resolve(rootDir, './cypress/support/component-index.html'),
      specPattern: [
        resolve(pkgDir, './packages/**/*.cy.{ts,tsx,js,jsx}'),
        resolve(pkgDir, './src/**/*.cy.{ts,tsx,js,jsx}'),
        resolve(pkgDir, './cypress/**/*.cy.{ts,tsx,js,jsx}'),
      ],
    },
  });
};
