"use strict";

var path = require('path');

module.exports = {
    loadMathJax: function(document) {
        if (typeof MathJax === "undefined" || MathJax === null) {
            var script = document.createElement("script");

            script.addEventListener("load", function() {
                configureMathJax();
            });
            script.type = "text/javascript";

            try {
                script.src = path.join(__dirname, "..", "resources",
                    "MathJax", "MathJax.js?delayStartupUntil=configured");

                document.getElementsByTagName("head")[0].appendChild(script);
            } catch (error) {
                throw new Error(error.message, "loadMathJax");
            }
        }
    },

    mathProcessor: function(container) {
        try {
            typesetMath(container);
        } catch (error) {
            try {
                setTimeout(typesetMath, 1000, container)
            } catch (error) {
                throw new Error(error.message, "mathProcessor");
            }
        }
    }
};

var typesetMath = function(container) {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, container]);
};

var configureMathJax = function() {
    MathJax.Hub.Config({
        jax: ["input/TeX", "output/SVG"],
        extensions: [],
        TeX: {
            extensions: ["AMSmath.js", "AMSsymbols.js", "noErrors.js", "noUndefined.js"]
        },
        SVG: {
            font: "STIX-Web"
        },
        messageStyle: "none"
    });
    MathJax.Hub.Configured();
};
