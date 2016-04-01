export const disallowIdenticalDestructuringNames =  () => {
    let message, right, wrong;

    message = "Do not use identical destructuring names for the key and value. Use shorthand destructuring instead.";
    right = "var {left, top} = obj; // shorthand\rvar {left, top: topper} = obj;";
    wrong = "var {left: left, top: top} = obj;";

    return {
        message,
        right,
        wrong
    }
};
