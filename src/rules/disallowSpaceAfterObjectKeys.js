export const disallowSpaceAfterObjectKeys = (jscs) =>  {
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
        };