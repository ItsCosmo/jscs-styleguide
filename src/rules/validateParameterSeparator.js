export const validateParameterSeparator = (jscs) =>  {
            var message, right, wrong;

            message = "Function parameters must be separated by <code>\"" + jscs + "\"</code>. Newlines are ignored. ";

            right = "doSomething(1" + jscs + "2" + jscs + "3);\rother(1" + jscs + "\r    2" + jscs + "\r    3);";
            wrong = "doSomething(1" + jscs + " " + "2" + jscs + " " + "3) // extra space between parameters";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        };