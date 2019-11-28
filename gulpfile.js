global.$ = {
  gulp: require('gulp'),
  gp:   require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),
  rollup: require('rollup'),
  imageminJpegRecompress: require('imagemin-jpeg-recompress'),
  pngquant: require('imagemin-pngquant'),
  del: require('del'),
  path: {
    config: require('./gulp/config.js'),
    jsScrollOverflow: './js/main/scrolloverflow.min.js',
    js: './js/**/*.js',
    jsMain: './js/main/*.js',
    jsDonat: './js/donat/*.js',
  }
};

$.path.config.forEach(function(path) {
  require(path)();
});