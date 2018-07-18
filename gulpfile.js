/*eslint-env node*/
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const run = require('gulp-run');
const del = require('del');

gulp.task('default', ['build']);

gulp.task('clean', () => {
  // return run('rm -rf dist').exec();
  return del(['dist']);
});

gulp.task('build', ['images','styles', 'base', 'parcel']);

gulp.task('images', () => {
  return gulp.src('public/images/*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('styles', () => {
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('src'));
});

gulp.task('base', () => {
  return gulp.src(['public/*.json', 'public/*.html', 'public/*.svg'])
    .pipe(gulp.dest('dist'));
});

gulp.task('devsetup', ['images','styles']);

gulp.task('parcel', ['styles'], () => {
  // return run('parcel build public/index.html --public-url ./profile --out-dir ./dist/profile').exec();
  return run('parcel build src/index.js --public-url /profile --out-dir ./dist/profile').exec();
});
