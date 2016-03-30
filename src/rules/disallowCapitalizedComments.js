export const disallowCapitalizedComments = () => {
    let message, right, wrong;

    message = "The first alphabetical character of a comment must be lowercase.";
    right = "// a valid comment\r/*\r a valid comment\r */";
    wrong = "// An invalid comment\r/*\r An invalid comment\r */";

    return {
        message: message,
        right: right,
        wrong: wrong
    }
};

