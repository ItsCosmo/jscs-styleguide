# jscs-styleguide
Generate a human-readable Style Guide from a JSCS configuration.  

## Installation

    npm install jscs-styleguide

## Usage

    // es5
    var style = require("jscs-styleguide");     
    
    // es6
    import { file, html, body } from "jscs-styleguide"  

### Loading rules from .jscsrc (thanks to Sergey Sharov)

    var fs = require("fs");
    var rules = JSON.parse(fs.readFileSync(".jscsrc", "utf8"));

    var Checker = require("jscs");
    var checker = new Checker();
    checker.registerDefaultRules();
    checker.configure(rules);

    var config = checker.getProcessedConfig();

### Generating HTML styleguide

    // es5
    // get html body only for stylesheet, as string
    // to create an HTML file in your own way
    var body = style.body(config, {title: "My Style Guide"});

    // get html document for stylesheet, as string
    // to do with as you please
    var html = style.html(config, {title: "My Style Guide"});

    // create stylesheet.html in current folder
    style.file(config, {title: "My Style Guide"});
    
    // es6
    var _body = body(config, {title: "My Style Guide"});
    
    var _html = html(config, {title: "My Style Guide"});
    
    file(config, {title: "My Style Guide"});

## Default css

jscs-styleguide includes a default.css in the /example folder that you can use in lieu of building your own. If you plan to use it,
just copy it to your project before running jscs-styleguide

## Run example

jscs-styleguide contains a complete sample application which you can use to generate an HTML style guide. This will make it
very easy for you to understand how jscs-styleguide works. The sample application is located in the /example folder. It has a
sample .jscsrc and default.css file ready to roll.

To run the example, do the following

    cd node_modules/jscs-styleguide/example
    npm install
    npm run example     // creates file StyleGuide.html in /examples folder. Load it in your browser!

## Options

    {
        title: "Title of Styleguide. Default is 'Style Guide'.",
        valid_keyword: "Heading for valid usage, e.g. 'VALID', 'COOL', 'DO THIS'. Default is 'VALID'.",
        invalid_keyword: "Heading for invalid usage, e.g. 'INVALID', 'NOT COOL', 'NOT THIS'. Default is 'INVALID'.",
        theme: "Will load 'theme'.css into HTML <head>. Default is 'default'.",
        showJSCS: true, // shows the name of each JSCS rule
        fileName: "name_of_generated_file.html"
    }

## TODO

The following JSCS rules have been completed so far. These are the most common. More are being added until they are all there. If you really need a rule now, leave me a comment itscosmo@gmail.com

    disallowAnonymousFunctions
    disallowArrayDestructuringReturn
    disallowArrowFunctions
    disallowCapitalizedComments
    disallowCommaBeforeLineBreak
    disallowCurlyBraces
    disallowDanglingUnderscores
    disallowEmptyBlocks
    disallowFunctionDeclarations
    disallowIdenticalDestructuringNames
    disallowIdentifierNames
    disallowImplicitTypeConversion
    disallowKeywords
    disallowKeywordsInComments
    disallowKeywordsOnNewLine
    disallowMixedSpacesAndTabs
    disallowMultiLineTernary
    disallowMultipleLineBreaks
    disallowMultipleLineStrings
    disallowMultipleSpaces
    disallowMultipleVarDecl
    disallowNamedUnassignedFunctions
    disallowNestedTernaries
    disallowNewlineBeforeBlockStatements
    disallowNotOperatorsInConditionals
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
    

