export const requireLineFeedAtFileEnd = () =>  {
            var message;

            message = "The last  line of a source file must end with a line feed.";

            return {
                message: message
            }
        };