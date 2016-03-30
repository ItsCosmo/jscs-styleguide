import sprintf from "sprintf"

export const disallowSpaceAfterPrefixUnaryOperators = (jscs) => {
    let message, right, wrong;

    message = "Do not put spaces after the following unary operators:";
    right = sprintf("var x = %sy;", jscs[0]);
    wrong = sprintf("var x = %s y;", jscs[0]);

    if (jscs === true) {
        message = "Do not put any spaces after a unary prefix operator.";
        right = "var x = ++y;";
        wrong = "var x = ++ y;";
    }

    return {
        message,
        right,
        wrong,
        jscs
    }
};