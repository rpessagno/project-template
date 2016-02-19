var gulp = require('gulp'),
  sass          = require('gulp-sass'),
  autoprefixer  = require('gulp-autoprefixer'),
  cssnano       = require('gulp-cssnano'),
  jshint        = require('gulp-jshint'),
  stylish       = require('jshint-stylish'),
  uglify        = require('gulp-uglify'),
  imagemin      = require('gulp-imagemin'),
  concat        = require('gulp-concat'),
  changed       = require('gulp-changed'),
  livereload    = require('gulp-livereload'),
  del           = require('del');
  gulpsync      = require('gulp-sync')(gulp);

// CSS
gulp.task('styles', function () {
  gulp.src('src/assets/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 5 versions']
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('target/assets/css'))
    .pipe(livereload());
});

// Scripts
gulp.task('scripts', function () {
  gulp.src([
    './src/assets/js/lib/jquery.js',
    './src/assets/js/lib/console.js',
    './src/assets/js/lib/*.js',
    './src/assets/js/src/*.js',
    '!./src/assets/js/lib/modernizr.js',
    '!./src/assets/js/src/blank.js'
  ])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    // .pipe(jshint.reporter('fail'))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('target/assets/js'))
    .pipe(livereload());
  gulp.src('./src/assets/js/lib/modernizr.js')
    .pipe(gulp.dest('target/assets/js'));
});

// Images
gulp.task('images', function () {
  gulp.src('src/assets/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('target/assets/images'));
});

// Copy files
gulp.task('copyfiles', function () {
  gulp.src('./src/**/*.{html,php,txt,xml}')
    .pipe(changed('target'))
    .pipe(gulp.dest('target'))
    .pipe(livereload());
});

// Clean
gulp.task('clean', function (cb) {
  del(['target/*'], cb);
});

// Watch
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('src/assets/scss/**/*.scss', ['styles']);
  gulp.watch('src/assets/js/**/*.js', ['scripts']);
  gulp.watch('./src/**/*.{html,php,txt}', ['copyfiles']);
});

// Default task
gulp.task('default', gulpsync.sync(['styles', 'scripts', 'copyfiles', 'images'], ['clean']));

// Watch task
gulp.task('dev', gulpsync.sync(['styles', 'scripts', 'copyfiles', 'images', 'watch'], ['clean']));

// To Do
/*
- No linting on JS libs
- Jade
*/
