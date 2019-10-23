const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

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
		publicPath: process.env.ASSET_PATH ? process.env.ASSET_PATH : '/',
	},
	optimization: {
		minimize: process.env.NODE_ENV === 'production',
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
				exclude: /(node_modules|bower_components)/,
			},
			{
				test: /\.scss/,
				exclude: /(node_modules|bower_components)/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								//modules: true,
								//localIdentName: '[name]___[local]',
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									autoprefixer({
										browsers: ['ie >= 8', 'last 4 version'],
									}),
								],
							},
						},
						{
							loader: 'sass-loader',
							options: {
								implementation: require("sass"),
								//fiber: Fiber
							}
						},
					],
				}),
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				exclude: /(node_modules|bower_components)/,
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
				exclude: /(node_modules|bower_components)/,
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
				exclude: /(node_modules|bower_components)/,
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
				exclude: /(node_modules|bower_components)/,
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
		})
	],
};
