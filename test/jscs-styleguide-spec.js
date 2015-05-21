/**
 * Created by pkleim on 5/14/2015.
 */
var chai = require("chai"),
    should = chai.should(),
    expect = chai.expect();
    style = require("../index"),
    jscs = require("../config.jscs.json");

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
        style.file(jscs, {valid_keyword: "COOL", invalid_keyword: "NOT COOL", title: "My Fantastic Style Guide"});
    });
});
