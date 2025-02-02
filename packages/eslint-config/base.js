import js from '@eslint/js';
import ts from 'typescript-eslint';
import globals from 'globals';

export const baseConfig = [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  }
];
