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

## Options

    {
        title: "Title of Styleguide. Default is 'Style Guide'.",
        valid_keyword: "Heading for valid usage, e.g. 'VALID', 'COOL', 'DO THIS'. Default is 'VALID'.",
        invalid_keyword: "Heading for invalid usage, e.g. 'INVALID', 'NOT COOL', 'NOT THIS'. Default is 'INVALID'.",
        theme: "Will load 'theme'.css into HTML <head>. Default is 'default'."
    }

## TODO

The following JSCS rules have been completed so far. More are being added every day. We will complete this!

    disallowAnonymousFunctions
    disallowCapitalizedComments
    disallowCommaBeforeLineBreak
    disallowCurlyBraces
    disallowDanglingUnderscores
    disallowEmptyBlocks
    disallowFunctionDeclarations
    disallowIdentifierNames
    disallowImplicitTypeConversion
    disallowKeywords
    disallowKeywordsInComments
    disallowKeywordsOnNewLine
    disallowMixedSpacesAndTabs
    disallowMultipleLineBreaks
    disallowMultipleLineStrings
    disallowMultipleSpaces
    disallowMultipleVarDecl
    disallowNamedUnassignedFunctions
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
    

