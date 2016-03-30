export const requireSpaceBetweenArguments = () =>  {
            var message, right, wrong;

            message = "When calling a function, there must be a space after each argument separator.";
            right = "foo(a, b);";
            wrong = "foo(a,b);";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        };