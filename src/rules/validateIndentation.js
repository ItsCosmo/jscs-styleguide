import {repeat} from "../util"

export const validateIndentation = (jscs) => {
    let message, message1, right, wrong;

    if (typeof jscs !== "object") {
        jscs = {value: jscs};
    }

    if (typeof jscs.value === "number") {
        message = "Block statements must be indented with " + jscs.value + " space characters.";
        right = "if (a) {\r" + repeat(" ", jscs.value) + "b = c; \\\\ line is indented with " + jscs.value + " spaces\r}";
        wrong = "if (a) {\r" + repeat(" ", jscs.value + 2) + "b = c; \\\\ line is indented with " + (jscs.value + 2) + " spaces\r}";
    } else if (jscs.value === "\t") {
        message = "Block statements must be indented with a tab (\\t) character. ";
        right = "if (a) {\r    b = c; \\\\ line is indented with \\t\r}";
        wrong = "if (a) {\r    b = c; \\\\ line is indented with spaces\r}";
    }

    if (jscs.includeEmptyLines) {
        message1 = " Empty lines must also be indented in the same manner.";
    }

    return {
        message,
        message1,
        right,
        wrong
    }
};