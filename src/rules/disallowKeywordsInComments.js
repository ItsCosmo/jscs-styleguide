export const disallowKeywordsInComments = (jscs) =>  {
            var message, right, wrong;

            if (jscs === true) {
                message = "Do not put keywords TODO or FIXME inside a comment.";
                wrong = "// Don't put TODO in a comment\r/* Or FIXME, either\r*/";
            } else {
                message = "Do not put the following keywords inside a comment:";
                wrong = sub("//Don't put {0} inside a comment", jscs[0]);
            }

            right = "// An acceptable comment\r/* Another acceptable comment\r*/";

            return {
                message: message,
                right: right,
                wrong: wrong,
                jscs: jscs
            }
        };