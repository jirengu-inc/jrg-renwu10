var gulp = require('gulp')
 
var	minifycss = require('gulp-minify-css'),
	// imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename')
	// minhtml = require('gulp-htmlmin'),

	// concat = require('gulp-concat'),
	// jshint = require('gulp-jshint'),
	// uglify = require('gulp-uglify')

// gulp.task('img', function(argument){
// 	gulp.src('./image/*')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('./dist/imgs'))
// })

// gulp.task('html', function(){
// 	return gulp.src('./*.html')
// 		.pipe(minhtml({collapseWhitespace: true}))
// 		.pipe(gulp.dest('./dist'))
// })

gulp.task('css', function(argument){
	gulp.src('./css/index.css')
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifycss())
		.pipe(gulp.dest('./dist/css/'))
})

// gulp.task('js', function(argument){
// 	gulp.src('js/*.js')
// 		// .pipe(jshint())
// 		// .pipe(jshint.reporter('default'))
// 		.pipe(concat('merge.js'))
// 		.pipe(rename({
// 			suffix: '.min'
// 		}))
// 		.pipe(uglify())
// 		.pipe(gulp.dest('./dist/js/'))
// })

// gulp.task('default', ['html', 'css', 'js', 'img'])
gulp.task('default', ['css'])
