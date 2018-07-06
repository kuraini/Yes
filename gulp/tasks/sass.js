module.exports = function () {
  $.gulp.task('style', function () {
    return $.gulp.src('src/sass/style.scss')
      .pipe($.plumber())
      .pipe($.sourcemaps.init())
      .pipe($.sass())
      .pipe($.autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe($.gulp.dest('build/css'))
      .pipe($.minify())
      .pipe($.rename('style.min.css'))
      .pipe($.sourcemaps.write())
      .pipe($.gulp.dest('build/css'))
      .pipe($.server.stream());
  });
}
