const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')

//function to compile sass into css
function buildStyles(){
    // specifying source and destination of output
    return src('scss/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({content: ['*.html']}))
        .pipe(dest('css'))
}

// function to actively watch sass file
function watchTask() {
    watch(['scss/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)