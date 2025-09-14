import { configDefaults, defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: './tsconfig.json',
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: {
        index: 'src/index',
      },
      formats: ['es'],
    },
  },
  test: {
    exclude: [...configDefaults.exclude],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,ts}'],
      thresholds: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
  },
});
