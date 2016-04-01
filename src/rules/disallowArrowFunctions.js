export const disallowArrowFunctions =  () => {
    let message, right, wrong;

    message = "ES6 arrow functions are not allowed.";
    right = "function square(a) {\r    return a * a;\r}";
    wrong = "const square = (a) => { return a * a };";

    return {
        message,
        right,
        wrong
    }
};
