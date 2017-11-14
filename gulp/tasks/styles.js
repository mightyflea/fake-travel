var gulp = require('gulp'),
	postCSS = require('gulp-postcss'),
	cssvars = require('postcss-simple-vars'),
	cssnested = require('postcss-nested'),
	cssimport = require('postcss-import'),
	cssmixins = require('postcss-mixins'),
	autoprefixer = require('autoprefixer');

//run all CSS manipulation tasks
gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
					.pipe(postCSS([cssimport, cssmixins, cssvars, cssnested, autoprefixer]))
					.on('error', function(errorInfo){
						console.log(errorInfo.toString());
						this.emit('end');
					})
					.pipe(gulp.dest('./app/temp/styles'));
});
