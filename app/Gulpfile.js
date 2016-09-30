const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const using = require('gulp-using')

gulp.task('default', () =>
    gulp.src(['/src/*', '/src/**/*','!/src/dist_webp/**','!/src/dist/**'])
        .pipe(using())
        .pipe(imagemin())
        .pipe(gulp.dest('/src/dist/'))
        .pipe(webp())
        .pipe(gulp.dest('/src/dist_webp/'))
);