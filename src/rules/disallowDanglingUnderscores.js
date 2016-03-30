export const disallowDanglingUnderscores = (jscs) => {
    let message, right, wrong,
        std = ["_", "__proto__", "__filename", "__dirname", "super_"];

    message = "Identifers may not begin or end with an _underscore_ character, except for the following:";
    if (jscs.allExcept) {
        // join with standard exceptions
        for (let i = 0; i < std.length; i++) {
            if (jscs.allExcept.indexOf(std[i]) === -1) {
                jscs.allExcept.push(std[i]);
            }
        }
    } else {
        jscs = {
            allExcept: std
        };
    }

    right = "var x = 1;\rvar o = Object.__proto__;\rvar y = __dirname;";
    wrong = "var _x = 1;\rvar y_ = 1;";

    return {
        message,
        right,
        wrong,
        jscs
    }
};
