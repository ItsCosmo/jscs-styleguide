/**
 * Created by pkleim on 5/13/2015.
 */
console.log("START");
var fs = require("fs"),
    hb = require("handlebars"),
    main = require("./templates/main.hbs"),
    listStrings = require("./templates/listStrings.hbs"),
    
    attr = [
        {
            name: "requireCurlyBraces",
            message: "Curly braces are required after the following statements:",
            right: "if (condition) {\r    someThing();\r}",
            wrong: "if (condition) someThing();"
        },
        {
            name: "requireOperatorBeforeLineBreak",
            message: "When expressions involving binary operators are split between lines, " +
                "the operator must appear before the line break.",
            right: "var x = y ?\r        1 : 2;",
            wrong: "var x = y\r        ? 1 : 2;"
        },
        {
            name: "requireCamelCaseOrUpperCaseIdentifiers",
            message: "Identifiers must be camelCased or UPPERCASE_WITH_UNDERSCORES",
            right: "var camelCase = 0;\rvar CamelCase = 1;\rvar _camelWithUnderscore = 2;\rvar UPPER_CASE = 3;",
            wrong: "var lower_case = 0;\rvar Mixed_case = 2;\rvar mixed_Case = 3;"
        }
    ];

    doc = {
        requireCurlyBraces: {
            message: "Curly braces are required after the following statements:",
            right: "if (condition) {\r    someThing();\r}",
            wrong: "if (condition) someThing();"
        },
        requireOperatorBeforeLineBreak: {
            message: "When expressions involving binary operators are split between lines, " +
                "the operator must appear before the line break.",
            right: "var x = y ?\r        1 : 2;",
            wrong: "var x = y\r        ? 1 : 2;"
        },
        requireCamelCaseOrUpperCaseIdentifiers: {
            message: "Identifiers must be camelCased or UPPERCASE_WITH_UNDERSCORES",
            right: "var camelCase = 0;\rvar CamelCase = 1;\rvar _camelWithUnderscore = 2;\rvar UPPER_CASE = 3;",
            wrong: "var lower_case = 0;\rvar Mixed_case = 2;\rvar mixed_Case = 3;"
        }
    };

    hb.registerPartial("listStrings", listStrings);


module.exports = {
    gen: function(jscs, options) {
        var out = this.generateText(jscs, options);
        
        fs.unlink("styleguide.html", function(err) {
           if (err) {
               console.log(err);
           } else {
               fs.writeFile("styleguide.html", out, function(err) {
                   if (err) {
                       return console.log(err);
                   }
               });
           } 
        });
        
        return out;
    },
    generateText: function(jscs, options) {
        var options = options || {};
        options.title = options.title || "Style Guide";

        for(key in doc) {
            doc[key].jscs = jscs[key];
        } 
        
        return main({doc: doc, options: options, attr: attr, jscs: jscs});
    }
};
