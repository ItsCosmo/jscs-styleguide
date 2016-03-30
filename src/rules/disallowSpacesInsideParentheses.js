export const disallowSpacesInsideParentheses = (jscs) =>  {
            var message, message1, right, wrong;

            message = "In an expression, do not put a space after the opening paren, or before the closing paren";
            if (jscs === true) {
                message1 = ".";
                right = "var x = (3 + 4) * 5;\rvar x = (3 * (4 + 5)) * 6;";
                wrong = "var x = ( 3 + 4);\rvar x = (3 + 4 );\rvar x = (3 + ( 4 * 5) ) / 6;"
            } else if (jscs.only) {
                if (jscs.only.indexOf("(") >= 0) {
                    message = "In an expression, do not put a space after the opening paren.";
                    right = "var x = (3 + 4) * 5;";
                    wrong = "var x = ( 3 + 4) * 5;";
                } else if (jscs.only.indexOf(")") >= 0) {
                    message = "In an expression, do not put a space before the closing paren.";
                    right = "var x = (3 + 4) * 5;";
                    wrong = "var x = (3 + 4 ) * 5;";
                }
            }

            return {
                message: message,
                message1: message1,
                right: right,
                wrong: wrong
            }
        };