export const disallowMultipleSpaces = () =>  {
            var message, right, wrong;

            message = "Only one space is allowed between identifiers, keywords, or any other tokens.";
            right = "var x = 5;";
            wrong = "var  x = 5;\rvar x  = 5;\rvar x =  5;";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        };