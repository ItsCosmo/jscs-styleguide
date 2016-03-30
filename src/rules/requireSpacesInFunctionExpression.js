export const requireSpacesInFunctionExpression = (jscs) =>  {
            var message, right, wrong;

            if (jscs === true || (jscs.beforeOpeningRoundBrace && jscs.beforeOpeningCurlyBrace)) {
                message = "There must be a space before both the opening paren and the opening curly brace in a <code>function</code> expression.";
                right = "var x = function () {};";
                wrong = "var x = function() {};\rvar x = function (){};\rvar x = function(){};";
            } else if (jscs.beforeOpeningRoundBrace) {
                message = "There must be a space before the opening paren in a <code>function</code> expression.";
                right = "var x = function (){};";
                wrong = "var x = function(){};";
            } else if (jscs.beforeOpeningCurlyBrace) {
                message = "There must be a space before the opening curly brace in a <code>function</code> expression.";
                right = "var x = function() {};";
                wrong = "var x = funciton(){};";
            }

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        };