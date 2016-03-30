export const requireMultipleVarDecl = (jscs) =>  {
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
        };