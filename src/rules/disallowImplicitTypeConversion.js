export const disallowImplicitTypeConversion = (jscs) =>  {
            var message, right, wrong;

            message = "Implicit type conversion is not allowed for the following types:";
            right = "var x = Boolean(y);\rvar x = Number(y);\rvar x = String(y);\rvar x = s.indexOf(\".\") !== -1;";
            wrong = "";
            if (jscs.indexOf("boolean") !== -1) {
                wrong += "var x = !!y;\r";
            }
            if (jscs.indexOf("numeric") !== -1) {
                wrong += "var x = +y;\r";
            }
            if (jscs.indexOf("string") !== -1) {
                wrong += "var x = \"\" + y;\r";
            }
            if (jscs.indexOf("binary") !== -1) {
                wrong += "var x = ~s.indexOf(\".\");\r";
            }

            return {
                message: message,
                right: right,
                wrong: wrong,
                jscs: jscs
            }
        };