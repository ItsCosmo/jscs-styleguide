import gulp from "gulp"
import babel from "gulp-babel"
import fs from "fs"
import sprintf from "sprintf"

const config = {
    source: "src/**/*.js",
    templates: "src/templates/**/*.hbs",
    dist_dir: "lib",
    dist_templates_dir: "lib/templates",
    rules_dir: "./src/rules",
    rules_file: "./src/rules.js"
};

// compiles es6 source
gulp.task("compile", ["rules"], () =>{
    return gulp.src(config.source)
        .pipe(babel())
        .pipe(gulp.dest(config.dist_dir))
});

gulp.task("templates", () => {
    return gulp.src(config.templates)
        .pipe(gulp.dest(config.dist_templates_dir))
});

gulp.task("rules", (cb) => {
    const rules = fs.readdirSync(config.rules_dir);

    let imports = "",
        exports = "export default {\n";


    for (let rule of rules) {
        let ruleName;

        if (rule.indexOf(".js") !== -1) {
            ruleName = rule.slice(0,-3);
            imports += sprintf("import { %s } from \"./rules/%s\"\n", ruleName, ruleName);
            exports += sprintf("%s,\n", ruleName);
        }
    }

    exports += "}";

    fs.unlink(config.rules_file, function (err) {
        if (err) {
            console.log("creating rules.js");
        }
        fs.writeFile(config.rules_file, imports+exports, (err) => {
            if (err) {
                console.log(err);
            }
            cb(err);
        });
    });
});

gulp.task("build", ["rules", "compile", "templates"]);

gulp.task("default", ["build"]);