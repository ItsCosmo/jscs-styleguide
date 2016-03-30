import sprintf from "sprintf"
import { repeat } from "../util"

export const requireSpaceBeforeBlockStatements = (jscs) => {
    let message, right, wrong, spaces = jscs === true ? 1 : jscs;

    message = sprintf("%s space%s %s required before the opening brace of a block statement.",
        spaces === 1 ? "A" : "At least " + spaces,
        spaces === 1 ? "" : "s",
        spaces === 1 ? "is" : "are");

    right = sprintf("if (condition)%s{\r    foo();\r}", repeat(" ", spaces));
    wrong = sprintf("if (condition)%s{\r    foo();\r}", repeat(" ", spaces - 1));

    return {
        message,
        right,
        wrong
    }
};