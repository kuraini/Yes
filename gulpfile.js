'use strict';

global.$ = {
  gulp: require('gulp'),
  sass: require('gulp-sass'),
  plumber: require("gulp-plumber"),
  autoprefixer: require('gulp-autoprefixer'),
  sourcemaps: require('gulp-sourcemaps'),
  minify: require('gulp-csso'),
  uglify: require('gulp-uglify'),
  pump: require('pump'),
  imagemin: require('gulp-imagemin'),
  webp: require('gulp-webp'),
  svgstore: require('gulp-svgstore'),
  rename: require('gulp-rename'),
  server: require('browser-sync').create(),
  del: require('del'),

  path: {
    tasks: require('./gulp/config.js')
  }
}

$.path.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  $.gulp.series('clean', 'copy', 'style', 'scripts', 'img:dev', 'webp', 'sprite'),
  $.gulp.parallel('watch', 'serve')
));

$.gulp.task('build', $.gulp.series(
  $.gulp.series('clean', 'copy', 'style', 'scripts', 'img:build', 'webp', 'sprite'),
  $.gulp.parallel('watch', 'serve')
));
