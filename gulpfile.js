var gulp = require('gulp')
var plumber = require('gulp-plumber')
var browserify = require('gulp-browserify')
var stylus = require('gulp-stylus')
var cssmin = require('gulp-cssmin')
var rename = require('gulp-rename')
var jsmin = require('gulp-jsmin')
var autoprefixer = require('gulp-autoprefixer')
var pug = require('gulp-pug')
var concat = require('gulp-concat')
var order = require('gulp-order')
var babel = require('gulp-babel')
var nodemon = require('gulp-nodemon')

var ENV = process.env.ENV || 'development'

gulp.task('js', function(){
	return gulp.src('src/js/app.js', { read: false })
		.pipe(plumber())
		.pipe(browserify())
		// .pipe(babel({presets: ['es2015']}))
		.pipe(gulp.dest('dist/js'))
})

gulp.task('css', function(){
	return gulp.src('src/styl/*.styl')
		.pipe(plumber())
		.pipe(order([
			'variables.styl',
			'base.styl',
			'boulder-info',
			'elements.styl',
			'footer.styl',
			'home.styl',
			'map.styl',
			'menu.styl',
			'registry.styl',
			'rsvp.styl',
			'wedding-details.styl'
		]))
		.pipe(concat('styles.styl'))
		.pipe(stylus({errors: true, 'include css': true}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('dist/css'))
})

gulp.task('pug', function(){
	return gulp.src('src/pug/*.pug')
		.pipe(plumber())
		.pipe(pug())
		.pipe(gulp.dest('dist'))
})

gulp.task('build', function(){
	gulp.src('src/js/app.js', { read: false })
		.pipe(plumber())
		// .pipe(babel({presets: ['es2015']}))
		.pipe(browserify())
		.pipe(jsmin())
		.pipe(gulp.dest('dist/js'))

	gulp.src('src/pug/*.pug')
		.pipe(plumber())
		.pipe(pug())
		.pipe(gulp.dest('dist'))
 
	return gulp.src('src/styl/*.styl')
		.pipe(plumber())
		.pipe(order([
			'variables.styl',
			'base.styl',
			'boulder-info',
			'elements.styl',
			'footer.styl',
			'home.styl',
			'map.styl',
			'menu.styl',
			'registry.styl',
			'rsvp.styl',
			'wedding-details.styl'
		]))
		.pipe(concat('styles.styl'))
		.pipe(stylus({errors: true, 'include css': true}))
		.pipe(autoprefixer())
		.pipe(cssmin())
		.pipe(gulp.dest('dist/css'))
})

gulp.task('nodemon', function() {
	nodemon({ script: 'app.js'})
		.on('restart', function(){
			console.log('restarted!')
		})
})

gulp.task('watch', function(){
	gulp.watch('src/styl/*.styl', ['css'])
	gulp.watch('src/js/**/*.js', ['js'])
	gulp.watch('src/pug/*.pug', ['pug'])
})

gulp.task('default', ['build', 'watch'])














