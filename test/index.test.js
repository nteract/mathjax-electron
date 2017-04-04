var assert = require("assert");
var path = require("path");
var mathJaxHelper = require("../index");

describe("latex transform", function() {
  it("should load MathJax", function() {
    var mathJaxPath = path.join(__dirname, "..", "resources");
    var headScript = '<script type="text/javascript" src="' +
      mathJaxPath +
      '/MathJax/MathJax.js?config=electron"></script>';
    mathJaxHelper.loadMathJax(document);
    var script = document.getElementsByTagName("script")[1].outerHTML;
    return assert.equal(script, headScript);
  });

  it("should output the correct MathJax script", function(done) {
    var math = "\\sum\\limits_{i=0}^{\\infty} \\frac{1}{n^2}";
    var latex = "$$" + math + "$$";

    var container = document.createElement("div");
    container.innerHTML = latex;
    mathJaxHelper.loadMathJax(document, function() {
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

  it("should should load and typeset", function(done) {
    var math = "\\sum\\limits_{i=0}^{\\infty} \\frac{1}{n^2}";
    var latex = "$$" + math + "$$";

    var container = document.createElement("div");
    container.innerHTML = latex;
    mathJaxHelper.loadAndTypeset(document, container, function() {
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
