"use strict";

var path = require('path');

module.exports = {
  loadMathJax: function(document, callback) {
    callback = (typeof callback === 'function') ? callback : function() {};
    if (typeof MathJax === "undefined" || MathJax === null) {
      var script = document.createElement("script");

      script.addEventListener("load", function() {
        configureMathJax();
        callback();
      });
      script.type = "text/javascript";

      try {
        script.src = path.join(__dirname, "..", "resources", "MathJax",
        "MathJax.js?delayStartupUntil=configured");

        document.getElementsByTagName("head")[0].appendChild(script);
      } catch (error) {
        throw new Error(error.message, "loadMathJax");
      }
    } else {
      callback();
    }
  },

  typesetMath: function(container, callback) {
    callback = (typeof callback === 'function') ? callback : function() {};
    try {
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, container], callback);
    } catch (error) {
      throw new Error(error.message, "typesetMath");
    }
  },

  mathProcessor: function(document, container, callback) {
    this.loadMathJax(document, function() {
      module.exports.typesetMath(container, callback);
    });
  }
};

var configureMathJax = function() {
  MathJax.Hub.Config({
    jax: ["input/TeX", "output/SVG"],
    extensions: ["tex2jax.js"],
    messageStyle: "none",
    showMathMenu: false,
    tex2jax: {
      inlineMath: [
        ['$', '$'],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ['$$', '$$'],
        ["\\[", "\\]"]
      ],
      processEscapes: true,
      processEnvironments: true,
      preview: "none"
    },
    TeX: {
      extensions: ["AMSmath.js", "AMSsymbols.js", "noErrors.js", "noUndefined.js"]
    },
    SVG: {
      font: "STIX-Web"
    }
  });
  MathJax.Hub.Configured();
};
