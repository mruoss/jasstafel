const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const cssLoaders = (mode, with_modules) => [
	{
		loader: 'css-loader',
		options: {
			sourceMap: true,
			importLoaders: 1, // postcss-loader does not count
			...(with_modules ? { modules: true, localIdentName: '[path]___[name]__[local]___[hash:base64:5]' } : {}),
		},
	},
	{
		loader: 'postcss-loader',
		options: {
			sourceMap: true,
			plugins: () => [],
		},
	},
	{
		loader: 'sass-loader',
		options: {
			sourceMap: true,
		},
	},
]

const cssUseEntry = ({ mode, with_modules }) =>
	mode === 'development'
		? // dev server
		  [{ loader: 'style-loader' }, ...cssLoaders(mode, with_modules)]
		: // build client && server
		  [MiniCssExtractPlugin.loader, ...cssLoaders(mode, with_modules)]

// =============================================================================

module.exports = ({ mode }) => [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
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
		// only for src/js/**/.*.sass
		test: /\.(scss|sass)$/,
		include: [path.resolve('../src/js')],
		use: cssUseEntry({ mode, with_modules: true }),
	},
	{
		// for src/sass/**/.*.sass
		test: /\.(scss|sass)$/,
		exclude: [path.resolve('../src/js')],
		use: cssUseEntry({ mode, with_modules: false }),
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
