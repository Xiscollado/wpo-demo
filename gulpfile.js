var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css'); 
var uncss = require('gulp-uncss');

gulp.task('uncss', function () {  
    return gulp.src(['css/bootstrap.css','css/font-awesome.css'])
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(gulp.dest('css/cleancss'));
});

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
   .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  gulp.src([
      'css/normalize.css',
      'css/cleancss/bootstrap.css',
      'css/cleancss/font-awesome.css',
      'css/camera.css',
      'css/slicknav.css',
      'css/prettyPhoto.css',
      'css/style.css'
    ])
    .pipe(cleanCSS({
      'advanced' : true,
      'debug' : true,
      'keepSpecialComments' : 0
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default',['uncss','js','css'],function(){
});