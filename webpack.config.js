const path = require('path');
const VueLoader = require('vue-loader/lib/plugin');
const WorkboxPlugin = require( 'workbox-webpack-plugin');

const webpack = require('webpack');
const { execSync } = require('child_process');

var VERS_STR = execSync('git rev-list HEAD --count').toString()


module.exports = (env, argv)=>{ return {

	mode: "production",
	entry: {
		wizrobe: "./src/index.js"
	},
	module: {

		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		],
	},
	plugins: [
		new VueLoader({
			compilerOptions:{

				whitespace:'condense'
			}
		}),
		new webpack.DefinePlugin({
		__DIST:true,
		__SAVE:null,
		__VERSION:VERS_STR
	}),
	new WorkboxPlugin.InjectManifest({
		swSrc:'src/sw.js',
		importsDirectory:'wb-assets',
		globIgnores:['src/**', 'node_modules/**/*', 'docs/**', 'dev/**',
			'\.vscode/**'],
		globPatterns:['data/*', 'dist/**/*.{js,css,html}']
	})],

	//devtool: 'source-map',

	output: {

		filename: "[name].js",
		chunkFilename: "[name].bundle.js",
		publicPath:argv['output-path'],
		library: "[name]"
	},
	resolve: {
		modules: [
			path.resolve(__dirname, "src"),
			"node_modules"
		],

		alias: {
			'modules':'modules',
			'config': 'config',
			"data": "../data",
			'ui': 'ui'
		}
	}

}}