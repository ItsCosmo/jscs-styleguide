export const disallowIdentifierNames = (jscs) =>  {
            var message, right, wrong;

            message = "The following identifier names are not allowed:";
            right = "var good = 1;\rvar object[\"fine\"] = 2;";
            wrong = sub("var {0} = 1;", jscs[0]);

            return {
                message: message,
                right: right,
                wrong: wrong,
                jscs: jscs
            }
        };