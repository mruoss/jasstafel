const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const cssLoaders = (mode, with_modules, applicationEnv) => [
	{
		loader: 'css-loader',
		options: {
			sourceMap: true,
			importLoaders: 1, // postcss-loader does not count
			...(with_modules ? { modules: true, localIdentName: '[path]___[name]__[local]___[hash:base64:5]' } : {}),
			...(mode === 'production' ? { minimize: true } : {}),
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
			data: '$application-env: ' + applicationEnv + ';',
			...(with_modules ? { includePaths: [path.resolve('../src/sass')] } : {}),
		},
	},
]

const cssUseEntry = ({ mode, with_modules, applicationEnv }) =>
	mode === 'development'
		? // dev server
		  [{ loader: 'style-loader' }, ...cssLoaders(mode, with_modules, applicationEnv)]
		: // build client && server
		  [MiniCssExtractPlugin.loader, ...cssLoaders(mode, with_modules, applicationEnv)]

// =============================================================================

module.exports = ({ mode, applicationEnv }) => [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				babelrc: false,
				presets: ['env', 'react'],
				plugins: [
					[
						'transform-object-rest-spread',
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
		use: cssUseEntry({ mode, with_modules: true, applicationEnv }),
	},
	{
		// for src/sass/**/.*.sass
		test: /\.(scss|sass)$/,
		exclude: [path.resolve('../src/js')],
		use: cssUseEntry({ mode, with_modules: false, applicationEnv }),
	},
	{
		// only 3rd party fonts
		test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		exclude: [path.resolve('../src/js')],
		use: [
			{
				loader: mode === 'production' ? 'file-loader' : 'url-loader',
				options: {
					context: path.node_modules,
					name: '[path][name].[ext]?[hash]',
					outputPath: 'lib/',
					publicPath: '../lib/',
					emitFile: mode === 'production',
				},
			},
		],
	},
	{
		test: /\.html$/,
		use: [
			{
				loader: 'html-loader',
			},
		],
	},
]
