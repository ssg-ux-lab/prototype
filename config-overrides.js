const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
	addWebpackModuleRule({
		test: /\.svg$/,
		issuer: {
			test: /\.(js|ts)x?$/,
		},
		use: [
			{
				loader: '@svgr/webpack',
				options: {
					ref: true,
					dimensions: false,
					replaceAttrValues: { '#000': 'currentColor' },
				},
			},
		],
	})
);
