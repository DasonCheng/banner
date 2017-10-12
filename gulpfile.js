const gulp = require('gulp')
const pug = require('gulp-pug')
const webpack = require('webpack-stream')
const livereload = require('gulp-livereload')
const webserver = require('gulp-webserver')
const plumber = require('gulp-plumber')
const paths = {
  src: ['static/**/*.*', './dist/static'],
  pug: ['app/views/*.pug', './dist'],
  entry: ['app/*.js', './dist/static'],
}

gulp.task('src', () => {
  return gulp.src(paths.src[0])
    .pipe(plumber())
    .pipe(gulp.dest(paths.src[1]))
})

gulp.task('pug', () => {
  return gulp.src(paths.pug[0])
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(paths.pug[1]))
    .on('end', () => {})
})

gulp.task('webpack', () => {
  return gulp.src(paths.entry[0])
    .pipe(plumber())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(paths.entry[1]))
})

gulp.task('livereload', () => {
  return gulp.src('./dist')
    .pipe(webserver({
      livereload: true,
      open: true
    }))
})

gulp.task('watch', () => {
  gulp.watch('static/**/*.*', ['src'])
  gulp.watch('app/views/**/*.pug', ['pug'])
  gulp.watch('app/script/*.*', ['webpack'])
  gulp.watch('app/style/*.*', ['webpack'])
  gulp.watch('app/*.js', ['webpack'])
})

gulp.task('default', ['src', 'pug', 'livereload', 'webpack', 'watch'])
