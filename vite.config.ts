import react from '@vitejs/plugin-react';
import { defineConfig as defineViteConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineViteConfig({
  plugins: [react(), tsconfigPaths()],
});
