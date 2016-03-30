import fs from "fs"
import sprintf from "sprintf"

const rules = fs.readdirSync("./src/rules");

let imports = "",
    exports = "export default {\n";


for (let rule of rules) {
    let ruleName;

    if (rule.indexOf(".js") !== -1) {
        ruleName = rule.slice(0,-3);
        imports += sprintf("import { %s } from \"./rules/%s\"\n", ruleName, ruleName);
        exports += sprintf("%s,\n", ruleName);
    }
}

exports += "}";

fs.unlink("./src/rules.js", function (err) {
    if (err) {
        console.log("creating index.js");
    }
    fs.writeFile("./src/rules.js", imports+exports, (err) => {
        if (err) {
            return console.log(err);
        }
    });
});