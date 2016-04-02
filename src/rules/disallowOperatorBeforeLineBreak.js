import sprintf from "sprintf"

export const disallowOperatorBeforeLineBreak = (jscs) => {
    let message, message1, right, wrong;

    if (jscs === true) {
        message = "When splitting lines, place binary and '.' operators at the beginning of a new line.";
        right = "gulp.src('src/**/*js')\r    .pipe(babel())\r    .pipe(gulp.dest('dist'));";
        wrong = "gulp.src('src/**/*js').\r    pipe(babel()).\r    pipe(gulp.dest('dist'));";
    } else {
        message = "When splitting lines, place the following operators at the beginning of a new line.";
        right = sprintf("var result = a\r    %s%sb;", jscs[0], jscs[0] === "." ? "" : " ");
        wrong = sprintf("var result = a%s%s\r    b;", jscs[0] === "." ? "" : " ", jscs[0]);
    }

    return {
        message,
        right,
        wrong,
        jscs
    }
};
