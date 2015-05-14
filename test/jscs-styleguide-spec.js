/**
 * Created by pkleim on 5/13/2015.
 */
var chai = require("chai");
    should = chai.should(),
    expect = chai.expect(),
    style = require("../index"),
    jscs = require("../config.jscs.json");

describe("jscs-styleguide", function() {
    it("should exist", function() {
        style.should.exist;
    });
    
    it("should work", function() {
        var o = style.gen(jscs);
        o.should.include("STYLE");
        console.log(o);
    });
});
