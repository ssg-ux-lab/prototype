const { override, addWebpackModuleRule } = require('customize-cra');
const path = require('path');
require('dotenv').config();
const Dotenv = require('dotenv-webpack');

const configEnvironment = (config) => {
	config.plugins = [
		...config.plugins,

		new Dotenv({
			path: path.join(__dirname, `.env.${process.env.NODE_ENV}`),
		}),
	];
	return config;
};

module.exports = override(
	configEnvironment,
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
