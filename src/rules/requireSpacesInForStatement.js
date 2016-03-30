export const requireSpacesInForStatement = () =>  {
            var message, right, wrong;

            message = "A space is required between the clauses of a <code>for</code> statement (after the semicolons).";
            right = "for(var i = 0; i < len; i++) {\r    x++;\r}";
            wrong = "for(var i = 0;i < len;i++) {\r    x++;\r}";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        };