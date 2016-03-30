export const requireCommaBeforeLineBreak = () =>  {
            var message, right, wrong;

            message = "When a list is split over multiple lines, the comma separator must come at the end of a line.";
            right = "var x = {\r    one: 1,\r    two: 2,\r    three: 3\r};";
            wrong = "var x = {\r    one: 1\r    ,two: 2\r    ,three: 3\r};";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        };