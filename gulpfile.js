var gulp = require("gulp"),
    gutil = require("gulp-util"),
    mocha = require("gulp-mocha");

/*------------------------------------------
 * TASKS
 *-----------------------------------------*/
gulp.task("mocha", function () {
    gulp.src(["test/**/*.js"], {read: false})
        .pipe(mocha({reporter: "spec"}))
        .on("error", gutil.log);
});

gulp.task("watch", function() {
    gulp.watch(["test/**/*.js", "index.js", "templates/**/*.*", "rules.js", "config.jscs.json", "default.css"], ["mocha"]);
})

gulp.task("default", ["mocha", "watch"]);
