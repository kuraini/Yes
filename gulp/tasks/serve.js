module.exports = function () {
  $.gulp.task('serve', function () {
    $.server.init({
      server: {
        baseDir: './build'
      }
    });
  });
}
