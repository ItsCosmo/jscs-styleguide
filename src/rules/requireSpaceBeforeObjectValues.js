export const requireSpaceBeforeObjectValues = () =>  {
            var message, right, wrong;

            message = "In an object literal, there must be a space after the key.";
            right = "var x = {a: 1};";
            wrong = "var x = {a:1};";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        };