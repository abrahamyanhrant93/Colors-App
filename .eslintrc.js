const path = require('path');

module.exports = {
	root: true,
	env: {
		'react-native-globals/all': true,
		'react-native/react-native': true,
		'jest/globals': true,
		jest: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		parser: 'babel-eslint',
	},

	plugins: [
		'@typescript-eslint/eslint-plugin',
		'react',
		'react-native',
		'react-native-globals',
		'module-resolver',
		'react-i18n',
		'clean-regex',
		'sonarjs',
		'no-async-foreach',
		'jest',
		'testing-library',
		'json',
		'boundaries',
	],
	extends: [
		'@react-native-community',
		'plugin:react/recommended',
		'plugin:react-native/all',
		'eslint:recommended',
		'plugin:no-await-in-promise/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
		'plugin:jest/style',
		'plugin:clean-regex/recommended',
		'plugin:sonarjs/recommended',
		'plugin:json/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [
		{
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react'],
			rules: {
				/** React testing library */
				// (to compat with React native, see https://callstack.github.io/react-native-testing-library/docs/eslint-plugin-testing-library/) */
				'testing-library/prefer-user-event': 'off',
				'testing-library/prefer-wait-for': 'off',
				'testing-library/no-wait-for-empty-callback': 'off',
				'testing-library/prefer-screen-queries': 'off', // because our version on RNTL doesn't have screen API.
			},
		},
	],
	settings: {
		'import/resolver': {
			'babel-module': {
				extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.css'],
				root: ['.'],
				alias: {
					'@services': ['./src/services'],
					'@hooks': ['./src/common/hooks'],
					'@utils': ['./src/common/utils'],
					'@typings': ['./src/common/typings'],
					'@constants': ['./src/constants'],
					'@ui-kit': ['./src/ui-kit'],
					'@ui-modules': ['./src/ui-modules'],
				},
			},
		},
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
		react: {
			version: 'detect',
		},
		'boundaries/elements': [
			{
				type: 'ui-kit',
				pattern: 'src/ui-kit/*',
				capture: ['componentName'],
			},
			{
				type: 'ui-module',
				pattern: 'src/ui-modules/*',
				capture: ['moduleName'],
			},
			{
				type: 'app',
				pattern: 'src/app/*/*',
			},
		],
	},
	ignorePatterns: ['*.config.js', '*eslint*', 'node_modules/expo-images-picker'],
	rules: {
		/** Prettier */
		'prettier/prettier': 'warn',
		/** @typescript-eslint */
		'@typescript-eslint/prefer-interface': 'off', // also want to use "type"
		'@typescript-eslint/explicit-function-return-type': 'off', // annoying to force return type
		'@typescript-eslint/no-var-requires': 'warn',
		'@typescript-eslint/ban-ts-comment': 'warn',
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
				allowSingleExtends: true,
			},
		],
		'@typescript-eslint/naming-convention': [
			'warn',
			{
				selector: 'interface',
				format: ['PascalCase'],
				prefix: ['I'],
			},
			{
				selector: 'typeParameter',
				format: ['PascalCase'],
				prefix: ['T'],
			},
			{
				selector: 'enum',
				format: ['PascalCase'],
				prefix: ['E'],
			},
		],
		'@typescript-eslint/no-namespace': ['error', { allowDefinitionFiles: true }], // to use isolatedModules.
		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{
				prefer: 'type-imports',
			},
		],

		// async-for-each
		'no-async-foreach/no-async-foreach': 'error',

		// sonar
		'sonarjs/prefer-immediate-return': 'off',
		'sonarjs/no-duplicate-string': 'off',
		'sonarjs/cognitive-complexity': ['error', 15],

		// React Hooks.
		'react-hooks/exhaustive-deps': 'warn',

		// React.
		'react/prop-types': 'off',
		'react/jsx-sort-props': ['warn', { callbacksLast: true, noSortAlphabetically: true, ignoreCase: true }],
		'react/no-unstable-nested-components': 'off',

		// React Native
		'react-native/no-color-literals': 'off',
		'react-native/sort-styles': ['warn', 'asc', { ignoreClassNames: true, ignoreStyleProperties: false }],

		/** react-i18n */
		'react-i18n/no-dynamic-translation-keys': 'error', // : Enforce using static strings as keys for translation functions
		'react-i18n/no-missing-interpolation-keys': 'error', // :

		// custom
		'react/react-in-jsx-scope': 'off',
		'no-restricted-syntax': [
			'error',
			{
				selector: 'TSEnumDeclaration',
				message:
					"Don't declare enums! Use union types instead or union with const, like:\n\nexport type TEnvironment = 'development' | 'production' | 'test';\nexport const ENVIRONMENT: Record<string, TEnvironment> = {\n\tDEVELOPMENT: 'development',\n\tPRODUCTION: 'production',\n\tTEST: 'test',\n};\n",
			},
		],
		'no-console': ['error', { allow: ['warn', 'error', 'info'] }],

		/** boundaries */
		'boundaries/element-types': [
			'error',
			{
				default: 'allow',
				message: '${file.type} is not allowed to import ${dependency.type}',
				rules: [
					{
						from: ['ui-kit'],
						disallow: ['ui-module'],
						message: 'You can not import ui-module here, follow dependency flow',
					},
					{
						from: ['ui-module'],
						disallow: ['app'],
						message: 'You can not import app things here to ui-module, follow dependency flow',
					},
				],
			},
		],

		/* no-await */
		'no-await-in-promise/no-await-in-promise': 'error',
	},
};
