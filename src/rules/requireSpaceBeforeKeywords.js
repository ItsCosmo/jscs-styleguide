import sprintf from "sprintf"

export const requireSpaceBeforeKeywords = (jscs) => {
    let message, right, wrong;

    if (jscs === true) {
        message = "All keywords must be preceeded by a space.";
        right = "} else {\r    x++;\r}";
        wrong = "}else {\r    x++;\r}";
    } else {
        message = "The following keywords must be preceeded by a space:";
        right = sprintf("} %s {", jscs[0]);
        wrong = sprintf("}%s {", jscs[0]);
    }

    return {
        message,
        right,
        wrong,
        jscs
    }
};