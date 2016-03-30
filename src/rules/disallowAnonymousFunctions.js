export const disallowAnonymousFunctions =  () => {
    let message, right, wrong;

    message = "All function expressions must be named (no anonymous functions).";
    right = "var x = function foo() {};\r$(\"#myDiv\").click(function bar() {});";
    wrong = "var x = function() {};\r$(\"#myDiv\").click(function() {});";

    return {
        message,
        right,
        wrong
    }
};
