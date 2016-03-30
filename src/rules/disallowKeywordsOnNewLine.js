import sprintf from "sprintf"

export const disallowKeywordsOnNewLine = (jscs) => {
    let message, right, wrong;

    message = "Do not place the following keywords on a new line:";
    right = sprintf("} %s {", jscs[0]);
    wrong = sprintf("}\r%s {", jscs[0]);

    return {
        message,
        right,
        wrong,
        jscs
    }
};