export const disallowSpacesInAnonymousFunctionExpression = (jscs) =>  {
            var message, right, wrong;

            if (jscs === true || (jscs.beforeOpeningRoundBrace && jscs.beforeOpeningCurlyBrace)) {
                message = "There must not be a space before either the opening paren or opening curly brace in a <code>function</code> expression.";
                right = "var x = function(){};";
                wrong = "var x = function (){};\rvar x = function() {};";
            } else if (jscs.beforeOpeningRoundBrace) {
                message = "There must not be a space before the opening paren in a <code>function</code> expression.";
                right = "var x = function() {};";
                wrong = "var x = function () {};";
            } else if (jscs.beforeOpeningCurlyBrace) {
                message = "There must not be a space before the opening curly brace in a <code>function</code> expression.";
                right = "var x = function (){};";
                wrong = "var x = function () {};";
            }

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        };