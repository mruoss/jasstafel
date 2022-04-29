#!/usr/bin/env node

const pnpPlugin = require('@yarnpkg/esbuild-plugin-pnp').pnpPlugin
const fs = require('fs/promises')
const path = require('path')
const esbuild = require('esbuild')
const yargs = require('yargs')
const opn = require('opn')
const { injectManifest } = require('workbox-build')
const Mustache = require('mustache')

// CLI Options
const argv = yargs(process.argv.slice(2))
	.command('build', 'Builds the application bundle.', {
		outdir: {
			description: 'the output directory for generated files. Defaults to "dist", should be "www" for serve',
			alias: 'o',
			type: 'string',
		},
	})
	.option('serve', {
		alias: 's',
		description: 'Starts a webserver that serves the application',
		type: 'boolean',
	})
	.help()
	.alias('help', 'h')
	.default('outdir', 'dist').argv

// Src and Dest dir setuop
const destDirectory = argv.outdir
const srcDirectory = path.join(__dirname, 'src')

const destDirectoryJS = path.join(destDirectory, 'js')
const destDirectoryAssets = path.join(destDirectory, 'assets/')

const srcDirectoryAssets = path.join(srcDirectory, 'assets/')

// Clean (rm/mk) destination folder
fs.rm(destDirectory, { recursive: true, force: true })
	.then(() => fs.mkdir(destDirectory))
	.then(() => {
		// Copy assets to destination folder
		return Promise.all([
			fs.cp(srcDirectoryAssets, destDirectoryAssets, { recursive: true }),
			fs.copyFile(path.join(srcDirectory, 'manifest.webmanifest'), path.join(destDirectory, 'manifest.webmanifest')),
		])
	})
	.then(() => {
		const buildConfig = {
			entryPoints: [path.join(srcDirectory, 'js/index.js')],
			entryNames: '[dir]/[name]-[hash]',
			bundle: true,
			outdir: destDirectoryJS,
			metafile: true,
			plugins: [pnpPlugin()],
			minify: true,
			loader: {
				'.js': 'jsx',
			},
			define: {
				APP_VERSION: JSON.stringify(process.env.npm_package_version),
				'process.env.NODE_ENV': JSON.stringify('production'),
			},
		}

		if (argv.serve) {
			// Build, watch and serve application
			return esbuild
				.serve(
					{ servedir: argv.outdir },
					{
						...buildConfig,
						entryNames: '[dir]/[name]',
						minify: false,
						define: {
							APP_VERSION: JSON.stringify('<dev>'),
							'process.env.NODE_ENV': JSON.stringify('development'),
						},
					},
				)
				.then((server) => {
					console.log(`Server started on http://localhost:${server.port}`)
					opn('http://localhost:${server.port}')
					return ['js/index.js']
				})
		}

		// if !argv.serve, Build application
		return esbuild.build(buildConfig).then((meta) => {
			return Object.keys(meta?.metafile?.outputs).map((file) => path.relative(destDirectory, file))
		})
	})
	.then((outputFiles) => {
		// inject list of output files to html
		fs.readFile(path.join(srcDirectory, 'index.html.mustache'), { encoding: 'utf-8' }).then((template) => {
			const scripts = outputFiles.map((outputFile) => `<script defer="defer" src="/${outputFile}"></script>\n`)
			const rendered = Mustache.render(template, { scripts })
			fs.writeFile(path.join(destDirectory, 'index.html'), rendered)
		})
	})
	.then(() => {
		// Build Service Worker
		return esbuild.build({
			entryPoints: [path.join(srcDirectory, 'sw.js')],
			outfile: path.join(destDirectory, 'sw.js'),
			bundle: true,
			plugins: [pnpPlugin()],
			minify: true,
			define: {
				'process.env.NODE_ENV': '"production"',
			},
		})
	})
	.then(() => {
		// Inject manifest into service worker
		return injectManifest({
			globDirectory: destDirectory,
			globPatterns: ['**/*.{css,eot,html,ico,jpg,js,json,png,svg,ttf,txt,webmanifest,woff,woff2,webm,xml}'],
			globFollow: true,
			globStrict: true,
			globIgnores: ['**/*-es5.*.js', '3rdpartylicenses.txt', 'assets/images/icons/icon-*.png'],
			dontCacheBustURLsMatching: new RegExp('.+.[a-f0-9]{20}..+'),
			swSrc: path.join(destDirectory, '/sw.js'),
			swDest: path.join(destDirectory, '/sw.js'),
		})
	})
	.then(({ count, size, warnings }) => {
		if (warnings.length > 0) {
			console.warn('Warnings encountered while injecting the manifest:', warnings.join('\n'))
		}

		console.log(`Injected a manifest which will precache ${count} files, totaling ${size} bytes.`)
	})
