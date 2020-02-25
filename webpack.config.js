const path = require('path');
const VueLoader = require('vue-loader/lib/plugin');
//const WorkboxPlugin = require( 'workbox-webpack-plugin');
const CopyPlugin = require( 'copy-webpack-plugin');

const ZipPlugin = require('zip-webpack-plugin');

const HtmlPlug = require( 'html-webpack-plugin' );

const webpack = require('webpack');
const { execSync } = require('child_process');

var VERS_STR = execSync('git rev-list HEAD --count').toString()

const UiDir = path.resolve( __dirname, 'src/ui');
const DebugDir = path.resolve( __dirname, 'src/debug');


const MakePlugins = ( env, buildPath ) => {

	console.log('BUILD: ' + buildPath);

	const plugins = [
		new VueLoader({
			compilerOptions:{

				whitespace:'condense'
			}
		}),
		new webpack.DefinePlugin({
			__DEBUG:true,
			__CHEATS:true,
			__KONG:env.kong || false,
			__DIST:true,
			__CLOUD_SAVE:false,
			__VERSION:VERS_STR
		}),
		new CopyPlugin([

			{
				from:'index.html',
				to:buildPath
			},
			{
				from:'data',
				to:path.resolve( buildPath, 'data')
			},
			{
				from:'css',
				to:path.resolve( buildPath, 'css' )
			}
		])
	];

	if ( env.kong) {

		plugins.push( new ZipPlugin({

			filename:'kong.zip',
			pathPrefix:'js',
			path:buildPath,
			exclude:/\.html$/

		}));
	}

	return plugins;
}

module.exports = (env, argv) => {

	const BuildPath = path.resolve( __dirname, argv['buildpath'] || 'dev' );

	return {

	mode: env.production ? "production" : 'development',
	entry: {
		wizrobe: "./src/index.js"
	},
	module: {

		rules: [
			{
				test: /\.vue$/,
				include:[ UiDir, DebugDir ],
				loader: 'vue-loader'
			},
			{
				test: /\.css$/i,
				include:[ path.resolve(__dirname, 'css'),
					UiDir,
					DebugDir ],
				use: ['style-loader', 'css-loader']
			},
			{
				test:/\.tsx?$/,
				use:"ts-loader",
				exclude:"/node_modules/"
			}
		],
	},
	plugins: MakePlugins(env, BuildPath ),

	output: {

		filename: "[name].js",
		chunkFilename: "[name].bundle.js",
		path:path.resolve( BuildPath, 'js/' ),
		publicPath:'js/',
		library: "[name]"
	},
	resolve: {
		modules: [
			path.resolve(__dirname, "src"),
			"node_modules"
		],

		extensions:[ '.js', '.ts', '.tsx'],
		alias: {
			'modules':'modules',
			'config': 'config',
			"data": "../data",
			'ui': 'ui'
		}
	}

}}