const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-storysource', '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-viewport', '@storybook/preset-create-react-app', '@storybook/addon-a11y'],
	refs: {
		'@chakra-ui/react': { disable: true },
	},
	webpackFinal: async (config) => {
		// exclude file loader for svg
		config.module.rules.forEach((rule) => {
			rule.oneOf &&
				rule.oneOf.forEach((subRule) => {
					if (subRule.loader && subRule.loader.indexOf('file-loader') !== -1) {
						subRule.exclude = subRule.exclude.concat([/\.svg$/]);
					}
				});
		});

		// use @svgr/webpack loader for svg
		config.module.rules.push({
			test: /\.svg$/,
			enforce: 'pre',
			use: [
				{
					loader: require.resolve('@svgr/webpack'),
					options: {
						ref: true,
						dimensions: false,
						replaceAttrValues: { '#000': 'currentColor' },
					},
				},
			],
		});

		Object.assign(config.resolve.alias, { '@emotion/core': toPath('node_modules/@emotion/react'), 'emotion-theming': toPath('node_modules/@emotion/react') });

		return config;
	},
};
