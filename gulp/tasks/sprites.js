var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var del = require('del');

config = {
	mode: {
		css: {
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './gulp/templates/sprites.css'
				}
			}
		}
	}
}

//delete sprite folder
gulp.task('beginClean', function(){
	return del(['./app/temp/sprite','./app/assets/images/sprites']);
});

//creates the sprite file from .svg files in icons directory, requires 'beginClean' to run first
gulp.task('createSprite', ['beginClean'], function(){
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/temp/sprite/'));
});

//copies the sprite file from creation dir to app dir, requires 'createSprite' to run first
gulp.task('copySpriteGraphic', ['createSprite'], function(){
	return gulp.src('./app/temp/sprite/css/**/*.svg')
		.pipe(gulp.dest('./app/assets/images/sprites'));
});

//creates the sprite css file from temp to app, requires 'createSprite' to run first
gulp.task('copySpriteCSS', ['createSprite'], function(){
	return gulp.src('./app/temp/sprite/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function(){
	return del(['./app/temp/sprite']);
});

//run all sprite creation procedures
//note: if a deletion directory is toggled open, even if not selected, deletion will fail
gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);
