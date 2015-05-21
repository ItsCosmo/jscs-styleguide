# jscs-styleguide
Generate a human-readable Style Guide from a JSCS configuration.  

## Installation

    npm install jscs-styleguide

## Usage

    var style = require("jscs-styleguide");
    var jscs = require("./path/to/config.jscs.json");

    // get html body only for stylesheet, as string
    var body = style.body(jscs, {title: "My Style Guide"});
    
    // get html document for stylesheet, as string
    var html = style.html(jscs, {title: "My Style Guide"});
    
    // create a file called stylesheet.html in current folder
    style.file(jscs, {title: "My Style Guide"});

## TODO

The following JSCS rules have been completed so far. More are being added every day. We will complete this!

    disallowKeywordsOnNewLine
    disallowMixedSpacesAndTabs
    disallowMultipleLineBreaks
    disallowMultipleLineString
    disallowMultipleSpaces
    disallowNewlineBeforeBlockStatements
    disallowSpaceAfterObjectKeys
    disallowSpaceAfterPrefixUnaryOperators
    disallowSpacesInAnonymousFunctionExpression
    disallowSpacesInCallExpression
    disallowSpacesInFunction
    disallowSpacesInsideArrayBrackets
    disallowSpacesInsideObjectBrackets
    disallowSpacesInsideParentheses
    disallowTrailingComma
    disallowYodaConditions
    maximumLineLength
    requireCamelCaseOrUpperCaseIdentifiers
    requireCapitalizedConstructors
    requireCommaBeforeLineBreak
    requireCurlyBraces
    requireDollarBeforejQueryAssignment
    requireLineFeedAtFileEnd
    requireMultipleVarDecl
    requireOperatorBeforeLineBreak
    requireSpaceAfterBinaryOperators
    requireSpaceAfterKeywords
    requireSpaceBeforeBinaryOperators
    requireSpaceBeforeBlockStatements
    requireSpaceBeforeKeywords
    requireSpaceBeforeObjectValues
    requireSpaceBetweenArguments
    requireSpacesInConditionalExpression
    requireSpacesInForStatement
    requireSpacesInFunctionExpression
    validateIndentation
    validateParameterSeparator
    validateQuoteMarks
    

