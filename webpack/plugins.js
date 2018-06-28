const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const getCssPlugins = mode =>
	mode === 'production'
		? [
				new MiniCssExtractPlugin({
					// Options similar to the same options in webpackOptions.output
					// both options are optional
					filename: 'css/styles.css',
					chunkFilename: 'css/[id].css',
				}),
		  ]
		: []

module.exports = mode => [...getCssPlugins(mode)]
