var gulp = require('gulp'),
	postCSS = require('gulp-postcss'),//runs raw CSS through a post-processor
	cssvars = require('postcss-simple-vars'),//allows variables in CSS
	cssnested = require('postcss-nested'),//allows nested specifiers
	cssimport = require('postcss-import'),//imports included CSS files into a single file
	cssmixins = require('postcss-mixins'),//allows mixins (kind of like CSS custom tags)
	autoprefixer = require('autoprefixer'),//replaces "&" with the name of the current class
	hexrgba = require('postcss-hexrgba');//converts hex values to rgba


//run all CSS manipulation tasks
gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
					.pipe(postCSS([cssimport, cssmixins, cssvars, cssnested, hexrgba, autoprefixer]))
					.on('error', function(errorInfo){
						console.log(errorInfo.toString());
						this.emit('end');
					})
					.pipe(gulp.dest('./app/temp/styles'));
});
