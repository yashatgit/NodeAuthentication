/**
 * Created by Yash on 19/01/16.
 */

'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var less = require('gulp-less');


gulp.task('less', function () {
  return gulp.src("public/*.less")
    .pipe(less())
    .pipe(gulp.dest("public/"))
});

gulp.task('watch', function () {
  gulp.watch("public/*.less", ['less']);
});

gulp.task('nodemon', ['watch'], function (cb) {
  var started = false;
  return nodemon({
    script: 'server.js',
    debug: true,
    exec: 'node-inspector & node --debug',
    //exec: 'mongod & node-inspector & node --debug',
    //ext: 'js jsx html'
    watch: ['server.js', 'public/', 'config/', 'app/', 'views']
  }).on('start', function () {
    if (!started) {
      cb();
      started = true;
    }
  });
});

gulp.task('default', ['nodemon']);