import sprintf from "sprintf"

export const disallowIdentifierNames = (jscs) => {
    var message, right, wrong;

    message = "The following identifier names are not allowed:";
    right = "var good = 1;\rvar object[\"fine\"] = 2;";
    wrong = sprintf("var %s = 1;", jscs[0]);

    return {
        message,
        right,
        wrong,
        jscs
    }
};