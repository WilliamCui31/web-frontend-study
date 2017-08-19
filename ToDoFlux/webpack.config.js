var path=require('path');

var node_modules=path.resolve(__dirname,'node_modules');
var pathToReact=path.resolve(node_modules,'react/dist/react.min.js');
var pathToReactDOM=path.resolve(node_modules,'react-dom/dist/react-dom.min.js');

var openBrowserPlugin=require('open-browser-webpack-plugin');

module.exports={
	entry: {
		index: [
			'webpack/hot/dev-server',
			'webpack-dev-server/client?http://localhost:8080',
			path.resolve(__dirname,'js/app.js')
		]
	},
	output: {
		path: path.resolve(__dirname,'./'),
		filename: '[name].bundle.js'
	},
	resolve: {
		extensions: ['','.js',".jsx"]
	},
	module: {
		loaders:[{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['react','es2015']
			}
		},{
			test: /.css$/,
			loader: 'style!css'
		},{
			test: /\.scss$/,
			loader: 'style!css!sass'
		},{
			test: /\.(png|jpe?g|gif)$/,
			loader: 'url?limit=25000'
		}],
		noParse: [pathToReact,pathToReactDOM]
	},
	plugins: [
		new openBrowserPlugin({url: 'http://localhost:8080'})
	]
}
