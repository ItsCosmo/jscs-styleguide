import sprintf from "sprintf"

export const disallowCurlyBraces = (jscs) => {
    let message, right, wrong;

    if (jscs === true) {
        jscs = ["if", "else", "while", "for", "do", "with"];
    }

    message = sprintf("Do not put a curly brace after the following statement%s:", jscs.length === 1 ? "" : "s");
    if (jscs.indexOf("if") >= 0) {
        right = "if (condition) x++;";
        wrong = "if (condition) {\r    x++;\r}"
    } else if (jscs.indexOf("for") >= 0) {
        right = "for (i = 0; i < len; i++) x++;";
        wrong = "for (i = 0; i < len; i++) {\r    x++;\r}";
    }

    return {
        message,
        right,
        wrong,
        jscs
    }
};
