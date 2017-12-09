var gulp = require('gulp');
var imageMin = require('gulp-imagemin');
var del = require('del');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

//manually run preview, if you so desire
gulp.task('previewDist', function(){
	//launch the browserSync server and open broswer
	browserSync.init({
		notify: false,
		server: {
			baseDir: "docs"
		}
	});
});

//clear out previous build
gulp.task('deleteDistFolder', ['icons'], function(){
	return del('./docs');
});

//copy other files
gulp.task('copyGeneralFiles', ['deleteDistFolder'], function(){
	var pathsToCopy = [
		'./app/**/*',
		'!./app/index.html',
		'!./app/assets/images/**/*',
		'!./app/assets/styles/**/*',
		'!./app/assets/scripts/**/*',
		'!./app/temp',
		'!./app/temp/**/*'
];

	return gulp.src(pathsToCopy)
		.pipe(gulp.dest('./docs'));
})

//optimize after clearing out the previous build
gulp.task('optimizeImages', ['deleteDistFolder'], function(){
	//all files in images directory
	//exclude icons folder and all files in it
	return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
		.pipe(imageMin({
			progressive: true,//jpg
			interlaced: true,//gif
			multipass: true//svg
		}))
		.pipe(gulp.dest('./docs/assets/images'));
});

/*	We need 'icons' to run before 'styles'. Since deleteDistFolder requires 'icons',
we make sure that it completes before running 'usemin' which will then run 'styles'.
Requiring 'icons' or even 'deleteDistFolder' in the same trigger as 'styles' would
just run them at the same time. */
gulp.task('useminTrigger', ['deleteDistFolder'], function(){
	gulp.start('usemin');
});

//copy & compress js & css
gulp.task('usemin', ['styles','scripts'], function(){
	return gulp.src('./app/index.html')
		.pipe(usemin({
			css: [function(){return rev()}, function(){return cssnano()}], //return makes gulp aware of completion
			js: [function(){return rev()}, function(){return uglify()}]
		}))
		.pipe(gulp.dest('./docs'));
})

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles','optimizeImages','useminTrigger']);
//gulp.task('build', ['optimizeImages']); also works, but I guess above is more explicit
