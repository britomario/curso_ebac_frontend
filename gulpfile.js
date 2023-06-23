const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function compileSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles/'))
}

function compressJavascript(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts/'))
}

exports.default = function(){
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compileSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(compressJavascript));
}