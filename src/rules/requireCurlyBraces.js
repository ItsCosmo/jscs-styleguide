export const requireCurlyBraces = (jscs) =>  {
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
        };