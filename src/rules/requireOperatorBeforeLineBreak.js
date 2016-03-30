export const requireOperatorBeforeLineBreak = () =>  {
            var message, right, wrong;

            message = "When expressions involving binary operators are split between lines, the operator must appear before the line break.";
            right = "var x = y ?\r        1 : 2;";
            wrong = "var x = y\r        ? 1 : 2;";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        };