const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

//for attractions
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
	entry: {
		'build/bundle': ['./src/main.js']
	},
	resolve: {
		alias: {
			svelte: path.dirname(require.resolve('svelte/package.json'))
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: path.join(__dirname, '/public'),
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						//for attractions
						preprocess: [sveltePreprocess()],
						
						compilerOptions: {
							dev: !prod
						},
						emitCss: prod,
						hotReload: !prod,
						
						//added
						hotOptions: {
						  // Prevent preserving local component state
						  preserveLocalState: true,

						  // Prevent doing a full reload on next HMR update after fatal error
						  noReload: true,

						  // Try to recover after runtime errors in component init
						  optimistic: false,
						},
						compilerOptions: {
							  // additional compiler options here
							  //generate: 'ssr', // for example, SSR can be enabled here
						}
						
						
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			},
			{
				// required to prevent errors from Svelte on Webpack 5+
				test: /node_modules\/svelte\/.*\.mjs$/,
				resolve: {
					fullySpecified: false
				}
			}
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	devtool: prod ? false : 'source-map',
		devServer: {
//		proxy: { '/api': { target: 'https://localhost:2000', secure: false }},
		open: true,
		compress: true,
		host: 'localhost',	//'0.0.0.0',
	    port: 3000,
		hot: true,	//'only', set liveReload: false,
		client: {
			logging: 'info',	//'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose'
			overlay: {
				errors: true,
				warnings: false,
			},
			progress: true,
			reconnect: 10,	//true - unlimited
		},
		historyApiFallback: true,
		server: 'https',
		static: {
			directory: path.join(__dirname, 'public'),
			watch: true
		},
		watchFiles:  ['*'],
	}
};
