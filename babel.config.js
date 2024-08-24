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
						'@typings': ['./src/common/typings'],
						'@hooks': ['./src/common/hooks'],
						'@constants': ['./src/constants'],
						'@ui-kit': ['./src/ui-kit'],
						'@ui-modules': ['./src/ui-modules'],
						'@navigators': './src/app/navigators',
						'@screens': ['./src/app/screens'],
					},
					cwd: 'packagejson',
				},
			],
		],
	};
};
