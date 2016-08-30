'use strict';
 
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
 
 // Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./examples"
    });

    gulp.watch("./examples/scss/**/*.scss", ['sass']);
    gulp.watch("./examples/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./examples/scss/**/*.scss")
    .pipe(plumber({
          errorHandler: function(error) {
            console.log(error.message);
            this.emit('end');
          }
        }))
    .pipe(sass())
    .pipe(plumber.stop())
    .pipe(gulp.dest("examples"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);