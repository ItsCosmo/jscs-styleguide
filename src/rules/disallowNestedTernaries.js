import sprintf from "sprintf"

export const disallowNestedTernaries =  (jscs) => {
    let message, right, wrong;

    message = "Ternary operators may not be nested";
    if (jscs === true) {
        message += ".";
        right = "var foo = (a === b) ? 1 : 2;";
        wrong = "var foo = (a === b) ? 1 : (a === c) ? 2 : 3;";
    } else if (jscs.maxLevel && jscs.maxLevel === 1) {
        message += " more than one level deep.";
        right = "var foo = (a === b) ? 1 : (a === c) ? 2 : 3;  // one level of nesting";
        wrong = "var foo = (a === b) ? 1 : (a === c) ? (a === d) ? 2 : 3 : 4;  // two levels of nesting";
    } else if (jscs.maxLevel && jscs.maxLevel > 1) {
        message += sprintf(" more than %d level%s deep.", jscs.maxLevel, jscs.maxLevel > 1 ? "s" : "");
        right = sprintf("var foo = (a === b) ? 1 : <up to %d level%s of nesting>;", jscs.maxLevel, jscs.maxLevel > 1 ? "s" : "");
        wrong = sprintf("var foo = (a === b) ? 1 : <more than %d level%s of nesting>;", jscs.maxLevel, jscs.maxLevel > 1 ? "s" : "");
    }

    return {
        message,
        right,
        wrong
    }
};
