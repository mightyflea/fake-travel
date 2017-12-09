var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var del = require('del');
var svg2png = require('gulp-svg2png');

config = {
	//fix really hard-to-see sprite icon overlap artifacts
	shape: {
		spacing: {
			padding: 1
		}
	},
	mode: {
		css: {
			variables: {
				replaceSVGWithPNG: function(){
					return function(sprite,render){
						/*'render' renders the sprite name text(?)
						Create an array using .svg as delimiter
						This creates a two item array with the file name and the empty string that "followed" the .svg delimiter
						Join the file name and empty string with .png as a delimiter */
						/*console.log('[' + render(sprite) + ']');
						console.log(render(sprite).split('.svg'));
						console.log(render(sprite).replace('.svg','.png'));//does the same thing. Why get fancy?*/
						return render(sprite).split('.svg').join('.png');
					}
				}
			},
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

//make a PNG copy of the sprite
gulp.task('createPNGCopy', ['createSprite'], function(){
	return gulp.src('./app/temp/sprite/css/*.svg')
		.pipe(svg2png())
		.pipe(gulp.dest('./app/temp/sprite/css'))
});

//copies the sprite file from creation dir to app dir, requires 'createSprite' to run first
gulp.task('copySpriteGraphic', ['createPNGCopy'], function(){
//gulp.task('copySpriteGraphic', ['createSprite'], function(){
//	return gulp.src('./app/temp/sprite/css/**/*.svg')
	return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
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
gulp.task('icons', ['beginClean', 'createSprite', 'createPNGCopy', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);
