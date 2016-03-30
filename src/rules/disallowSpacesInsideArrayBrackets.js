export const disallowSpacesInsideArrayBrackets = (jscs) =>  {
            var message, message1, right, wrong;

            message = "In an Array, do not put a space after the opening square bracket, or before the closing square bracket";
            if (jscs === "all" || jscs === true) {
                message1 = ".";
                right = "var x = [1, 2];\rvar x = [1, [2, 3]];";
                wrong = "var x = [ 1, 2];\rvar x = [1, 2 ];\rvar x = [1, [ 2, 3 ] ];"
            } else if (jscs === "nested") {
                message1 = ", except when there are multiple closing brackets in a row.";
                right = "var x = [1, 2];\rvar x = [1, [2, 3] ];";
                wrong = "var x = [1, 2 ];\rvar x = [ 1, 2];\rvar x = [1, [2, 3 ]];"
            } else if (jscs.allExcept) {
                if (jscs.allExcept.indexOf("]") >= 0) {
                    message = "In an Array, do not put a space after the opening square bracket.";
                    right = "var x = [1, 2];";
                    wrong = "var x = [ 1, 2];";
                } else if (jscs.allExcept.indexOf("{") >= 0) {
                    message = "In an Array, do not put a space before the closing square bracket.";
                    right = "var x = [1, 2];";
                    wrong = "var x = [1, 2 ];";
                }
            }

            return {
                message: message,
                message1: message1,
                right: right,
                wrong: wrong
            }
        };