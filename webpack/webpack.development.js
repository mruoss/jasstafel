const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = () => ({
	plugins: [
		// Copy empty ServiceWorker so install doesn't blow up
		new CopyWebpackPlugin({
			patterns: [{from: 'src/sw.js'}]
		}),
	],
	devtool: 'source-map',
})
