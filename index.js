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

            for (var i = 0; i < props.length; i++) {
                var p = props[i], val = jscs[p.name];
                if (val) {
                    if (p.name === "maximumLineLength") {
                        p.message = "Lines can have a maximum of " + ((typeof val === "number") ? val : val.value) + " characters. ";
                        p.message += "Tabs count as " + ((val.tabSize !== undefined) ? val.tabSize : 1) + " characters. ";
                    } else if (p.name === "validateIndentation") {
                        if (typeof val === "number") {
                            p.message = "Block statements must be indented with " + val + " space characters. ";
                            p.right = "if(a) {\r" + spaces(val) + "b = c; \\\\ line is indented with " + val + " spaces\r}";
                            p.wrong = "if(a) {\r" + spaces(val+2) + "b = c; \\\\ line is indented with " + (val+2) + " spaces\r}";
                        } else if (val.value) {
                            p.message = "Block statements must be indented with " + val.value + " space characters. ";
                            p.right = "if(a) {\r" + spaces(val.value) + "b = c; \\\\ line is indented with " + val.value + " spaces\r}";
                            p.wrong = "if(a) {\r" + spaces(val.value+2) + "b = c; \\\\ line is indented with " + (val.value+2) + " spaces\r}";
                        }
                    }
                    if (p.alt) {
                        for (var a = 0; a < p.alt.length; a++) {
                            var alt = p.alt[a];
                            if (evaluate.call({config: val}, alt.test)) {
                                (alt.message !== undefined) && (p.message = alt.message);
                                (alt.right!== undefined) && (p.right = alt.right);
                                (alt.right1!== undefined) && (p.right1 = alt.right1);
                                (alt.right2!== undefined) && (p.right2 = alt.right2);
                                (alt.right3!== undefined) && (p.right3 = alt.right3);
                                (alt.wrong!== undefined) && (p.wrong = alt.wrong);
                                (alt.example!== undefined) && (p.example = alt.example);
                                (alt.message1!== undefined) && (p.message1 = alt.message1);
                                (alt.message2!== undefined) && (p.message2 = alt.message2);
                                (alt.message3!== undefined) && (p.message3 = alt.message3);
                            }
                        }
                    }
                    p.jscs = val;
                }
            }
            return main({options: options, props: props});
        }
    };
}());
