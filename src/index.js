/**
 * Created by pkleim on 5/13/2015.
 */
import fs from "fs"
import hb from "handlebars"
import main_templ from "./templates/main.hbs"
import body_templ  from "./templates/body.hbs"
import rule_templ from "./templates/rule.hbs"
import rules from "./rules"

hb.registerPartial("body", body_templ);
hb.registerPartial("rule", rule_templ);

const file = (jscs, options) => {
    const out = html(jscs, options);

    fs.unlink("styleguide.html", function (err) {
        if (err) {
            console.log("styleguide.html does not exist... yet. Usually nothing to worry about.");
        }
        fs.writeFile("styleguide.html", out, (err) => {
            if (err) {
                return console.log(err);
            }
        });
    });

    return out;
};

const html = (jscs, opts) => {
        let options = { ...opts },
            props = {};
        options.title = options.title || "Style Guide";
        options.theme = options.theme || "default";
        options.valid_keyword = options.valid_keyword || "VALID";
        options.invalid_keyword = options.invalid_keyword || "INVALID";

        for (let rule in jscs) {
            if (rules[rule]) {
                props[rule] = rules[rule](jscs[rule]);
            }
        }

        const cssfile = "./" + options.theme + ".css";

        options.styles = fs.readFileSync(cssfile, "utf8");

        return main_templ({options, props});
};

const body = (jscs, opts) => {
        let options = { ...opts },
            props = {};
        options.title = options.title || "Style Guide";
        options.theme = options.theme || "default";
        options.valid_keyword = options.valid_keyword || "VALID";
        options.invalid_keyword = options.invalid_keyword || "INVALID";

        for (let rule in jscs) {
            if (rules[rule]) {
                props[rule] = rules[rule](jscs[rule]);
            }
        }

        return body_templ({options, props});
};

const rule = (jscs, opts) => {
        var options = { ...opts },
            props = {};
        options.title = options.title || "Style Guide";
        options.theme = options.theme || "default";
        options.valid_keyword = options.valid_keyword || "VALID";
        options.invalid_keyword = options.invalid_keyword || "INVALID";

        for (var key in jscs) {
            if (rules[key]) {
                props[key] = rules[key](jscs[key]);
                return props;
            }
        }

        return "";
};

export { file, html, body, rule }

