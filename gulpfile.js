var gulp = require('gulp'),
  inject = require('gulp-inject'),
  naturalSort = require('gulp-natural-sort'),
  webserver = require('gulp-webserver'),
  runSequence = require('run-sequence');

var appBaseUrl = 'http://localhost:8000/app/index.html';

gulp.task('inject', function() {
  var target = gulp.src('./app/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp
    .src(['./bower_components/**/*.min.js',
          './bower_components/**/*.min.css', 
          './app/**/*.js', 
          './app/**/*.css'
          ], {
            read: false
          })
    .pipe(naturalSort());
 
  return target
    .pipe(inject(sources))
    .pipe(gulp.dest('./app'));
});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: appBaseUrl
    }));
});

gulp.task('default', function() {
  runSequence('inject', 
              'serve'
              );
});