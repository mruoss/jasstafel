/* eslint-env node */

const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const { merge } = require('webpack-merge')

const rules = require('./webpack/rules')
const loadPresets = require('./webpack/loadPresets')

const modeConfig = env => require(`./webpack/webpack.${env.mode}.js`)(env)

module.exports = ({ presets }, { mode }) =>
	merge(
		{
			module: {
				rules: [...rules({ mode })],
			},
			entry: path.resolve('./src/js/entry.js'),
			output: {
				path: path.resolve('dist'),
				filename: 'index.js',
				assetModuleFilename: 'assets/[hash][ext][query]'
			},
			devServer: {
				inline: true,
				port: process.env.PORT,
				host: '0.0.0.0',
			},
			plugins: [
				new webpack.DefinePlugin({
					APP_VERSION: JSON.stringify('2.1.0'),
				}),
				new CleanWebpackPlugin(),
				new webpack.ProgressPlugin(),
				new HtmlWebPackPlugin({
					template: path.join(__dirname, 'src/index.html'),
					filename: 'index.html',
				}),
				new CopyWebpackPlugin({
					patterns: [{ from: 'src/assets', to: 'assets/', globOptions: {ignore: ['.DS_Store']} }, 'src/manifest.webmanifest'],
				}),
			],
		},
		modeConfig({ mode, presets }),
		loadPresets({ mode, presets }),
	)
