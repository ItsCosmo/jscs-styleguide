export const requireSpaceAfterKeywords = (jscs) =>  {
            var message, right, wrong;

            if (jscs === true) {
                jscs = ["do", "for", "if", "else", "switch", "case", "try", "catch",
                    "void", "while", "with", "return", "typeof", "function"];
            }

            message = "The following keywords must be followed by a space:";

            if (jscs.indexOf("if") >= 0) {
                right = "if (x) {\r    x++;\r}";
                wrong = "if(x) {\r    x++;\r}";
            } else if (jscs.indexOf("return") >= 0) {
                right = "return (x);";
                wrong = "return(x);";
            }

            return {
                message: message,
                right: right,
                wrong: wrong,
                jscs: jscs
            }
        };