/* eslint-env node */

const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const rules = require('./webpack/rules')
const plugins = require('./webpack/plugins')

module.exports = ({ WEBPACK_MODE, APPLICATION_ENV }) => ({
	module: {
		rules: [...rules({ mode: WEBPACK_MODE, applicationEnv: APPLICATION_ENV })],
	},
	entry: path.resolve('./src/js/entry.js'),
	output: {
		path: path.resolve('dist'),
		filename: 'index.js',
	},
	devServer: {
		inline: true,
		port: process.env.PORT,
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.join(__dirname, 'src/index.html'),
			filename: 'index.html',
		}),
		...plugins(WEBPACK_MODE),
	],
})
