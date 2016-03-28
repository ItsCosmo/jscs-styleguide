/**
 * Created by pkleim on 5/14/2015.
 */
var chai = require("chai"),
    should = chai.should(),
    expect = chai.expect(),
    fs = require("fs"),
    rules = JSON.parse(fs.readFileSync(".jscsrc", "utf8"));
    Checker = require("jscs"),
    checker = new Checker(),
    checker.registerDefaultRules(),
    checker.configure(rules),
    jscs = checker.getProcessedConfig();


    style = require("../index"),
    //jscs = require("../config.jscs.json"),
    testjscs = require("../config.test.json");

describe("jscs-styleguide", function() {
    it("should exist", function() {
        style.should.exist;
    });

    it("should generate an HTML body", function() {
        var body = style.body(jscs, {valid_keyword: "COOL", invalid_keyword: "NOT COOL", title: "My Fantastic Style Guide"});
    });

    it("should generate an HTML document", function() {
        var html = style.html(jscs, {valid_keyword: "COOL", invalid_keyword: "NOT COOL", title: "My Fantastic Style Guide"});
    });
    
    it("should load create an html file on disk", function() {
        style.file(jscs, {valid_keyword: "COOL", invalid_keyword: "NOT COOL", title: "My  Fantastic Style Guide", showJSCS: true});
    });

    it("should support all the rules in config.test.json", function () {
        var out = "";

        for (var i = 0; i < testjscs.length; i++) {
            out += JSON.stringify(style.rule(testjscs[i], {showJSCS: true}))+"\n";
        }
    });
});
