const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

export let newsroomConfig = {
	context: __dirname,
	name: "newsroom",
	entry: "./js/newsroom.js",
	output: {
		path: path.resolve('./newsroom/js/'),
		filename: "newsroom.min.js"
	},
	module: {
		rules: [{
			test: /\.less$/,
			use: [
				// fallback to style-loader in development
				MiniCssExtractPlugin.loader,
				"css-loader",
				"less-loader"
			]
		}]
	},
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '../less/newsroom.min.css',
			chunkFilename: "[id].css"
		}),
	]
}