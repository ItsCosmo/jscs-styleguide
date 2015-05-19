/**
 * Created by pkleim on 5/13/2015.
 */
(function() {
    var fs = require("fs"),
        hb = require("handlebars"),
        main = require("./templates/main.hbs"),
        attribute = require("./templates/attribute.hbs"),
        maximumLineLength = require("./templates/maximumLineLength.hbs"),
        props = require("./props.json");

    hb.registerPartial("attribute", attribute);
    hb.registerPartial("maximumLineLength", maximumLineLength);

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
    
    function evaluate(str) {
        var jscs = this.config;
        return eval(str);
    }
    
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
                    if (p.name === "maximumLineLength") {
                        if (typeof val === "number") {
                            p.jscs = {value: val}
                        } else {
                            p.jscs = val;
                        }
                    } else {
                        if (p.alt) {
                            for (var a = 0; a < p.alt.length; a++) {
                                var alt = p.alt[a];
                                if (evaluate.call({config: val}, alt.test)) {
                                    alt.message && (p.message = alt.message);
                                    alt.right &&(p.right = alt.right);
                                    alt.wrong && (p.wrong = alt.wrong);
                                    alt.example && (p.example = alt.example);
                                    alt.message1 && (p.message1 = alt.message1);
                                    alt.message2 && (p.message2 = alt.message2);
                                    alt.message3 && (p.message3 = alt.message3);
                                }
                            }
                        }
                        p.jscs = val;
                    }
                }
            }

            return main({options: options, props: props});
        }
    };
}());
