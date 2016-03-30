export const requireCamelCaseOrUpperCaseIdentifiers = () =>  {
            var message, right, wrong;

            message = "Identifiers must be camelCased or UPPERCASE_WITH_UNDERSCORES";
            right = "var camelCase = 0;\rvar CamelCase = 1;\rvar _camelWithUnderscore = 2;\rvar UPPER_CASE = 3;";
            wrong = "var lower_case = 0;\rvar Mixed_case = 2;\rvar mixed_Case = 3;";

            return {
                message: message,
                right: right,
                wrong: wrong
            }
        };