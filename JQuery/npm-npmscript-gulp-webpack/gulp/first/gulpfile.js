var gulp = require("gulp");
var concat = require("gulp-concat");
var cssnano = require("gulp-cssnano");

console.log("gg");
// gulp src dest watch task  //gulp 的四个方法
// gulp.task("css",["./src/css/*.css"])

gulp.task("css", function () {

    gulp.src(['./src/css/a.css', './src/css/b.css'])
        .pipe(concat("index-merge.css"))
        .pipe(cssnano())
        .pipe(gulp.dest("./dist"))
})
//使用gulp，将css改为default
// gulp.task("default", function () {
//     gulp.src(['./src/css/a.css', './src/css/b.css'])
//         .pipe(concat("index-merge.css"))
//         .pipe(cssnano())
//         .pipe(gulp.dest("./dist"))
// })
//或是再加一个命令，如下；
//gulp.task("default",["css"])
gulp.task("js", function () {
    gulp.src("./src/**/*.css")
        .pipe(concat("komo.css"))
        .pipe(cssnano())
        .pipe(gulp.dest("./dist"));
})

// gulp.task("default");