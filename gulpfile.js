const gulp = require('gulp');
const babel = require('gulp-babel');

function js(cb) {
    gulp.src('src/*.js')
        .pipe(babel({
            presets: ["@babel/preset-react"]
        }))
        .pipe(gulp.dest('dist'))
    cb();
}

function watch(cb) {
    gulp.watch('src/*.js', { ignoreInitial: false }, js);
    cb();
}

exports.js = js;
exports.default = watch;