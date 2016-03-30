export const disallowNamedUnassignedFunctions = (jscs) =>  {
            var message, right, wrong;

            message = "Unassigned functions are not to be named inline.";
            right = "[].forEach(function() {});\rvar assigned = function() {};\rfunction named() {};";
            wrong = "[].forEach(function namedAndUnassigned() {});";

            return {
                message: message,
                right: right,
                wrong: wrong,
                jscs: jscs
            }
        };