const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const watch = require('gulp-watch');

/**
 * Top level functions
 * gulp.task - Define tasks
 * gulp.src - Point to files to use
 * gulp.desc - Point to folder to output
 * gulp.watch - Watch files and folders for changes
 */

gulp.task('js', function () {
  return gulp.src('src/js/*.js')
    .pipe(concat('script.js'))  // combine to one file          
    .pipe(uglify())   // Minify js
    .pipe(gulp.dest('dist/js'))
});

gulp.task('css', function () {
  gulp.src('src/css/*.css')
    .pipe(uglifycss())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    //.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    //.pipe(concat('style.min.css'))    
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['js', 'css']);

gulp.task('watch', function () {
  gulp.watch('src/css/*.css', ['js']);
  gulp.watch('src/css/*.css', ['css']);
  gulp.watch('src/sass/**/*.scss', ['sass']);
});
