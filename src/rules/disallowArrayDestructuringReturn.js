export const disallowArrayDestructuringReturn =  () => {
    let message, right, wrong;

    message = "Must use object destructuring for multiple return values, not array destructuring.";
    right = "const { left, right } = processInput(input);";
    wrong = "const [ left, right ] = processInput(input);";

    return {
        message,
        right,
        wrong
    }
};
