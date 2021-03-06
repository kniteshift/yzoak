const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const extractSass = new ExtractTextPlugin({
	filename: "[name].[contenthash].css",
});

const VENDOR_LIB = ['jquery', 'lodash'];

module.exports = {
	entry: {
		index: ['./src/assets/js/app.js', './src/assets/styles/styles.sass'],
		product: ['./src/assets/js/product.js', './src/assets/styles/product.sass'],
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
				use: 'url-loader?limit=5000&name=assets/media/img/[name].[ext]'
			},{
				test: /\.(mp4)$/,
				use: 'url-loader?limit=500000&name=assets/video/[name].[ext]'
			},{
				test: /\.(sass|scss)$/,
				include: [/(src)/, /(node_modules)/],
				exclude: /fonts/,
				use: ExtractTextPlugin.extract(['css-loader?-minimize', 'resolve-url-loader', 'sass-loader?sourceMap']),
			}
		],
	},
	plugins: [
		extractSass,
		new HtmlWebPackPlugin({
			filename: 'index.html',
			template: 'src/index.html',
			chunks: ['index', 'vendor', 'manifest']
		}),
		new HtmlWebPackPlugin({
			filename: 'product.html',
			template: 'src/product.html',
			chunks: ['product', 'vendor', 'manifest']
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'manifest']
		}),
		new CopyWebpackPlugin([
			{ from: 'src/assets/media', to: 'assets/media' }
		])
	]
}