var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('styles', function() {
    gulp.src('scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('scripts', function() {
    gulp.src([
        'js/main.js',
        'js/plugins.js'
    ])
        .pipe(concat('full.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/'));
});
