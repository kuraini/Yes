module.exports = function () {
  $.gulp.task('sprite', function () {
    return $.gulp.src('src/img/sprite/*.svg')
      .pipe($.svgstore({
        inlineSvg: true
      }))
      .pipe($.rename('sprite.svg'))
      .pipe($.gulp.dest('build/img'));
  });
}
