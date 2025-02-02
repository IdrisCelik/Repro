import { baseConfig } from './base.js';
import svelte from 'eslint-plugin-svelte';
import ts from 'typescript-eslint';
import svelteParser from 'svelte-eslint-parser';

export const svelteConfig = [
    ...baseConfig,
    ...svelte.configs['flat/recommended'],
    {
        files: ['**/*.svelte'],
        languageOptions: {
            parser: svelteParser,
            parserOptions: {
                parser: ts.parser,
                extraFileExtensions: ['.svelte'],
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: false
                }
            }
        }
    }
];