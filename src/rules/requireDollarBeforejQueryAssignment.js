export const requireDollarBeforejQueryAssignment = (jscs) =>  {
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
        };