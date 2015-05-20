/**
 * Created by pkleim on 5/13/2015.
 */
(function() {
    var fs = require("fs"),
        hb = require("handlebars"),
        main = require("./templates/main.hbs"),
        attribute = require("./templates/attribute.hbs"),
        rules = require("./rules");

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
            var options = options || {},
                props = {};
            options.title = options.title || "Style Guide";
            options.theme = options.theme || "default";
            options.valid_keyword = options.valid_keyword || "VALID";
            options.invalid_keyword = options.invalid_keyword || "INVALID";
            
            for (rule in rules) {
                props[rule] = rules[rule](jscs[rule]);
            }

            return main({options: options, props: props});
        }
    };
}());
