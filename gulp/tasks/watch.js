var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

/* run & complete styles task, then pipe into browserSync, which will update
	css in the browser w/o refresh */
gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});

/* run & complete scripts task, then pipe into browserSync, which will refresh
	the browser */
gulp.task('scriptsRefresh', ['scripts'], function(){
	browserSync.reload();
});

gulp.task('watch', function(){

	//launch the browserSync server and open broswer
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function(){
		browserSync.reload();
	});

	//run when any css file in the given directory is saved
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});

	//run when any js file in the given directory is saved
	watch('./app/assets/scripts/**/*.js', function(){
		gulp.start('scriptsRefresh');
	});

});
