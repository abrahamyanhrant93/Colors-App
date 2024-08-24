module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['.'],
					extensions: ['.ios.js', '.android.js', '.windows.js', '.native.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
					alias: {
						'@services': ['./src/services'],
						'@utils': ['./src/common/utils'],
						'@errors': ['./src/common/errors'],
						'@testing': ['./src/common/testing'],
						'@typings': ['./src/common/typings'],
						'@hooks': ['./src/common/hooks'],
						'@constants': ['./src/constants'],
						'@ui-kit': ['./src/ui-kit'],
						'@ui-modules': ['./src/ui-modules'],
						'@assets': ['./src/app/assets'],
						'@navigators': './src/app/navigators',
						'@screens': ['./src/app/screens'],
						'@i18n': ['./src/i18n'],
						'@schemas': ['./src/schemas'],
					},
					cwd: 'packagejson',
				},
			],
		],
	};
};
