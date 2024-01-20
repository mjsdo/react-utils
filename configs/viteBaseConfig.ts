import react from '@vitejs/plugin-react';
import { defineConfig as defineViteConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// - cypress runtime, storybook 에만 사용함 (package 번들러 X)
export const viteBaseConfig = defineViteConfig({
  plugins: [react(), tsconfigPaths()],
});
