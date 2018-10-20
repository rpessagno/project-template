 //========================================
// Gulpfile
//========================================


//----------------------------------------
// Plugins
//----------------------------------------

var
  gulp          = require('gulp'),
  sass          = require('gulp-sass'),
  autoprefixer  = require('gulp-autoprefixer'),
  cssnano       = require('gulp-cssnano'),
  jshint        = require('gulp-jshint'),
  stylish       = require('jshint-stylish'),
  uglify        = require('gulp-uglify'),
  concat        = require('gulp-concat'),
  browserSync   = require('browser-sync').create();


//----------------------------------------
// Variables
//----------------------------------------

var domainName = 'project-template';
var theme      = 'project-template';

//----------------------------------------
// CSS
//----------------------------------------

gulp.task('styles', function () {
  gulp.src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 5 versions']
    }))
    .pipe(cssnano({
      zindex: false
    }))
    .pipe(gulp.dest('target/wp-content/themes/' + theme + '/'))
    .pipe(browserSync.stream());
});


//----------------------------------------
// JS
//----------------------------------------

gulp.task('scripts', function () {
 
  // Lint
  gulp.src([
    './src/js/src/*.js',
  ])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));

  // Concat
  gulp.src([
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


//----------------------------------------
// Watch
//----------------------------------------

gulp.task('watch', function () {
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
  gulp.watch('src/scss/**/*.scss', ['styles']);
  gulp.watch('src/js/**/*.js', ['scripts']);
});


//----------------------------------------
// Default Task
//----------------------------------------

gulp.task('default', ['styles', 'scripts']);


//----------------------------------------
// Dev Task
//----------------------------------------

gulp.task('dev', ['styles', 'scripts', 'watch']);
