export const maximumLineLength = (jscs) =>  {
            var message,
                message1,
                message2;

            if (typeof jscs === "number") {
                jscs = {value: jscs, tabSize: 0};
            }

            message = "Lines may have a maximum of " + jscs.value + " characters. Tabs (\\t) are counted as " + jscs.tabSize + " characters.";
            if (jscs.allowComments) {
                message1 = " Comments are allowed to break this rule.";
            }
            if (jscs.allowUrlComments) {
                message1 = " Comments with long Urls are allowed to break this rule.";
            }
            if (jscs.allowRegex) {
                message2 = " Regular expression literals are allowed to break this rule.";
            }

            return {
                message: message,
                message1: message1,
                message2: message2
            }
        };