export const disallowNotOperatorsInConditionals = () => {
    let message, right, wrong;

    message = "Do not use the not (!), not equals (!=), and strict not equals (!==) operators in conditionals.";
    right = "if (something) {\r    return true;\r}\rif (a == b) {\r    do.something();\r}";
    wrong = "if (!something) {\r    return false;\r}\rif (a != b) {\r    do.somethingElse();\r}";

    return {
        message,
        right,
        wrong
    }
};
