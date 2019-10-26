const path = require( 'path' );
const VueLoader = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const { execSync } = require('child_process');

var VERS_STR = execSync('git rev-list HEAD --count').toString()


module.exports = {

	mode:"development",
	entry:{
		wizrobe:"./src/index.js"
	},
	module:{

			rules:[
				{
					test:/\.vue$/i,
					loader:'vue-loader'
				},
				{
					test:/\.css$/i,
					use:[ 'style-loader', 'css-loader']
				}
			],
	},
	devtool:false,
	plugins:[new VueLoader(),
		new webpack.DefinePlugin({
			__SAVE:JSON.stringify('dev'),
			__DIST:false,
			__VERSION:VERS_STR
		})],
	output:{

		path:path.resolve( __dirname, "dev"),
		publicPath:"dev/",
		filename:"[name].dev.bundle.js",
		chunkFilename:"[name].bundle.js",
		library:"[name]"
	},
	resolve:{
		modules:[
			"node_modules",
			path.resolve( __dirname, "src"),
		],

		alias:{
			'config':'config_dev',
			'data':'../data',
			'ui':'ui'
		}
	}

};