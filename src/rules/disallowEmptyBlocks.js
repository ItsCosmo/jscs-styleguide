export const disallowEmptyBlocks = (jscs) =>  {// what is this
            var message, right, wrong;

            message = "Empty blocks are not allowed, except for <code>catch</code> blocks.";
            right  = "if (a === b) {c = true }\rtry {a = b} catch(e) {};";
            wrong = "if (a ===b_ {} else {d == false}";

            return {
                message: message,
                right: right,
                wrong: wrong,
                jscs: jscs
            }
        };