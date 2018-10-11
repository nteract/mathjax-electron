/*
MathJax-grunt-cleaner
=====================
A grunt file to reduce the footprint of a MathJax installation

Latest version at https://github.com/pkra/MathJax-grunt-cleaner

Copyright (c) 2014 Mathjax Consortium

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const cwd = "MathJax-2.7.5/";

module.exports = function(grunt) {
  "use strict";
  //   # Notes #
  //   NEVER remove:
  //
  //   * LICENSE -- the Apache license.
  //   * jax/element/mml -- this implements MathJax"s internal format. Keep either the packed or unpacked copy.
  //

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    clean: {
      //
      // ## Early choices
      // `unpacked` for development
      // ``packed` for production
      unpacked: [cwd + "unpacked"],
      packed: [
        cwd + "config",
        cwd + "docs",
        cwd + "extensions",
        cwd + "jax",
        cwd + "localization",
        cwd + "MathJax.js"
      ],
      // If you don"t need combined configuration files or want to build your own:
      allConfigs: [cwd + "config", cwd + "unpacked/config"],
      //
      // ## Choosing a font
      // See http://docs.mathjax.org/en/latest/font-support.html#font-configuration for background information
      //
      // 1. Remove font files and font data for fonts you won"t use.
      //    **IMPORTANT.** Make sure to prevent fallbacks and local fonts in your configuration!
      //
      //
      fontAsana: [
        cwd + "fonts/HTML-CSS/Asana-Math",
        cwd + "jax/output/HTML-CSS/fonts/Asana-Math",
        cwd + "unpacked/jax/output/HTML-CSS/fonts/Asana-Math",
        cwd + "jax/output/SVG/fonts/Asana-Math",
        cwd + "unpacked/jax/output/SVG/fonts/Asana-Math"
      ],
      fontGyrePagella: [
        cwd + "fonts/HTML-CSS/Gyre-Pagella",
        cwd + "jax/output/HTML-CSS/fonts/Gyre-Pagella",
        cwd + "unpacked/jax/output/HTML-CSS/fonts/Gyre-Pagella",
        cwd + "jax/output/SVG/fonts/Gyre-Pagella",
        cwd + "unpacked/jax/output/SVG/fonts/Gyre-Pagella"
      ],
      fontGyreTermes: [
        cwd + "fonts/HTML-CSS/Gyre-Termes",
        cwd + "jax/output/HTML-CSS/fonts/Gyre-Termes",
        cwd + "unpacked/jax/output/HTML-CSS/fonts/Gyre-Termes",
        cwd + "jax/output/SVG/fonts/Gyre-Termes",
        cwd + "unpacked/jax/output/SVG/fonts/Gyre-Termes"
      ],
      fontLatinModern: [
        cwd + "fonts/HTML-CSS/Latin-Modern",
        cwd + "jax/output/HTML-CSS/fonts/Latin-Modern",
        cwd + "unpacked/jax/output/HTML-CSS/fonts/Latin-Modern",
        cwd + "jax/output/SVG/fonts/Latin-Modern",
        cwd + "unpacked/jax/output/SVG/fonts/Latin-Modern"
      ],
      fontNeoEuler: [
        cwd + "fonts/HTML-CSS/Neo-Euler",
        cwd + "jax/output/HTML-CSS/fonts/Neo-Euler",
        cwd + "unpacked/jax/output/HTML-CSS/fonts/Neo-Euler",
        cwd + "jax/output/SVG/fonts/Neo-Euler",
        cwd + "unpacked/jax/output/SVG/fonts/Neo-Euler"
      ],
      fontStix: [
        cwd + "fonts/HTML-CSS/STIX",
        cwd + "jax/output/HTML-CSS/fonts/STIX",
        cwd + "unpacked/jax/output/HTML-CSS/fonts/STIX",
        cwd + "jax/output/SVG/fonts/STIX",
        cwd + "unpacked/jax/output/SVG/fonts/STIX"
      ],
      fontStixWeb: [
        cwd + "fonts/HTML-CSS/STIX-Web",
        cwd + "jax/output/HTML-CSS/fonts/STIX-Web",
        cwd + "unpacked/jax/output/HTML-CSS/fonts/STIX-Web",
        cwd + "jax/output/SVG/fonts/STIX-Web",
        cwd + "unpacked/jax/output/SVG/fonts/STIX-Web"
      ],
      fontTeX: [
        cwd + "fonts/HTML-CSS/TeX",
        cwd + "jax/output/HTML-CSS/fonts/TeX",
        cwd + "unpacked/jax/output/HTML-CSS/fonts/TeX",
        cwd + "jax/output/SVG/fonts/TeX",
        cwd + "unpacked/jax/output/SVG/fonts/TeX"
      ],
      //
      // Remove font formats
      // If you know you only need a specific format of your remaining fonts (e.g., woff), then you can delete the others.
      dropFonts: [
        // if you use SVG output, you can drop all font formats (SVG output uses the data in `jax/output/SVG/fonts/...`)
        cwd + "fonts"
      ],
      eot: [cwd + "fonts/**/eot"],
      otf: [cwd + "fonts/**/otf"],
      png: [cwd + "fonts/**/png"],
      svg: [
        // **NOT** related to the SVG output!
        cwd + "fonts/**/svg"
      ],
      woff: [cwd + "fonts/**/woff"],
      // ## Choose the input
      //    Remove input that you don"t need.
      //    **Note.** This includes combined configuration files.
      asciimathInput: [
        cwd + "config/AM*",
        cwd + "config/TeX-MML-AM*",
        cwd + "jax/input/AsciiMath",
        cwd + "unpacked/config/AM*",
        cwd + "unpacked/config/TeX-MML-AM*",
        cwd + "unpacked/jax/input/AsciiMath"
      ],
      mathmlInput: [
        cwd + "config/MML*",
        cwd + "config/TeX-MML*",
        cwd + "config/TeX-AMS-MML*",
        cwd + "jax/input/MathML",
        cwd + "unpacked/config/MathML*",
        cwd + "unpacked/jax/input/MathML"
      ],
      texInput: [
        cwd + "config/TeX*",
        cwd + "jax/input/TeX",
        cwd + "unpacked/config/TeX*",
        cwd + "unpacked/jax/input/TeX"
      ],
      // ## Extensions
      extensionsAsciimath: [
        cwd + "extensions/asciimath2jax.js",
        cwd + "unpacked/extensions/asciimath2jax.js"
      ],
      extensionsMathml: [
        cwd + "extensions/MathML",
        cwd + "extensions/mml2jax.js",
        cwd + "unpacked/extensions/MathML",
        cwd + "unpacked/extensions/mml2jax.js"
      ],
      extensionsTeX: [
        cwd + "extensions/TeX",
        cwd + "extensions/jsMath2jax.js",
        cwd + "extensions/tex2jax.js",
        cwd + "unpacked/extensions/TeX",
        cwd + "unpacked/extensions/jsMath2jax.js",
        cwd + "unpacked/extensions/tex2jax.js"
      ],
      extensionHtmlCss: [
        cwd + "extensions/HTML-CSS",
        cwd + "unpacked/extensions/HTML-CSS"
      ],
      // ## Choose Output
      htmlCssOutput: [
        cwd + "config/*HTMLorMML.js",
        cwd + "config/*HTMLorMML-full.js",
        cwd + "unpacked/config/*HTMLorMML.js",
        cwd + "unpacked/config/*HTMLorMML-full.js",
        cwd + "jax/output/HTML-CSS",
        cwd + "unpacked/jax/output/HTML-CSS"
      ],
      mathmlOutput: [
        cwd + "config/*HTMLorMML.js",
        cwd + "config/*HTMLorMML-full.js",
        cwd + "unpacked/config/*HTMLorMML.js",
        cwd + "unpacked/config/*HTMLorMML-full.js",
        cwd + "jax/output/NativeMML",
        cwd + "unpacked/jax/output/NativeMML"
      ],
      svgOutput: [
        cwd + "config/*SVG.js",
        cwd + "config/*SVG-full.js",
        cwd + "unpacked/config/*SVG.js",
        cwd + "unpacked/config/*SVG-full.js",
        cwd + "jax/output/SVG",
        cwd + "unpacked/jax/output/SVG"
      ],
      commonHtmlOutput: [
        cwd + "configs/*CHTML.js",
        cwd + "configs/*CHTML-full.js",
        cwd + "unpacked/config/*CHTML.js",
        cwd + "unpacked/configs/*CHTML-full.js",
        cwd + "jax/output/CommonHTML",
        cwd + "unpacked/jax/output/CommonHTML",
        cwd + "extensions/CHTML-preview.js",
        cwd + "unpacked/extensions/CHTML-preview.js"
      ],
      previewHtmlOutput: [
        cwd + "jax/output/PreviewHTML",
        cwd + "unpacked/jax/output/PreviewHTML",
        cwd + "extensions/fast-preview.js",
        cwd + "unpacked/extensions/fast-preview.js",
        cwd + "extensions/CHTML-preview.js",
        cwd + "unpacked/extensions/CHTML-preview.js"
      ],
      plainSourceOutput: [
        cwd + "jax/output/PlainSource",
        cwd + "unpacked/jax/output/PlainSource"
      ],
      //  ## Locales
      //  Removes all locale files. Change this as needed to keep your preferred language.
      //  **NOTE.** English strings are hardcoded.
      //  **NOTE.** If you fix the locale, drop the menu entry: http://docs.mathjax.org/en/latest/options/MathMenu.html#configure-mathmenu
      locales: [cwd + "localization", cwd + "unpacked/localization"],
      // ## Misc.
      miscConfig: [
        cwd + "config/local",
        cwd + "unpacked/config/local",
        cwd + "config/Accessible-full.js",
        cwd + "unpacked/config/Accessible-full.js",
        cwd + "config/Accessible.js",
        cwd + "unpacked/config/Accessible.js",
        cwd + "config/default.js",
        cwd + "unpacked/config/default.js",
        cwd + "config/Safe.js",
        cwd + "unpacked/config/Safe.js"
      ],
      a11yExtensions: [
        cwd + "extensions/AssistiveMML.js",
        cwd + "extensions/a11y",
        cwd + "unpacked/extensions/AssistiveMML.js",
        cwd + "unpacked/extensions/a11y"
      ],
      mathMenuExtension: [
        cwd + "extensions/MathMenu.js",
        cwd + "unpacked/extensions/MathMenu.js"
      ],
      miscExtensions: [
        cwd + "extensions/FontWarnings.js",
        cwd + "extensions/HelpDialog.js",
        cwd + "extensions/MatchWebFonts.js",
        cwd + "extensions/MathEvents.js",
        cwd + "extensions/MathMenu.js",
        cwd + "extensions/MathZoom.js",
        cwd + "extensions/Safe.js",
        cwd + "extensions/CHTML-preview.js",
        // "extensions/toMathML.js",  // only remove `toMathML.js` if you know exactly what you are doing.
        cwd + "unpacked/extensions/FontWarnings.js",
        cwd + "unpacked/extensions/HelpDialog.js",
        cwd + "unpacked/extensions/MatchWebFonts.js",
        cwd + "unpacked/extensions/MathEvents.js",
        cwd + "unpacked/extensions/MathMenu.js",
        cwd + "unpacked/extensions/MathZoom.js",
        cwd + "unpacked/extensions/Safe.js",
        cwd + "unpacked/extensions/CHTML-preview.js"
        // "unpacked/extensions/toMathML.js",  // only remove `toMathML.js` if you know exactly what you are doing.
      ],
      images: [
        cwd + "images" // these are used in the menu. Removing them will give you 404 errors but nothing will break.
      ],
      notcode: [
        cwd + ".gitignore",
        cwd + "docs",
        cwd + "test",
        cwd + "CONTRIBUTING.md",
        cwd + "README-branch.txt",
        cwd + "README.md",
        cwd + "bower.json",
        cwd + "composer.json",
        cwd + ".npmignore",
        cwd + "package.json",
        cwd + ".travis.yml",
        cwd + "latest.js"
      ]
    },
    "regex-replace": {
      // disable image fonts in default HTML-CSS config
      noImageFont: {
        src: [cwd + "unpacked/jax/output/HTML-CSS/config.js"],
        actions: [
          {
            name: "nullImageFont",
            search: /imageFont:[^,]+,/,
            replace: "imageFont: null,"
          }
        ]
      }
    },
    copy: {
      config: {
        src: "config-template.js",
        dest: cwd + "config/nteract.js"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-regex-replace");
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.registerTask("nteract", [
    // **Notes** on the template. When instructions say "Pick one", this means commenting out one item (so that it"s not cleaned).
    //
    //      Early choices.
    "clean:unpacked",
    // "clean:packed", // pick one -- packed for production, unpacked for development.
    "clean:allConfigs", // if you do not need any combined configuration files.
    //      Fonts. Pick at least one! Check notes above on configurations.
    "clean:fontAsana",
    "clean:fontGyrePagella",
    "clean:fontGyreTermes",
    "clean:fontLatinModern",
    "clean:fontNeoEuler",
    "clean:fontStix",
    "clean:fontStixWeb",
    // "clean:fontTeX",
    //      Font formats. Pick at least one (unless you use SVG output; then clean all).
    // "clean:dropFonts", // when using SVG output
    "clean:eot",
    "clean:otf",
    "clean:png",
    "clean:svg",
    // "clean:woff",
    //      Input. Pick at least one.
    "clean:asciimathInput",
    "clean:mathmlInput",
    // "clean:texInput",
    //       Output
    "clean:htmlCssOutput",
    "clean:mathmlOutput",
    "clean:svgOutput",
    "clean:previewHtmlOutput",
    // Extensions. You probably want to leave the set matching your choices.
    "clean:extensionsAsciimath",
    "clean:extensionsMathml",
    // "clean:extensionsTeX",
    "clean:extensionHtmlCss",
    // Other items
    "clean:locales",
    "clean:miscConfig",
    // "clean:miscExtensions", // You probably want these
    "clean:a11yExtensions",
    "clean:mathMenuExtension",
    "clean:images",
    "clean:notcode",
    "copy:config"
  ]);
};
