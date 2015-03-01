/// <vs />
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    concat = require('gulp-concat');

gulp.task('minify-js', function () {
    return gulp.src([
            'Scripts/jquery-1.9.1.min.js',
            'Scripts/angular.min.js',
            'Scripts/angular-route.min.js',
            'Scripts/bootstrap.min.js',
            'app/js/modules/*.js',
            'app/js/controllers/*.js',
            'app/js/main.js',
            'app/js/routing.js',
            'app/js/services/*.js'])
        .pipe(concat('app.js'))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('./js/'));
});

gulp.task('minify-css', function () {
    return gulp.src([
            'Content/bootstrap.min.css',
            'app/css/styles.css'])
      .pipe(concat('app.css'))
      .pipe(uglifycss())
      .pipe(gulp.dest('./css/'));
});

gulp.task('default', ['minify-js', 'minify-css']);