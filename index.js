/**
 * Created by pkleim on 5/13/2015.
 */
(function() {
    var fs = require("fs"),
        hb = require("handlebars"),
        main = require("./templates/main.hbs"),
        body = require("./templates/body.hbs"),
        rule = require("./templates/rule.hbs"),
        rules = require("./rules");

    hb.registerPartial("body", body);
    hb.registerPartial("rule", rule);

    module.exports = {
        file: function(jscs, options) {
            var out = this.html(jscs, options);

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
        html: function(jscs, options) {
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
        }, 
        body: function(jscs, options) {
            var options = options || {},
                props = {};
            options.title = options.title || "Style Guide";
            options.theme = options.theme || "default";
            options.valid_keyword = options.valid_keyword || "VALID";
            options.invalid_keyword = options.invalid_keyword || "INVALID";

            for (rule in rules) {
                props[rule] = rules[rule](jscs[rule]);
            }
            
            return body({options: options, props: props});
        }
    };
}());
