const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

const appConfig = require('./src/config');

const isNodeEnvProd = appConfig.nodeEnv === 'production';

module.exports = {
	node: {fs: 'empty'},
	entry: {
		base: './src/styles.js',
		index: './src/index.js'
	},
	devServer: {
		host: 'localhost',
		port: 3000,
		historyApiFallback: true
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js',
		publicPath: appConfig.assetPath,
	},
	optimization: {
		minimize: isNodeEnvProd,
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.scss/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
						},
						{
							loader: 'postcss-loader',
						},
						{
							loader: 'sass-loader',
							options: {
								implementation: require("sass"),
							}
						},
					],
				}),
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name].[ext]',
						},
					},
				]
			},
			{
				test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name].[ext]',
						},
					},
				]
			},
			{
				test: /\.(svg|jpg|png|gif|pdf|ico)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'img/[name].[ext]'
						},
					},
				]
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: ['html-loader?interpolate']
			},
		],
	},
	plugins: [
		new Dotenv({
			systemvars: true,
		}),
		new ExtractTextPlugin('css/[name].css'),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html',
		}),
		new CopyPlugin([
      {
        from: path.join(__dirname, 'src/images'),
        to: path.resolve(__dirname, 'dist/img'),
			},
			// if there is only one web.config file, copy it
			{
				from: path.join(__dirname, 'src/web.config'),
				to: path.join(__dirname, 'dist/web.config'),
				toType: 'file'
			},
			// in case there are language-specific web.config files
			{
				from: path.join(__dirname, `src/web.config-${appConfig.lang}`),
				to: path.join(__dirname, 'dist/web.config'),
				toType: 'file'
			}
    ]),
	],
};
