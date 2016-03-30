// normally, you would require("jscs-styleguide")
// see examples/example.js 
import { file as StyleGuideFile} from "./lib/index"

// lot's o' steps to get the configuration as a Javascript Object
// Many thanks to Sergey Sharov for figuring this out
//
import fs from "fs"

var rules = JSON.parse(fs.readFileSync(".jscsrc", "utf8"));

import Checker from "jscs"

const checker = new Checker();
checker.registerDefaultRules();
checker.configure(rules);

const config = checker.getProcessedConfig();

// Generate HTML styleguide
StyleGuideFile(config, {title: "My Style Guide"});
