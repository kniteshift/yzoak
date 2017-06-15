const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const cleanCSS = require('gulp-clean-css')

gulp.task('minify-css', () => {
    return gulp.src('build/*.css')
        .pipe(cleanCSS({}))
        .pipe(gulp.dest('build'))
})

gulp.task('optimize', ['minify-css'])