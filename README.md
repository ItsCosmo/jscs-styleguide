# jscs-styleguide
Generate a human-readable Style Guide from a JSCS configuration. As of now, this only supports a small number of JSCS attributes, but more are being added every day. 

## Installation

    npm install jscs-styleguide

## Usage

    var style = require("jscs-styleguide");
    var jscs = require("./path/to/config.jscs.json");

    style.html(jscs, {title: "My Style Guide"});

This will create a file called `styleguide.html` in the current folder.
