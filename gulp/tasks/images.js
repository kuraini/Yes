module.exports = function () {
  $.gulp.task('img:build', function () {
    return $.gulp.src('src/img/**/*.{png,jpg,svg}')
      .pipe($.imagemin([
        $.imagemin.optipng({optimizationLevel: 3}),
        $.imagemin.jpegtran({progressive: true}),
        $.imagemin.svgo()
      ]))
      .pipe($.gulp.dest('build/img'));
  });

  $.gulp.task('img:dev', function () {
    return $.gulp.src('src/img/**/*.{png,jpg,svg}')
      .pipe($.gulp.dest('build/img'))
  });
}
