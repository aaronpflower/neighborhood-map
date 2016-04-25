// grab our gulp packages

var gulp = require('gulp'),
	gutil = require('gulp-util'),
	stylus = require('gulp-stylus'),
	nodemon = require('gulp-nodemon'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	minifyCss = require('gulp-minify-css');

// // Configure the gulp task
// gulp.task('jshint', function() {
// 	return gulp.src('client/js/**/*.js')
// 	.pipe(jshint())
// 	.pipe(jshint.reporter('jshint-stylish'));
// });

gulp.task('watch', function() {
	gulp.watch('client/js/**/*.js', ['jshint']);
});

// compile stylus to css
gulp.task('css', function() {
	return gulp.src('client/css/src/styles.styl')
	.pipe(stylus())
	.pipe(gulp.dest('client/css/lib'));
});

//browserfiy
gulp.task('browserfiy', function() {
	return browserify('client/js/src/mithril-routes.js').bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('client/js/lib'));
});

// Nodemon to start server
gulp.task('default', function() {
	nodemon({ script: 'server/src/app.js'
			, ext: 'html js'
			, ignore: ['ingnored.js']
			, tasks: ['jshint'] })
		.on('restart', function(){
			console.log('restarted!')
		})
})

//Mini CSS
gulp.task('build', function() {
  return gulp.src('client/css/lib/styles.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('client/css/dist'));
});