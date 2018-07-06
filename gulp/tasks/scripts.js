module.exports = function () {
  $.gulp.task('scripts', function () {
    return $.gulp.src('src/js/main.js')
      .pipe($.gulp.dest('build/js/'))
      .pipe($.server.reload({
        stream: true
      }));
  });
}
