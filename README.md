# jscs-styleguide
Generate a human-readable Style Guide from a JSCS configuration.  

## Installation

    npm install jscs-styleguide

## Usage

    var style = require("jscs-styleguide");

### Loading rules from .jscsrc (thanks to Sergey Sharov)

    var fs = require("fs");
    var rules = JSON.parse(fs.readFileSync(".jscsrc", "utf8"));

    var Checker = require("jscs");
    var checker = new Checker();
    checker.registerDefaultRules();
    checker.configure(rules);

    var config = checker.getProcessedConfig();

### Generating HTML styleguide

    // get html body only for stylesheet, as string
    // to create an HTML file in your own way
    var body = style.body(config, {title: "My Style Guide"});

    // get html document for stylesheet, as string
    // to do with as you please
    var html = style.html(config, {title: "My Style Guide"});

    // create stylesheet.html in current folder
    style.file(config, {title: "My Style Guide"});

## Run example

    npm run example

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
    

