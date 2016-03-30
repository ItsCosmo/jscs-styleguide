export const requireSpaceAfterBinaryOperators = (jscs) =>  {
            var message, right, wrong;

            if (jscs === true) {
                message = "A space is required after all binary operators.";
                right = "x + y;";
                wrong = "x +y;";
            } else if (jscs.length) {
                message = "A space is required after the following binary operators:";
                right = sub("x {0} y;", jscs[0]);
                wrong = sub("x {0}y;", jscs[0]);
            }

            return {
                message: message,
                right: right,
                wrong: wrong,
                jscs: jscs
            }
        };