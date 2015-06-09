/**
 * Substitutes "{n}" tokens within the specified string
 * @param {string} str The string to make substitutions in.
 * @param {string[]} rest Additional parameters that can be substituted into str parameter
 * @return {string} New string with all of the {n} tokens replaced with the respective arguments specified.
 */
module.exports = function (str) {
  for (var i = 0; i < Object.keys(arguments).length - 1; i++) {
    str = str.replace(new RegExp("\\{" + i + "\\}", "g", 'g'), arguments[i + 1]);
  }
  return str;
};