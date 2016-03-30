export const disallowCommaBeforeLineBreak = (jscs) => {
    let message, right, wrong,
        functionException = (jscs.allExcept && jscs.allExcept.indexOf("function") !== -1);

    message = "In a list, don't put a comma at the end of a line";
    if (functionException) {
        message += ", unless one of the values in the list is a function expression";
        jscs.ignoreException = true;
    }
    message += ".";
    right = "var x = {\r    a: 1\r    , b: 2\r};\rvar y = {a: 1, b: 2};";
    if (functionException) {
        right += "\rvar x = {\r    a: 1,\r    b: function() {}\r};"
    }
    wrong = "var x = {\r    a: 1,\r    b: 2\r};";

    return {
        message,
        right,
        wrong,
        jscs
    }
};