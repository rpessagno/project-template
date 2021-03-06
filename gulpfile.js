//========================================
// Gulpfile
//========================================


//----------------------------------------
// Plugins
//----------------------------------------

var gulp          = require('gulp');
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var cssnano       = require('gulp-cssnano');
var jshint        = require('gulp-jshint');
var stylish       = require('jshint-stylish');
var uglify        = require('gulp-uglify');
var concat        = require('gulp-concat');
var browserSync   = require('browser-sync').create();


//----------------------------------------
// Variables
//----------------------------------------

var domainName = 'project-template';
var theme      = 'project-template';

//----------------------------------------
// CSS
//----------------------------------------

gulp.task('styles', function () {
  return gulp.src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano({
      zindex: false
    }))
    .pipe(gulp.dest('target/wp-content/themes/' + theme + '/'))
    .pipe(browserSync.stream());
});


//----------------------------------------
// JS
//----------------------------------------

// Concat
gulp.task('scripts', function () {
  return gulp.src([
    './src/js/lib/jquery.js',
    './src/js/lib/*.js',
    './src/js/src/global.js',
    './src/js/src/*.js'
  ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('target/wp-content/themes/' + theme + '/assets/js'))
    .pipe(browserSync.stream());
});

// Lint
gulp.task('scripts-lint', function () {
  return gulp.src([
    './src/js/src/*.js',
  ])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

//----------------------------------------
// Watch
//----------------------------------------

gulp.task('watch', function() {
  browserSync.init({
    // MAMP
    proxy: 'local.' + domainName + '.com'
    // No MAMP
    // server: {
    //   baseDir: 'target'
    // }
  });
  gulp.watch('./target/wp-content/themes/' + theme + '/**/*')
    .on('change', browserSync.reload);
  gulp.watch('src/scss/**/*.scss', gulp.parallel('styles'));
  gulp.watch('src/js/**/*.js', gulp.parallel('scripts', 'scripts-lint'));
});


//----------------------------------------
// Default Task
//----------------------------------------

gulp.task('default', gulp.parallel('styles', 'scripts', 'scripts-lint'));


//----------------------------------------
// Dev Task
//----------------------------------------

gulp.task('dev', gulp.parallel('styles', 'scripts', 'scripts-lint', 'watch'));
