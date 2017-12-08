var path = require('path');//needed to create absolute path

module.exports = {
	/* 	Use a string for a single start point, an array for multiple start points,
	 	or an object for multiple bundles. */
//	entry: "./app/assets/scripts/App.js", // where to start bundling.
	entry: {
			App: "./app/assets/scripts/App.js",
			Vendor: "./app/assets/scripts/Vendor.js"
		}, // where to start bundling.
	output: { // where to output the bundle
		path: path.resolve(__dirname, "./app/temp/scripts"),//must be an absolute path
//		filename: "App.js"
		filename: "[name].js"
	},
	//babel-related code: converts es5 to es6
	module: {
		loaders: [
			{
				loader: 'babel-loader', //the webpack babel loader
				query: {
					presets: ['es2015'] //choose js version
				},
				test: /\.js$/, //only apply to js files
				exclude: /node_modules/ //don't process any of the npm js files
			}
		]
	}
}
