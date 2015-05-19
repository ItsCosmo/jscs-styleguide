/**
 * (C) Copyright 2014 American Express, Inc. All rights reserved.
 * The contents of this file represent American Express trade secrets and
 * are confidential. Use outside of American Express is prohibited and in
 * violation of copyright law.
 */

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
    gulp.watch(["test/**/*.js", "index.js", "templates/**/*.*", "props.json", "config.jscs.json"], ["mocha"]);
})

gulp.task("default", ["mocha", "watch"]);
