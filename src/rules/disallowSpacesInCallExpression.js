export const disallowSpacesInCallExpression = () =>  {
            var message, right, wrong;

            message = "Do not put spaces before () in a function call.";
            right = "var x = foo();";
            wrong = "var x = foo ();";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        };