export const disallowMixedSpacesAndTabs = (jscs) =>  {
            var message, right, wrong;

            if (jscs === "smart") {
                message = "If a line in source code contains both tab (\\t) and spaces, the tabs must preceed the spaces.";
                right = "      x = 1;  // \\t\r      y = 2; // \\s\\s\\s\\s\r      z = 3; // \\t\\s\\s";
                wrong = "      z = 3; // \\s\\s\\t";
            } else {
                message = "Lines may not contain a mixture of spaces and tab (\\t) characacters. ";
                right = "   x = 1; // \\t\r   y = 2; // \\s\\s\\s\\s";
                wrong = "     z = 3; // \\t\\s";
            }

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        };