module.exports = function () {
  $.gulp.task('serve', function () {
    $.browserSync.init({
      server: 'build/'
    });

    $.gulp.watch('sass/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('*.html', $.gulp.series('html'));
    $.gulp.watch('js/main/*.js', $.gulp.series('scripts:main'));
    $.gulp.watch('js/donat/*.js', $.gulp.series('scripts:donat'));
    $.gulp.watch('css/**/*.css', $.gulp.series('css'));
    $.gulp.watch('img/**/*.{png,jpg,svg}', $.gulp.series('allimg'));
    $.gulp.watch('img/**/*.{svg}', $.gulp.series('svg'));
  });
};