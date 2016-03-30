export const disallowNewlineBeforeBlockStatements = () =>  {
            var message, right, wrong;

            message = "Do not put a line feed before the opening curly brace of block statememts.";
            right = "if (condition) {\r    x++;\r}";
            wrong = "if (condition)\r{\r    x++;\r}";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        };