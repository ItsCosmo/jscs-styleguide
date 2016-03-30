export const disallowMultipleLineBreaks = () =>  {
            var message, right, wrong;

            message = "Do not put multiple empty lines in a row.";
            right = "var x = 1;\r\rx++; // preceeding line is empty";
            wrong = "var x = 1;\r\r\rx++; // preceeding two lines are empty";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        };