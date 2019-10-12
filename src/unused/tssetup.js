rules: [
	{
	  test: /\.tsx?$/,
	  use: 'ts-loader',
	  exclude: /node_modules/,
	},

	extensions: [ '.tsx', '.ts', '.js' ],