const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => ({
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: 'css/styles.css',
			chunkFilename: 'css/[id].css',
		}),
	],
})
