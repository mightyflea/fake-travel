var gulp = require('gulp');
var webpack = require('webpack');

//gulp.task('scripts', function(callback){
gulp.task('scripts', ['modernizr'], function(callback){
	//run webpack
	webpack(require('../../webpack.config.js'), function(err, stats){
		if (err){
			console.log(err.toString());
		}
		console.log(stats.toString());
		callback();//inform gulp that webpack has completed, allowing for task dependencies
	});
})
