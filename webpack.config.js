const path = require('path');
const VueLoader = require('vue-loader/lib/plugin');
const WorkboxPlugin = require( 'workbox-webpack-plugin');
const CopyPlugin = require( 'copy-webpack-plugin');

const webpack = require('webpack');
const { execSync } = require('child_process');

var VERS_STR = execSync('git rev-list HEAD --count').toString()


module.exports = (env, argv)=>{

	const buildpath = argv['buildpath'];
	const absPath = path.resolve( __dirname, buildpath );
	const jsDir = path.join( buildpath, 'js' );

	return {

	mode: env.production ? "production" : 'development',
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
		__KONG:env.kong || false,
		__DIST:true,
		__SAVE:null,
		__VERSION:VERS_STR
	}),
	new CopyPlugin([

		{
			from:'index.html',
			to:absPath
		},
		{
			from:'data',
			to:path.join( absPath, 'data')
		},
		{
			from:'css',
			to:path.join( absPath, 'css' )
		}
	]),
	new WorkboxPlugin.InjectManifest({
		swSrc:'src/sw.js',
		swDest:'sw.js',
		importsDirectory:'wb-assets',
		//globIgnores:['src/**', 'node_modules/**', 'docs/**', 'dev/**'],
		//globPatterns:[ dataDir + '*', outDir + '**/*.{js,css,html}' ]
	})],

	//devtool: 'source-map',

	output: {

		filename: "[name].js",
		chunkFilename: "[name].bundle.js",
		path:path.resolve(__dirname, jsDir ),
		publicPath:jsDir,
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