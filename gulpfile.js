/*eslint-env node*/
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const run = require('gulp-run');

gulp.task('default', ['clean','images','styles', 'parcel']);

gulp.task('clean', ()=>{
  return run('rm -rf dist').exec();
});

gulp.task('build', ['clean','images','styles', 'parcel']);

gulp.task('images', () => {
  return gulp.src('public/images/*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('styles', ()=>{
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('src'));
});

gulp.task('devsetup', ['clean','images','styles']);

gulp.task('parcel', ['styles'], () => {
  return run('parcel build public/index.html').exec();
});
