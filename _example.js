var styleGuide = require("./lib/index"),
    fs = require("fs");

// lot's o' steps to get the configuration as a Javascript Object
// Many thanks to Sergey Sharov for figuring this out
//
var rules = JSON.parse(fs.readFileSync("_jscsrc", "utf8"));

var Checker  = require("jscs"),
    checker = new Checker();

checker.registerDefaultRules();
checker.configure(rules);

var config = checker.getProcessedConfig();

// Generate HTML styleguide
styleGuide.file(config, {
    title: "My Style Guide",
    valid_keyword: "COOL",
    invalid_keyword: "NOT COOL",
    fileName: "StyleGuide.html",
    theme: "_default",
    showJSCS: true});
