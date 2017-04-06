var assert = require("assert");
var path = require("path");
var mathJaxHelper = require("../index");

describe("loading", function(done) {
  it("should load MathJax", function() {
    var mathJaxPath = path.join(__dirname, "..", "resources");
    var headScript = '<script type="text/javascript" src="' +
      mathJaxPath +
      '/MathJax/MathJax.js?config=electron"></script>';
    assert.ok(typeof MathJax === "undefined", "MathJax should be undefined");
    mathJaxHelper.loadMathJax(document, function() {
      assert.ok(typeof MathJax === "object", "MathJax should be defined");
      var script = document.getElementsByTagName("script")[1].outerHTML;
      assert.equal(script, headScript);

      //It would throw if it tries to load MathJax again because loadMathJax is called without document
      assert.doesNotThrow(mathJaxHelper.loadMathJax);

      done();
    });
  });

  it("should output the correct MathJax script", function(done) {
    var math = "\\sum\\limits_{i=0}^{\\infty} \\frac{1}{n^2}";
    var latex = "$$" + math + "$$";

    var container = document.createElement("div");
    container.innerHTML = latex;
    assert.ok(typeof MathJax === "object", "MathJax should be defined");
    mathJaxHelper.typesetMath(container, function() {
      assert.equal(
        container.getElementsByClassName("MathJax_SVG_Display").length,
        1
      );
      assert.equal(container.getElementsByClassName("MathJax_SVG").length, 1);
      assert.equal(
        container.getElementsByTagName("script")[0].textContent,
        math
      );
      done();
    });
  });
});
