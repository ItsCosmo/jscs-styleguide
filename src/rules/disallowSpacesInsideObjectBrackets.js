export const disallowSpacesInsideObjectBrackets = (jscs) =>  {
            var message, message1, right, wrong;

            message = "In an object literal, do not put a space after the opening curly brace, or before the closing curly brace";
            if (jscs === "all" || jscs === true) {
                message1 = ".";
                right = "var x = {a: 1};\rvar x = {a: {b: 2}};";
                wrong = "var x = { a: 1};\rvar x = {a: 1 };\rvar x = { a: {b: 1 }};"
            } else if (jscs === "nested") {
                message1 = ", except when there are multiple closing braces in a row.";
                right = "var x = {a: 1};\rvar x = {a: {b: 2} };";
                wrong = "var x = { a: 1};\rvar x = {a: 1 };\rvar x = { a: {b: 1 }};"
            } else if (jscs.allExcept) {
                if (jscs.allExcept.indexOf("}") >= 0) {
                    message = "In an object literal, do not put a space after the opening curly brace.";
                    right = "var x = {a: 1};";
                    wrong = "var x = { a: 1};";
                } else if (jscs.allExcept.indexOf("{") >= 0) {
                    message = "In an object literal, do not put a space before the closing curly brace.";
                    right = "var x = {a: 1};";
                    wrong = "var x =  {a: 1 };";
                }
                // don't want to show a list of exceptions
                //jscs.ignoreException = true;
            }

            return {
                message: message,
                message1: message1,
                right: right,
                wrong: wrong
            }
        };