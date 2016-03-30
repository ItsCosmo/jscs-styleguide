export const requireCapitalizedConstructors = (jscs) =>  {
            var message, message1, right, wrong;

            message = " All constructors except for <code>this</code> must be capitalized.";
            right = "var x = new A();\rvar y = new this();";
            wrong = "var x = new a();";
            
            if (jscs.allExcept) {
                message = "Constructors except for <code>this</code> must be capitalized.";
                message1 = " An exception is made for the following identifiers:";
            }

            return {
                message: message,
                message1: message1,
                right: right,
                wrong: wrong,
                jscs: jscs
            }
        };