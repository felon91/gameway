const jsfilesMain = [
  $.path.jsScrollOverflow,
  $.path.jsMain,
];

const jsfilesDonat = [
  $.path.jsDonat,
];

module.exports = function () {
  $.gulp.task('scripts:main', function() {
    return $.gulp.src(jsfilesMain)
        .pipe($.gp.plumber())
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.babel({presets: ["@babel/preset-env"]}))
        .pipe($.gp.concat('main.js'))
        .pipe($.gp.uglify())
        .pipe($.gp.rename('main.min.js'))
        .pipe($.gp.sourcemaps.write(''))
        .pipe($.gulp.dest('build/js'))
        .pipe($.browserSync.stream());
  });

  $.gulp.task('scripts:donat', function() {
    return $.gulp.src(jsfilesDonat)
        .pipe($.gp.plumber())
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.babel({presets: ["@babel/preset-env"]}))
        .pipe($.gp.concat('donat.js'))
        .pipe($.gp.uglify())
        .pipe($.gp.rename('donat.min.js'))
        .pipe($.gp.sourcemaps.write(''))
        .pipe($.gulp.dest('build/js'))
        .pipe($.browserSync.stream());
  });
};