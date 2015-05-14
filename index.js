/**
 * Created by pkleim on 5/13/2015.
 */
module.exports = {
    gen: function(jscs, options) {
        var options = options || {};
        
        options.title = options.title || "Style Guide";
        
        return "JSCS: " + options.title + jscs.requireCurlyBraces;
    }
};
