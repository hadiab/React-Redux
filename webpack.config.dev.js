import path from 'path';
import webpack from 'webpack';

export default {
	dectools: 'eval-source-map',
	entry: path.join(__dirname, '/client/index.js'),
	output: {
		path: '/'
	},
	pulgins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'server/shared')
        ],
				loaders: [ 'babel' ]
			}
		]
	},
	resolve: {
		extentions: [ '', '.js' ]
	}
}
