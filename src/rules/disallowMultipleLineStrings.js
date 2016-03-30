export const disallowMultipleLineStrings = () =>  {
            var message, right, wrong;

            message = "Use concatenation to span a string across multiple lines.";
            right = "var x = \"The \" +\r        \"Lazy Dog\";";
            wrong = "var x = \"The\\\r        Lazy Dog\";";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        };