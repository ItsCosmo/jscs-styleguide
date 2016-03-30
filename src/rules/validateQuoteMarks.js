import sprintf from "sprintf"

const othermark = (mark) => {
    return mark === "'" ? '"' : "'";
};

export const validateQuoteMarks = (jscs) => {//what is it
    let message, message1, right, right1, wrong, example;

    if (typeof jscs === "string" || jscs === true) {
        jscs = {mark: jscs};
    }

    right = sprintf("var s = %sA String Value%s;", jscs.mark, jscs.mark);
    right1 = sprintf("\rvar s = %sA String containing %squote mark%s%s;", othermark(jscs.mark), jscs.mark, jscs.mark, othermark(jscs.mark));
    wrong = sprintf("var s = %sA String Value%s;", othermark(jscs.mark), othermark(jscs.mark));

    if (jscs.mark === '"') {
        message = "Strings must be quoted with double-quotes.";
    } else if (jscs.mark === "'") {
        message = "Strings must be quoted with single-quote (apostrophe).";
    } else if (jscs.mark === true) {
        message = "Strings must be quoted with the quote first encountered in the source code.";
        example = "var s = \"First quote mark is double\";";
        right = "var s = \"A String Value\";";
        right1 = "\rvar s = 'A String containing \"quote mark\"';";
        wrong = "var s = 'A String Value';";
    }
    if (jscs.escape) {
        message1 = " The other quote mark may be used only to avoid having to escape."
    } else {
        right1 = "";
    }

    return {
        message,
        message1,
        right,
        right1,
        wrong,
        example
    }
};