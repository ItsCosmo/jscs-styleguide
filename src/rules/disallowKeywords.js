export const disallowKeywords = (jscs) =>  {
            var message, right, wrong;

            message = "Do not use the following keywords:";

            return {
                message: message,
                right: right,
                wrong: wrong,
                jscs: jscs
            }
        };