const path = require('path')

// =============================================================================

module.exports = ({ mode }) => [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
			loader: require.resolve('babel-loader'),
			options: {
				babelrc: false,
				presets: [
					[
						'@babel/preset-env',
						{
							useBuiltIns: 'entry',
							corejs: '2.0.0',
						},
					],
					[
						'@babel/preset-react',
						{
							useBuiltIns: 'entry',
						},
					],
				],
				plugins: [
					[
						'@babel/plugin-proposal-object-rest-spread',
						{
							useBuiltIns: true,
						},
					],
				],
			},
		},
	},
	{
		// only 3rd party fonts
		test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		exclude: [path.resolve('../src/js')],
		type: mode === 'production' ? 'asset/resource' : 'asset/inline',
		generator: {
			filename: 'static/[hash][ext][query]'
		}
	}
]
