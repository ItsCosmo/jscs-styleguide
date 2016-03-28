// normally, you would require("jscs-styleguide")
// see examples folder
var style = require("./index");

// lot's o' steps to get the configuration as a Javascript Object
// Many thanks to Sergey Sharov for figuring this out
//
var fs = require("fs");
var rules = JSON.parse(fs.readFileSync(".jscsrc", "utf8"));

var Checker = require("jscs");
var checker = new Checker();
checker.registerDefaultRules();
checker.configure(rules);

var config = checker.getProcessedConfig();

// Generate HTML styleguide
style.file(config, {title: "My Style Guide"});
