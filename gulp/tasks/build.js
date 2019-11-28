module.exports = function () {
  $.gulp.task('build', $.gulp.series('clean', 'copy', 'sass', 'scripts:main', 'scripts:donat', 'css', 'images', 'webp', 'svg'));
};

