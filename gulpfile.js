//========================================
// Gulpfile
//========================================

const { src, dest, watch, series } = require('gulp');

//----------------------------------------
// Plugins
//----------------------------------------

const sass = require('gulp-sass')(require('sass'))
const autoprefixer  = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browsersync = require('browser-sync').create();

//----------------------------------------
// Variables
//----------------------------------------

var domainName = 'projecttemplate';
var themeFolder = './target/wp-content/themes/project-template/';

//----------------------------------------
// CSS
//----------------------------------------

function styles() {
  return src('src/scss/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano({
      zindex: false
    }))
    .pipe(dest(themeFolder, { sourcemaps: '.' } ));
}

//----------------------------------------
// JS
//----------------------------------------

function jsConcat() {
  return src([ './src/js/lib/jquery.js', './src/js/lib/*.js', './src/js/src/global.js', './src/js/src/*.js' ], { sourcemaps: true })
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest(themeFolder + 'assets/js', { sourcemaps: '.' } ));
}

function jsLint() {
  return src('./src/js/src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
}


//----------------------------------------
// Browsersync
//----------------------------------------

function browsersyncServe(cb) {
  browsersync.init({
    // MAMP
    proxy: 'local.' + domainName + '.com'
    // No MAMP
    // server: {
    //   baseDir: 'target'
    // }
  });
  cb();
}

function browersyncReload(cb) {
  browsersync.reload();
  cb();
}

//----------------------------------------
// Watch
//----------------------------------------

function watchTask() {
  watch(themeFolder + '**/*.php', browersyncReload);
  watch('src/scss/**/*.scss', series(styles, browersyncReload));
  watch('src/js/**/*.js', series(jsConcat, jsLint, browersyncReload));
}

//----------------------------------------
// Tasks
//----------------------------------------

exports.default = series(
  styles,
  jsConcat,
  jsLint,
  browsersyncServe,
  watchTask
);
