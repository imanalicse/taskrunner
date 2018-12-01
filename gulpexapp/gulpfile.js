const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');



/**
 * Top level functions
 * gulp.task - Define tasks
 * gulp.src - Point to files to use
 * gulp.desc - Point to folder to output
 * gulp.watch - Watch files and folders for changes
 */

 gulp.task('message', function(){
     return console.log('Message running');
 });

 gulp.task('js', function(){
   return gulp.src('src/js/*.js')
        //.pipe(concat('script.js'))  // combine to one file          
        .pipe(uglify())   // Minify js
        .pipe(gulp.dest('dist/js'))
 });

 gulp.task('sass', function () {
   return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
 });
