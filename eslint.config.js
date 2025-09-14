import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';
import pluginVitest from 'eslint-plugin-vitest';

export default defineConfig(
  {
    ignores: ['node_modules', 'dist'],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['tests/**/*.spec.ts'],
    plugins: {
      vitest: pluginVitest,
    },
    rules: {
      ...pluginVitest.configs.recommended.rules,
    },
  },
  prettierConfig,
);
