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
  imagemin      = require('gulp-imagemin'),
  concat        = require('gulp-concat'),
  changed       = require('gulp-changed'),
  del           = require('del'),
  browserSync   = require('browser-sync');


//----------------------------------------
// Clean
//----------------------------------------

gulp.task('clean', function() {
    return del(['target/*']);
});

//----------------------------------------
// Copy files
//----------------------------------------

gulp.task('copyfiles', function () {
  gulp.src([
    './src/**/*',
    '!./src/assets/scss',
    '!./src/assets/scss/**/*',
    '!./src/assets/js/**/*',
    '!./src/assets/images/**/*'
    ])
    .pipe(changed('target'))
    .pipe(gulp.dest('target'));
});

gulp.task('copyfiles-watch', ['copyfiles'], browserSync.reload);


//----------------------------------------
// CSS
//----------------------------------------

gulp.task('styles', function () {
  gulp.src('src/assets/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 5 versions']
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('target/assets/css'));
});

gulp.task('styles-watch', ['styles'], browserSync.reload);


//----------------------------------------
// Scripts
//----------------------------------------

gulp.task('scripts', function () {
 
  // Lint
  gulp.src([
    './src/assets/js/src/*.js',
  ])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));

  // Concat
  gulp.src([
    './src/assets/js/lib/jquery.js',
    './src/assets/js/lib/console.js',
    './src/assets/js/lib/*.js',
    './src/assets/js/src/*.js',
    '!./src/assets/js/lib/modernizr.js',
    '!./src/assets/js/src/blank.js'
  ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('target/assets/js'));

  // Modernizr
  gulp.src('./src/assets/js/lib/modernizr.js')
    .pipe(gulp.dest('target/assets/js'));
});

gulp.task('scripts-watch', ['scripts'], browserSync.reload);


//----------------------------------------
// Images
//----------------------------------------

gulp.task('images', function () {
  gulp.src('src/assets/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('target/assets/images'));
});


//----------------------------------------
// Watch Task
//----------------------------------------

gulp.task('watch', function () {
  browserSync({
    // server: {
    //   baseDir: 'target'
    // }
    proxy: 'local.project-template.com'
  });
  gulp.watch([
    './src/**/*',
    '!./src/assets/scss',
    '!./src/assets/scss/**/*',
    '!./src/assets/js/**/*',
    '!./src/assets/images/**/*'
    ], ['copyfiles-watch']);
  gulp.watch('src/assets/scss/**/*.scss', ['styles-watch']);
  gulp.watch('src/assets/js/**/*.js', ['scripts']);
});


//----------------------------------------
// Default Task
//----------------------------------------

gulp.task('default', ['clean'], function() {
  gulp.run(['copyfiles', 'styles', 'scripts', 'images'])
});


//----------------------------------------
// Dev Task
//----------------------------------------

gulp.task('dev', ['clean'], function() {
  gulp.run(['copyfiles', 'styles', 'scripts', 'images', 'watch'])
});
