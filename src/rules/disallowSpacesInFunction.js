export const disallowSpacesInFunction = (jscs) =>  {
            var message, right, wrong;

            if (jscs.beforeOpeningRoundBrace && jscs.beforeOpeningCurlyBrace) {
                message = "Do not put a space before either the opening paren or opening curly brace in a <code>function</code> expression or definition.";
                right = "function a(){};\rvar x = function() {};\rvar x = function a(){};";
                wrong = "function a (){};\rfunction a() {};";
            } else if (jscs.beforeOpeningRoundBrace) {
                message = "Do not put a space before the opening paren in a <code>function</code> expression or definition.";
                right = "function a(){};\rfunction a() {};\rvar x = function() {};\rvar x = function a(){};";
                wrong = "function a (){};\rfunction a () {};";
            } else if (jscs.beforeOpeningCurlyBrace) {
                message = "Do not put a space before the opening curly brace in a <code>function</code> expression or definition.";
                right = "function a(){};\rfunction a (){};\rvar x = function(){};\rvar x = function a(){};";
                wrong = "function a() {};\rfunction a () {};";
            }

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        };