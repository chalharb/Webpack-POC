const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');

class WebpackConfiguration {
	constructor(fileName, jsEntry, jsOutputDir, cssOutputDir) {
		this.fileName = fileName;
		this.jsEntry = jsEntry;
		this.jsOutput = jsOutputDir;
		this.cssOutputDir = cssOutputDir;
	}

	// Getter
	get getConfiguration() {
		return {
			context: __dirname,
			name: this.fileName,
			entry: this.jsEntry,
			output: {
				path: path.resolve(this.jsOutput),
				filename: this.fileName + ".min.js"
			},
			module: {
				rules: [
					{
						test: /\.js$/,
						exclude: /node_modules/,
						loader: "eslint-loader",
						options: {
							// eslint options (if necessary)
						}
					},
					{
						test: /\.less$/,
						use: [
							// fallback to style-loader in development
							MiniCssExtractPlugin.loader,
							"css-loader",
							"less-loader"
						]
					}
				]
			},
			plugins: [
				new MiniCssExtractPlugin({
					// Options similar to the same options in webpackOptions.output
					// both options are optional
					filename: this.cssOutputDir + this.fileName + '.min.css',
					chunkFilename: "[id].css"
				}),
				new StyleLintPlugin({
					configFile: ".stylelintrc",
					files: "./**/*.less",
					extends: "stylelint-config-standard"
				}),
			]
		}
	}
}

module.exports = WebpackConfiguration;