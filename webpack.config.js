const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const extractSass = new ExtractTextPlugin({
	filename: "[name].[contenthash].css",
});

const VENDOR_LIB = ['jquery', 'lodash'];

module.exports = {
	entry: {
		bundle: ['./src/assets/js/app.js', './src/assets/styles/styles.sass'],
		vendor: VENDOR_LIB
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: /src/,
				exclude: /(node_modules)/,
				use: 'babel-loader'
			},{
				test: /\.(eot|ttf|woff2?|otf)$/,
				use: 'url-loader?limit=1024&name=fonts/[name].[ext]'
			},{
				test: /\.(jpe?g|png|gif|svg)$/,
				include: /src/,
				use: 'url-loader?limit=5000&name=assets/img/[name].[ext]'
			},{
				test: /\.(mp4)$/,
				use: 'url-loader?limit=500000&name=assets/video/[name].[ext]'
			},{
				test: /\.(sass|scss)$/,
				include: [/(src)/, /(node_modules)/],
				exclude: /fonts/,
				use: ExtractTextPlugin.extract(['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'])
			}
		],
	},
	plugins: [
		extractSass,
		new HtmlWebPackPlugin({
			template: 'src/index.html'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'manifest']
		}),
		new CopyWebpackPlugin([
			{ from: 'src/assets/media/', to: 'assets/media'}
		])
	]
}