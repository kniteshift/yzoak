const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const cleanCSS = require('gulp-clean-css')
const htmlmin = require('gulp-htmlmin')

gulp.task('minify-css', () => {
    return gulp.src('build/*.css')
        .pipe(cleanCSS({}))
        .pipe(gulp.dest('build'))
})

gulp.task('minify-html', () => {
    return gulp.src('build/*.html')
        .pipe(htmlmin({collapseWhitespace : true}))
        .pipe(gulp.dest('build'))
})

gulp.task('optimize', ['minify-css'])