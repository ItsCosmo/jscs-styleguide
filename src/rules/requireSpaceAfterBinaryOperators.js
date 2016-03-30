import sprintf from "sprintf"

export const requireSpaceAfterBinaryOperators = (jscs) => {
    let message, right, wrong;

    if (jscs === true) {
        message = "A space is required after all binary operators.";
        right = "x + y;";
        wrong = "x +y;";
    } else if (jscs.length) {
        message = "A space is required after the following binary operators:";
        right = sprintf("x %s y;", jscs[0]);
        wrong = sprintf("x %sy;", jscs[0]);
    }

    return {
        message: message,
        right: right,
        wrong: wrong,
        jscs: jscs
    }
};