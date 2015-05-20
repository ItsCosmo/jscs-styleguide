(function() {

    var sub = require("string-substitute");

    function repeat(str, n) {
        return new Array(n + 1).join(str);
    }

    function othermark(mark) {
        return mark === "'" ? '"' : "'";
    }

    module.exports = {

        disallowKeywordsOnNewLine: function(jscs) {
            var message, right, wrong;

            message = "Do not place the following keywords on a new line:";
            right = sub("} {0} {", jscs[0]);
            wrong = sub("}\r{0} {", jscs[0]);

            return {
                message: message,
                right: right,
                wrong: wrong,
                jscs: jscs
            }
        },

        disallowMixedSpacesAndTabs: function(jscs) {
            var message, right, wrong;

            if (jscs === "smart") {
                message = "If a line in source code contains both tab (\\t) and spaces, the tabs must preceed the spaces.";
                right = "      x = 1;  // \\t\r      y = 2; // \\s\\s\\s\\s\r      z = 3; // \\t\\s\\s";
                wrong = "      z = 3; // \\s\\s\\t";
            } else {
                message = "Lines may not contain a mixture of spaces and tab (\\t) characacters. ";
                right = "   x = 1; // \\t\r   y = 2; // \\s\\s\\s\\s";
                wrong = "     z = 3; // \\t\\s";
            }
            return {
                message: message,
                right: right,
                wrong: wrong
            }
        },

        disallowMultipleLineStrings: function() {
            var message, right, wrong;

            message = "Use concatenation to span a string across multiple lines.";
            right = "var x = \"The \" +\r        \"Lazy Dog\";";
            wrong = "var x = \"The\\\r        Lazy Dog\";";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        },

        disallowMultipleSpaces: function() {
            var message, right, wrong;

            message = "Only one space is allowed between identifiers, keywords, or any other tokens.";
            right = "var x = 5;";
            wrong = "var  x = 5;\rvar x  = 5;\rvar x =  5;";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        },

        disallowSpaceAfterObjectKeys: function(jscs) {
            var message, message1, right, wrong;

            message = "Don't put spaces between an object key and the following colon (:)";
            if (jscs == true) {
                right = "var x = {a: 1};\rvar y = {\r    a: 1\r};";
                wrong = "var x = {a : 1};\rvar y = {\r    a : 1\r};";
            } else if (jscs === "ignoreSingleLine") {
                message1 = ", unless the object takes up only a single line.";
                right = "var x = {a : 1};\rvar y = {\r    a: 1\r};";
                wrong = "var y = {\r    a : 1\r};";
            } else if (jscs === "ignoreMultiLine") {
                message1 = ", unless the object takes up multiple lines.";
                right = "var x = {a: 1};\rvar y = {\r    a : 1\r};";
                wrong = "var x = {a : 1};";
            }

            return {
                message: message,
                message1: message1,
                right: right,
                wrong: wrong
            }
        },

        disallowSpaceAfterPrefixUnaryOperators: function(jscs) {
            var message, right, wrong;

            message = "Do not put spaces after the following unary operators:";
            right = sub("var x = {0}y;", jscs[0]);
            wrong = sub("var x = {0} y;", jscs[0]);

            if (jscs === true) {
                message = "Do not put any spaces after a unary prefix operator.";
                right = "var x = ++y;";
                wrong = "var x = ++ y;";
            }

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        },

        disallowSpacesInCallExpression: function() {
            var message, right, wrong;

            message = "Do not put spaces before () in a function call.";
            right = "var x = foo();";
            wrong = "var x = foo ();";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        },

        /**
         *
         * @param {{allowComments, allowUrlComments, allowRegex}} jscs
         * @returns {{message: (string|*), message1: *, message2: *}}
         */
        maximumLineLength: function(jscs) {
            var message,
                message1,
                message2;

            if (typeof jscs === "number") {
                jscs = {value: jscs, tabSize: 0};
            }

            message = "Lines may have a maximum of " + jscs.value + " characters. Tabs (\\t) are counted as " + jscs.tabSize + " characters.";
            if (jscs.allowComments) {
                message1 = " Comments are allowed to break this rule.";
            }
            if (jscs.allowUrlComments) {
                message1 = " Comments with long Urls are allowed to break this rule.";
            }
            if (jscs.allowRegex) {
                message2 = " Regular expression literals are allowed to break this rule.";
            }

            return {
                message: message,
                message1: message1,
                message2: message2
            }
        },

        requireCamelCaseOrUpperCaseIdentifiers: function() {
            var message, right, wrong;

            message = "Identifiers must be camelCased or UPPERCASE_WITH_UNDERSCORES";
            right = "var camelCase = 0;\rvar CamelCase = 1;\rvar _camelWithUnderscore = 2;\rvar UPPER_CASE = 3;";
            wrong = "var lower_case = 0;\rvar Mixed_case = 2;\rvar mixed_Case = 3;";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        },

        requireCapitalizedConstructors: function() {
            var message, right, wrong;

            message = " All constructors except for <code>this</code> must be capitalized.";
            right = "var x = new A();\rvar y = new this();";
            wrong = "var x = new a();";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        },

        requireCommaBeforeLineBreak: function() {
            var message, right, wrong;

            message = "When a list is split over multiple lines, the comma separator must come at the end of a line.";
            right = "var x = {\r    one: 1,\r    two: 2,\r    three: 3\r};";
            wrong = "var x = {\r    one: 1\r    ,two: 2\r    ,three: 3\r};";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        },

        requireCurlyBraces: function(jscs) {
            var message, right, wrong;

            message = "Curly braces are required after the following statements:";
            right = "if (condition) {\r    someThing();\r}";
            wrong = "if (condition) someThing();";

            if (jscs === true) {
                message = "Curly braces are required for all block statements.";
            }

            return {
                message: message,
                right: right,
                wrong: wrong,
                jscs: jscs
            }
        },

        requireDollarBeforejQueryAssignment: function(jscs) {
            var message, right, wrong;

            message = "Use $ to begin a variable or object property name which is a jQuery assignment.";
            right = "var $x = $(\".foo\");\rvar y = {\r    $x = $(\".foo\")\r};";
            wrong = "var y = $(\".foo\");\rvar y = {\r    x = $(\".foo\")\r};";

            if (jscs === "ignoreProperties") {
                message = "Use $ to begin a variable name which is a jQuery assignment. This does not apply to object properties.";
                right = "var $x = $(\".foo\");\rvar y = {\r    x = $(\".foo\")\r};";
                wrong = "var y = $(\".foo\");"
            }

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        },

        requireMultipleVarDecl: function(jscs) {
            var message, right, wrong;

            message = "Multiple consecutive <code>var</code> declarations must be declared as a comma-separated list with a single <code>var</code>. ";
            right = "var x = 1, y = 2;\rsomeOtherCode();\rvar a = 3,\r    b = 4;";
            wrong = "var x = 1;\rvar y = 2;\rsomeOtherCode();";

            if (jscs === "onevar") {
                message = "Only one <code>var</code> statement is allowed per function scope. ";
                right = "var x = 1, y = 2,\r    a,\r    b;\rsomeOtherCode();\ra = 3;\rb = 4;";
                wrong = "var x = 1, y = 2;\rsomeOtherCode();\rvar a = 3,\r    b = 4;";
            }

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        },

        requireOperatorBeforeLineBreak: function() {
            var message, right, wrong;

            message = "When expressions involving binary operators are split between lines, the operator must appear before the line break.";
            right = "var x = y ?\r        1 : 2;";
            wrong = "var x = y\r        ? 1 : 2;";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        },

        requireSpaceAfterBinaryOperators: function(jscs) {
            var message, right, wrong;

            if (jscs === true) {
                message = "A space is required after all binary operators.";
                right = "x + y;";
                wrong = "x +y;";
            } else if (jscs.length) {
                message = "A space is required after the following binary operators:";
                right = sub("x {0} y;", jscs[0]);
                wrong = sub("x {0}y;", jscs[0]);
            }

            return {
                message: message,
                right: right,
                wrong: wrong,
                jscs: jscs
            }
        },

        requireSpaceAfterKeywords: function(jscs) {
            var message, right, wrong;

            if (jscs === true) {
                jscs = ["do", "for", "if", "else", "switch", "case", "try", "catch",
                    "void", "while", "with", "return", "typeof", "function"];
            }

            message = "The following keywords must be followed by a space:";

            if (jscs.indexOf("if") >= 0) {
                right = "if (x) {\r    x++;\r}";
                wrong = "if(x) {\r    x++;\r}";
            } else if (jscs.indexOf("return") >= 0) {
                right = "return (x);";
                wrong = "return(x);";
            }

            return {
                message: message,
                right: right,
                wrong: wrong,
                jscs: jscs
            }
        },

        requireSpaceBeforeBinaryOperators: function(jscs) {
            var message, right, wrong;

            message = "Do not allow 'sticky' binary operators. The following operators must be preceeded by a space:";
            right = "x != y;";
            wrong = "x!= y;";

            return {
                message: message,
                right: right,
                wrong: wrong,
                jscs: jscs
            }
        },

        requireSpaceBeforeBlockStatements: function(jscs) {
            var message, right, wrong, spaces = jscs === true ? 1 : jscs;

            message = sub("{0} space{1} {2} required before the opening brace of a block statement.",
                spaces === 1 ? "A" : "At least " + spaces,
                spaces === 1 ? "" : "s",
                spaces === 1 ? "is" : "are");

            right = sub("if (condition){0}{\r    foo();\r}", repeat(" ", spaces));
            wrong = sub("if (condition){0}{\r    foo();\r}", repeat(" ", spaces - 1));

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        },

        requireSpaceBeforeKeywords: function(jscs) {
            var message, right, wrong;

            if (jscs === true) {
                message = "All keywords must be preceeded by a space.";
                right = "} else {\r    x++;\r}";
                wrong = "}else {\r    x++;\r}";
            } else {
                message = "The following keywords must be preceeded by a space:";
                right = sub("} {0} {", jscs[0]);
                wrong = sub("}{0} {", jscs[0]);
            }

            return {
                message: message,
                right: right,
                wrong: wrong,
                jscs: jscs
            }
        },

        requireSpacesInConditionalExpression: function(jscs) {
            var message, right, wrong;

            if (jscs === true) {
                jscs = {afterTest: true, beforeConsequent: true, afterConsequent: true, beforeAlternate: true};
            }

            message = "In the conditional (ternary) operator, spaces are to be included as shown.";

            right = sub("var x = a{0}?{1}b{2}:{3}c;",
                jscs.afterTest ? " " : "",
                jscs.beforeConsequent ? " " : "",
                jscs.afterConsequent ? " " : "",
                jscs.beforeAlternate ? " " : "");

            wrong = "var x = a?b:c;";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        },

        requireSpacesInForStatement: function() {
            var message, right, wrong;

            message = "A space is required between the clauses of a <code>for</code> statement (after the semicolons).";
            right = "for(var i = 0; i < len; i++) {\r    x++;\r}";
            wrong = "for(var i = 0;i < len;i++) {\r    x++;\r}";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        },

        /**
         *
         * @param {{includeEmptyLines}} jscs
         * @returns {{message: *, message1: *, right: *, wrong: *}}
         */
        validateIndentation: function(jscs) {
            var message, message1, right, wrong;

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
                message: message,
                message1: message1,
                right: right,
                wrong: wrong
            }
        },

        validateParameterSeparator: function(jscs) {
            var message, right, wrong;

            message = "Function parameters must be separated by <code>\"" + jscs + "\"</code>. Newlines are ignored. ";

            right = "doSomething(1" + jscs + "2" + jscs + "3);\rother(1" + jscs + "\r    2" + jscs + "\r    3);";
            wrong = "doSomething(1" + jscs + " " + "2" + jscs + " " + "3) // extra space between parameters";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        },

        validateQuoteMarks: function(jscs) {
            var message, message1, right, right1, wrong, example;

            if (typeof jscs === "string" || jscs === true) {
                jscs = {mark: jscs};
            }

            right = sub("var s = {0}A String Value{0};", jscs.mark);
            right1 = sub("\rvar s = {1}A String containing {0}quote mark{0}{1};", jscs.mark, othermark(jscs.mark));
            wrong = sub("var s = {0}A String Value{0};", othermark(jscs.mark));

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
                message: message,
                message1: message1,
                right: right,
                right1: right1,
                wrong: wrong,
                example: example
            }
        }

    }
}());

