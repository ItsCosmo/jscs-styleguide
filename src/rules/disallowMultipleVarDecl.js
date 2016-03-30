export const disallowMultipleVarDecl = (jscs) =>  {
            var message, right, wrong;

            if (jscs === true) {
                message = "Do not declare multiple variables in the same <code>var</code> statement, except within a <code>for</code> loop.";
                right = "var x = 1;\rvar y = 1;\rfor( var i = 0, j = x.length; i < j; i++) {};";
                wrong = "var x, y = 1;"
            } else if (jscs === 'strict') {
                message = "Do not declare multiple variables in the same <code>var</code> statement.";
                right = "var x = 1;\rvar y = 1;";
                wrong = "var x, y = 1;\rfor( var i = 0, j = x.length; i < j; i++) {};"
            } else if (jscs === 'exceptUndefined') {
                message = "Do not declare multiple variables in the same <code>var</code> statement, except where the variables are not defined.";
                right = "var x, y;\rvar a = 1;\rvar b = 1;";
                wrong = "var x = 1, y = 1;";
            }

            return {
                message: message,
                right: right,
                wrong: wrong,
                jscs: jscs
            }
        };