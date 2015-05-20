/**
 * Created by pkleim on 5/13/2015.
 */
(function() {
    var fs = require("fs"),
        hb = require("handlebars"),
        main = require("./templates/main.hbs"),
        attribute = require("./templates/attribute.hbs"),
        props = require("./props.json");

    hb.registerPartial("attribute", attribute);

    hb.registerHelper("ifTypeof", function(v1, v2, options) {
        return (Object.prototype.toString.call(v1) === v2) ? options.fn(this) : options.inverse(this);
    });
    
    hb.registerHelper("add", function(val, add) {
        return val + add;    
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

    hb.registerHelper("spaces", function(n) {
        return Array(n + 1).join(" ");    
    });
    
    // Adapted from article by Steen F. Tøttrup
    // http://www.newsuntold.dk/post/dynamic-partials-with-handlebars
    hb.registerHelper("partial", function(name , context, opts) {
        name = name.replace(/\//g, '_');
        var partial = hb.partials[name];
        if (!partial) {
            return "";
        }
        return new hb.SafeString(hb.compile(partial)(context));
    });
    
    hb.registerHelper("othermark", function(mark) {
        if (mark === '"') {
            return "'";
        }
        if (mark === "'") {
            return '"';
        }
        return "";
    });
    
    function evaluate(str) {
        var jscs = this.config;
        return eval(str);
    }

    function spaces(n) {
        return Array(n + 1).join(" ");
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

            for (var name in props) {
                var p = props[name], val = jscs[name];
                if (val) {
                    // normalize a few attributes
                    if (name === "maximumLineLength") {
                        if (typeof val === "number") {
                            val = {value: val, tabSize: 0};
                        }
                    } else if (name === "validateIndentation") {
                        if (typeof val !== "object") {
                            val = {value: val};
                        }
                    } else if (name === "validateQuoteMarks") {
                        if (typeof val === "string" || typeof val === "boolean") {
                            val = {mark: val};
                        }
                    }
                    // choose between alternatives
                    if (p.alt) {
                        for (var a = 0; a < p.alt.length; a++) {
                            var alt = p.alt[a];
                            if (evaluate.call({config: val}, alt.test)) {
                                (alt.message !== undefined) && (p.message = alt.message);
                                (alt.message1 !== undefined) && (p.message1 = alt.message1);
                                (alt.message2 !== undefined) && (p.message2 = alt.message2);
                                (alt.message3 !== undefined) && (p.message3 = alt.message3);
                                (alt.right !== undefined) && (p.right = alt.right);
                                (alt.right1 !== undefined) && (p.right1 = alt.right1);
                                (alt.right2 !== undefined) && (p.right2 = alt.right2);
                                (alt.right3 !== undefined) && (p.right3 = alt.right3);
                                (alt.wrong !== undefined) && (p.wrong = alt.wrong);
                                (alt.example !== undefined) && (p.example = alt.example);
                                (alt.partials !== undefined) && (p.partials = alt.partials);
                            }
                        }
                    }
                    // process partials if required
                    if (p.partials) {
                        p.registered = { 
                            "message": [],
                            "right": [],
                            "wrong": []
                        };
                        ["message", "message1", "message2", "message3"].forEach(function(value) {
                            if (p[value]) {
                                hb.registerPartial(name + "-" + value, p[value]);
                                p.registered.message.push(name + "-" + value);
                                delete p[value];
                            }
                        });
                        ["right", "right1", "right2", "right3"].forEach(function(value) {
                            if (p[value]) {
                                hb.registerPartial(name + "-" + value, p[value]);
                                p.registered.right.push(name + "-" + value);
                                delete p[value];
                            }
                        });
                        ["wrong", "wrong1", "wrong2", "wrong3"].forEach(function(value) {
                            if (p[value]) {
                                hb.registerPartial(name + "-" + value, p[value]);
                                p.registered.wrong.push(name + "-" + value);
                                delete p[value];
                            }
                        });
                    }
                    // make the jscs configuration available
                    p.jscs = val;
                }
            }
            return main({options: options, props: props});
        }
    };
}());
