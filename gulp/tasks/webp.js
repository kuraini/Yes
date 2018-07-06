module.exports = function () {
  $.gulp.task('webp', function () {
    return $.gulp.src('src/img/content/*.{png,jpg}')
      .pipe($.webp({quality: 90}))
      .pipe($.gulp.dest('build/img/content'))
  });
}
