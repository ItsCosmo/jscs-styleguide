export const requireSpaceBeforeBinaryOperators = (jscs) =>  {
            var message, right, wrong;

            message = "Do not allow 'sticky' binary operators. The following operators must be preceeded by a space:";
            right = "x != y;";
            wrong = "x!= y;";

            return {
                message: message,
                right: right,
                wrong: wrong,
                jscs: jscs
            }
        };