import sprintf from "sprintf"

export const disallowKeywordsInComments = (jscs) => {
    let message, right, wrong;

    if (jscs === true) {
        message = "Do not put keywords TODO or FIXME inside a comment.";
        wrong = "// Don't put TODO in a comment\r/* Or FIXME, either\r*/";
    } else {
        message = "Do not put the following keywords inside a comment:";
        wrong = sprintf("//Don't put %s inside a comment", jscs[0]);
    }

    right = "// An acceptable comment\r/* Another acceptable comment\r*/";

    return {
        message,
        right,
        wrong,
        jscs
    }
};