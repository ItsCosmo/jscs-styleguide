export const disallowFunctionDeclarations = (jscs) =>  {
            var message, right, wrong;

            message = "Function declarations are not allowed.";
            right = "var nop = function() {};";
            wrong = "function nop() {};";

            return {
                message: message,
                right: right,
                wrong: wrong,
                jscs: jscs
            }
        };