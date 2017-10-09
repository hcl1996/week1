const gulp = require('gulp');
const uglify = require('gulp-uglify');
const minify= require('gulp-minify-css');

gulp.task('gul',function(){
    gulp.src('js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('test'))
});
gulp.task('css',function(){
    gulp.src('style.css')
    .pipe(minify())
    .pipe(gulp.dest('test'))
});

