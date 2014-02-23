var gulp   = require('gulp'),
    gutil  = require('gulp-util'),
    sass   = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify'),
    watch  = require('gulp-watch'),
    concat = require('gulp-concat'),
    bower  = require('gulp-bower-files'),
    notify = require('gulp-notify');

// bower task
gulp.task('bower', function () {
  bower().pipe(gulp.dest("./src/vendor"))
    .pipe(notify({
      message: "Manage files locations for bower dependencies!"
    }));
});

// sass task
gulp.task('sass', function () {
  gulp.src('./src/styles/*.scss')
    .pipe(sass({style: "compressed"}))
    .pipe(gulp.dest('./dist/assets/styles'))
    .pipe(notify({
      message: "You just got super Sassy!"
    }));
});

// uglify task
gulp.task('js', function() {
  // main app js file
  gulp.src('./src/js/app.js')
  .pipe(concat("app.js"))
  .pipe(gulp.dest('./dist/assets/js/'));

  // create 1 vendor.js file from all vendor plugin code
  gulp.src('./src/vendor/**/*.js')
  .pipe(uglify())
  .pipe(concat("vendor.js"))
  .pipe(gulp.dest('./dist/assets/js'))
  .pipe( notify({ message: "Javascript is now ugly!"}) );
});

gulp.task('watch', function() {
  // watch scss files
  gulp.watch('./assets/styles/**/*.scss', function() {
    gulp.run('sass');
  });

  gulp.watch('./assets/js/**/*.js', function() {
    gulp.run('js');
  });
});

gulp.task('default', ['bower', 'sass', 'js', 'watch']);
