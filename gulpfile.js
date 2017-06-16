const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const paths = {
  sass: ['src/sass/*.scss', 'dist'],
  babel: ['src/babel/*.js', 'dist'],
};


gulp.task('sass', () => {
  return gulp.src(paths.sass[0])
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(postcss([autoprefixer({
      browsers: ['last 2 versions']
    })]))
    .pipe(gulp.dest(paths.sass[1]));
});

gulp.task('babel', () => {
  return gulp.src(paths.babel[0])
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(concat('swiper-banner.js'))
    .pipe(gulp.dest(paths.babel[1]));
});


gulp.task('watch', () => {
  gulp.watch(paths.sass[0], ['sass']);
  gulp.watch(paths.babel[0], ['babel']);
});

gulp.task('default', ['watch']);
