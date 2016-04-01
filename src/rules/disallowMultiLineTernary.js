export const disallowMultiLineTernary =  () => {
    let message, right, wrong;

    message = "Whern using the ternary operator, the test, consequent and alternate must all be on the same line.";
    right = "var foo = (a === b) ? 1 : 2;";
    wrong = "var foo = (a === b) ?\r    1 :\r    2;";

    return {
        message,
        right,
        wrong
    }
};
