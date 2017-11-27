var path = require('path');//needed to create absolute path

module.exports = {
	entry: "./app/assets/scripts/App.js", /* where to start bundling.
	 	Use an array for multiple start points. Use an object for multiple bundles. */
	output: { // where to output the bundle
		path: path.resolve(__dirname, "./app/temp/scripts"),//must be an absolute path
		filename: "App.js"
	}
}
