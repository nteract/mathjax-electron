"use strict";

var path = require("path");

/**
 * Loads and configures MathJax if necessary.
 * @param  {Document} document - A Document Object Model.
 * The MathJax Script is included in the <head> section of the HTML document.
 * @param  {Callback} callback - A callback to run when MathJax is loaded.
 */
function loadMathJax(document, callback) {
  if (typeof MathJax === "undefined" || MathJax === null) {
    var script = document.createElement("script");

    if (typeof callback === "function") {
      script.addEventListener("load", function() {
        callback();
      });
    }

    script.type = "text/javascript";

    try {
      script.src = path.join(
        __dirname,
        "resources",
        "MathJax",
        "MathJax.js?config=electron"
      );

      document.getElementsByTagName("head")[0].appendChild(script);
    } catch (error) {
      throw new Error(error.message, "loadMathJax");
    }
  } else {
    if (typeof callback === "function") callback();
  }
}

/**
 * Typesets any math elements within the element.
 * @param  {HTMLElement}  container - The element whose math is to be typeset.
 * @param  {Callback}     callback  - A callback to run when the typeset
 * is complete.
 */
function typesetMath(container, callback) {
  try {
    if (typeof callback === "function") {
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, container], callback);
    } else {
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, container]);
    }
  } catch (error) {
    throw new Error(error.message, "typesetMath");
  }
}

/**
 * A helper function which loads MathJax if necessary and typesets any math
 * elements within the container.
 * @param  {Document}     document  - A Document Object Model.
 * The MathJax Script is included in the <head> section of the HTML document.
 * @param  {HTMLElement}  container - The element whose math is to be typeset.
 * @param  {Callback}     callback  - A callback to run when the typeset
 * is complete.
 */
function loadAndTypeset(document, container, callback) {
  loadMathJax(document, function() {
    typesetMath(container, callback);
  });
}

module.exports = {
  loadMathJax: loadMathJax,
  typesetMath: typesetMath,
  loadAndTypeset: loadAndTypeset
};
