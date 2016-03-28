var style = require("jscs-styleguide");

// access File System
var fs = require("fs");

// assumes you have a .jscsrc file in the current folder
// modify as needed
var rules = JSON.parse(fs.readFileSync(".jscsrc", "utf8"));

var Checker = require("jscs");
var checker = new Checker();
checker.registerDefaultRules();
checker.configure(rules);

var config = checker.getProcessedConfig();

// Generate HTML styleguide
style.file(config, {title: "My Style Guide"});
