const path = require( 'path' );
const VueLoader = require('vue-loader/lib/plugin');
const webpack = require('webpack');

const fs = require('fs');

var versObj = fs.readFileSync( './vers.json');
versObj = JSON.parse(versObj);
const vers = versObj.vers;

versObj.vers++;
fs.writeFileSync( './vers.json', JSON.stringify(versObj ));


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
		new webpack.SourceMapDevToolPlugin(
			{
				fileContext:'./dist/'
			}
		),
		new webpack.DefinePlugin({
			__SAVE:null,
			__DIST:false,
			__VERSION:vers
		})],
	output:{

		path:path.resolve( __dirname, "dist"),
		publicPath:"dist/",
		filename:"[name].dev.bundle.js",
		chunkFilename:"dev/[name].bundle.js",
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