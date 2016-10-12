var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

gulp.task('js', function(){
   gulp.src([
   	'js/jquery-1.8.3.min.js',
   	'js/jquery.easing.1.3.js',
   	'js/camera.min.js',
   	'js/myscript.js',
   	'js/sorting.js',
   	'js/jquery.isotope.js',
   	'js/jquery.prettyPhoto.js',
   	'js/bootstrap.js',
   	'js/jquery.slicknav.js',
   	'js/jquery.lazyload.min.js',
   	'js/main.js'
   	])
   .pipe(concat('script.js'))
   .pipe(uglify())
   .pipe(gulp.dest('js'));
});

gulp.task('css', function() {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default',['js','css'],function(){
});