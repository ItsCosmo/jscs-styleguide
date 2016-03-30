export const disallowYodaConditions = () =>  {
            var message, right, wrong;

            message = "So-called \"Yoda conditions\" are not allowed. When doing a boolean comparison," +
                " the constant, if any, should be on the right";
            right = "if (a === 1) {\r    return;\r}";
            wrong = "if (1 === a) {\r    return;\r}";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        };