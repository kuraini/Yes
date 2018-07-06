module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('src/sass/**/*.scss', $.gulp.series('style'));
    $.gulp.watch('src/js/**/*.js', $.gulp.series('scripts'));
    $.gulp.watch('src/img/*', $.gulp.series('img:dev'));
    $.gulp.watch('src/*.html').on('change', $.gulp.series('html'))
  });
}
