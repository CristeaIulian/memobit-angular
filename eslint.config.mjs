// Shared ESLint config for every memobit project — canonical copy lives in the code-style-drift skill.
// Do not edit per project: change the skill's canon and roll it out everywhere.
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: [
            '**/dist/**',
            '**/build/**',
            '**/coverage/**',
            '**/node_modules/**',
            '**/public/**',
            '**/.angular/**',
            '**/.claude/**',
            '**/venv/**',
            '**/.venv/**',
            '**/*.min.js',
            '**/*.bundle.js',
        ],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            import: importPlugin,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'react-refresh': reactRefreshPlugin,
            'simple-import-sort': simpleImportSort,
        },
        settings: {
            react: {
                version: '19.3',
            },
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_', ignoreRestSiblings: true },
            ],
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        ['^react$'],
                        ['^@?\\w'],
                        ['^@(components|constants|contexts|helpers|hooks|models|mocks|pages|services|types)(/|$)'],
                        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                        ['^\\./'],
                        ['^.+\\.s?css$'],
                    ],
                },
            ],
            'simple-import-sort/exports': 'error',
            'import/first': 'error',
            'import/newline-after-import': 'error',
            'import/no-duplicates': 'error',
        },
    },
    {
        // require() is legitimate in CommonJS sources: .cjs everywhere, and .js in packages without "type": "module".
        files: ['**/*.{js,cjs}'],
        rules: { '@typescript-eslint/no-require-imports': 'off' },
    },
    {
        files: ['**/*.cjs'],
        languageOptions: { sourceType: 'commonjs' },
    },
    prettierRecommended
);
