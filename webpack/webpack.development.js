const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = () => ({
	plugins: [
		// Copy empty ServiceWorker so install doesn't blow up
		new CopyWebpackPlugin(['src/sw.js']),
	],
	devtool: 'source-map',
})
