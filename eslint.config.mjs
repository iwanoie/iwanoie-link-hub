import eslint from '@eslint/js';
import nextPlugin from 'eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
	// 基本設定
	eslint.configs.recommended,

	// Next.js の設定
	...nextPlugin.configs['core-web-vitals'],

	// React の設定
	{
		plugins: {
			react: reactPlugin,
		},
		rules: {
			...reactPlugin.configs.recommended.rules,
			'react/react-in-jsx-scope': 'off', // React 17以降では不要
		},
	},

	// TypeScript の設定
	{
		files: ['**/*.ts', '**/*.tsx'],
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
			},
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
		},
	},

	// Prettier との連携
	prettierConfig,
	{
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			'prettier/prettier': [
				'error',
				{
					semi: true,
					singleQuote: true,
					useTabs: true,
					tabWidth: 4,
					trailingComma: 'all',
					printWidth: 100,
					jsxSingleQuote: false, // JSX属性はダブルクォートにする
				},
			],
			'jsx-quotes': ['error', 'prefer-double'], // JSX内は " を強制
		},
	},
];
