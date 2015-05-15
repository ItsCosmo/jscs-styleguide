/**
 * Created by pkleim on 5/13/2015.
 */
var fs = require("fs"),
    hb = require("handlebars"),
    main = require("./templates/main.hbs"),
    attribute = require("./templates/attribute.hbs"),
    props = require("./props.json");
    
    hb.registerPartial("attribute", attribute);


module.exports = {
    gen: function(jscs, options) {
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
            var p = props[i];
            if (jscs[p.name]) {
                p.jscs = jscs[p.name];
            }
        }

        return main({options: options, props: props});
    }
};