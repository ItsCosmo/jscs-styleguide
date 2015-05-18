/**
 * Created by pkleim on 5/13/2015.
 */
(function() {
    var fs = require("fs"),
        hb = require("handlebars"),
        main = require("./templates/main.hbs"),
        attribute = require("./templates/attribute.hbs"),
        maximumLineLength = require("./templates/maximumLineLength.hbs"),
        validateQuoteMarks = require("./templates/validateQuoteMarks.hbs"),
        props = require("./props.json");

    hb.registerPartial("attribute", attribute);
    hb.registerPartial("maximumLineLength", maximumLineLength);
    hb.registerPartial("validateQuoteMarks", validateQuoteMarks);

    hb.registerHelper("ifTypeof", function(v1, v2, options) {
        return (typeof v1 === v2) ? options.fn(this) : options.inverse(this);
    });

    hb.registerHelper("ifCond", function(v1, operator, v2, options) {

        switch (operator) {
            case "==":
                return (v1 == v2) ? options.fn(this) : options.inverse(this);
            case "===":
                return (v1 === v2) ? options.fn(this) : options.inverse(this);
            case "<":
                return (v1 < v2) ? options.fn(this) : options.inverse(this);
            case "<=":
                return (v1 <= v2) ? options.fn(this) : options.inverse(this);
            case ">":
                return (v1 > v2) ? options.fn(this) : options.inverse(this);
            case ">=":
                return (v1 >= v2) ? options.fn(this) : options.inverse(this);
            case "&&":
                return (v1 && v2) ? options.fn(this) : options.inverse(this);
            case "||":
                return (v1 || v2) ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this);
        }
    });

    module.exports = {
        html: function(jscs, options) {
            var out = this.generateText(jscs, options);

            fs.unlink("styleguide.html", function(err) {
                if (err) {
                    console.log(err);
                }
                fs.writeFile("styleguide.html", out, function(err) {
                    if (err) {
                        return console.log(err);
                    }
                });
            });

            return out;
        },
        generateText: function(jscs, options) {
            var options = options || {};
            options.title = options.title || "Style Guide";

            for (var i = 0; i < props.length; i++) {
                var p = props[i], val = jscs[p.name];
                if (val) {
                    if ((p.name === "maximumLineLength")) {
                        if (typeof val === "number") {
                            p.jscsval = {value: val}
                        } else {
                            p.jscsval = val;
                        }
                    } else if (p.name === "validateQuoteMarks") {
                        if (typeof val !== "object") {
                            p.jscsval = {mark: val};
                        } else {
                            p.jscsval = val;
                        }
                        if (p.jscsval.mark === '"') {
                            p.jscsval.other = "'";
                        } else if (p.jscsval.mark === "'") {
                            p.jscsval.other = '"';
                        }
                    } else {
                        p.jscs = val;
                    }
                }
            }

            return main({options: options, props: props});
        }
    };
}());
