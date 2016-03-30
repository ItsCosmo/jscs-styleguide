export const disallowTrailingComma = () =>  {
            var message, right, wrong;

            message = "Do not put a comma after the last element in an array or object literal.";
            right = "var x = {\r    a: 1,\r    b: 2\r};\rvar x = [\r    \"A\",\r    \"B\",\r    \"C\"\r];";
            wrong = "var x = {\r    a: 1,\r    b: 2,\r};\rvar x = [\r    \"A\",\r    \"B\",\r    \"C\",\r];";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        };