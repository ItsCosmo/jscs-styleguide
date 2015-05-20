# jscs-styleguide
Generate a human-readable Style Guide from a JSCS configuration.  

## Installation

    npm install jscs-styleguide

## Usage

    var style = require("jscs-styleguide");
    var jscs = require("./path/to/config.jscs.json");

    style.html(jscs, {title: "My Style Guide"});

This will create a file called `styleguide.html` in the current folder.

## TODO

The following JSCS rules have been completed so far. More are being added every day. We will complete this!

    disallowMixedSpacesAndTabs
    disallowMultipleLineString
    disallowMultipleSpaces
    maximumLineLength
    requireCamelCaseOrUpperCaseIdentifiers
    requireCapitalizedConstructors
    requireCommaBeforeLineBreak
    requireCurlyBraces
    requireDollarBeforejQueryAssignment
    requireMultipleVarDecl
    requireOperatorBeforeLineBreak
    requireSpaceBeforeBinaryOperators
    validateIndentation
    validateParameterSeparator
    validateQuoteMarks
    

