var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var concat = require("gulp-concat");
var jshint = require("gulp-jshint"); //在npm中会出现问题。所以使用npm install --save-dev jshint gulp-jshint这个命令行
var clean = require('gulp-clean');
var imagemin = require("gulp-imagemin");
var uglify = require("gulp-uglify");
var htmlmin = require("gulp-htmlmin");
// var browse = require("browser-sync");
// var sequence = require("run-sequence");

gulp.task("css", function () {
    return gulp.src("./src/image/*.css")
        .pipe(concat("index.css"))
        .pipe(cssnano())
        .pipe(gulp.dest("./src/dest"))
})
gulp.task("js", function () {
    gulp.src("./src/app/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat("index.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./src/dest/"))
})
gulp.task("html", function () {
    return gulp.src("./*.html")
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        // .pipe(htmlmin("index.html"))
        .pipe(gulp.dest("./src/dest"))
})
gulp.task("default", ["js", "css", "html"]);
// gulp.task("default", [ "js","css"]);