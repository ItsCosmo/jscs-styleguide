export const disallowObjectKeysOnNewLine = () => {
    let message, right, wrong;

    message = "Do not place object keys on separate lines.";
    right = "var obj = { a:0, b: 1, c: 2};";
    wrong = "var obj = {\r  a:0,\r  b: 1,\r  c: 2\r};";

    return {
        message,
        right,
        wrong
    }
};
