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
  browserSync   = require('browser-sync').create(),
  sitemap       = require('gulp-sitemap');


//----------------------------------------
// Variables
//----------------------------------------

var domainName = 'project-template';


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
    .pipe(gulp.dest('target'))
    .pipe(browserSync.stream());
});


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
    .pipe(gulp.dest('target/assets/css'))
    .pipe(browserSync.stream());
});


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
    '!./src/assets/js/src/blank.js'
  ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('target/assets/js'))
    .pipe(browserSync.stream());
});


//----------------------------------------
// Images
//----------------------------------------

gulp.task('images', function () {
  gulp.src('src/assets/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('target/assets/images'));
});

//----------------------------------------
// Sitemap
//----------------------------------------
 
gulp.task('sitemap', function () {
  gulp.src([
    'src/**/*.{php,html}',
    '!src/inc/*'
    ], {
      read: false
    })
  .pipe(sitemap({
    siteUrl: 'http://www.' + domainName + '.com'
  }))
  .pipe(gulp.dest('./target'));
});


//----------------------------------------
// Watch Task
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
  gulp.watch([
    './src/**/*',
    '!./src/assets/scss/**/*',
    '!./src/assets/js/**/*',
    '!./src/assets/images/**/*'
    ], ['copyfiles']);
  gulp.watch([
    './target/**/*',
    '!./target/assets/**/*'
    ]).on('change', browserSync.reload);
  gulp.watch('src/assets/scss/**/*.scss', ['styles']);
  gulp.watch('src/assets/js/**/*.js', ['scripts']);
});


//----------------------------------------
// Default Task
//----------------------------------------

gulp.task('default', ['copyfiles', 'styles', 'scripts', 'images', 'sitemap']);


//----------------------------------------
// Dev Task
//----------------------------------------

gulp.task('dev', ['copyfiles', 'styles', 'scripts', 'images', 'sitemap', 'watch']);

