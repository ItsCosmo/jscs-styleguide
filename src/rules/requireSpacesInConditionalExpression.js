import sprintf from "sprintf"

export const requireSpacesInConditionalExpression = (jscs) => {
    let message, right, wrong;

    if (jscs === true) {
        jscs = {afterTest: true, beforeConsequent: true, afterConsequent: true, beforeAlternate: true};
    }

    message = "In the conditional (ternary) operator, spaces are to be included as shown.";

    right = sprintf("var x = a%s?%sb%s:%sc;",
        jscs.afterTest ? " " : "",
        jscs.beforeConsequent ? " " : "",
        jscs.afterConsequent ? " " : "",
        jscs.beforeAlternate ? " " : "");

    wrong = "var x = a?b:c;";

    return {
        message,
        right,
        wrong
    }
};