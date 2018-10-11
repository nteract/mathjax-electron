MathJax.Hub.Config({
  extensions: [
    "tex2jax.js",
    "MathEvents.js",
    "MathZoom.js",
    "toMathML.js",
    "TeX/noErrors.js",
    "TeX/noUndefined.js",
    "TeX/AMSmath.js",
    "TeX/AMSsymbols.js",
    "Safe.js"
  ],
  jax: ["input/TeX", "output/CommonHTML"],
  messageStyle: "none",
  showMathMenu: false,
  skipStartupTypeset: true,
  tex2jax: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    preview: "none"
  }
});

MathJax.Ajax.loadComplete("[MathJax]/config/nteract.js");
