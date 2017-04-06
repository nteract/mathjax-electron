var assert = require("assert");
var path = require("path");
var mathJaxHelper = require("../index");

describe("load and typeset", function() {
  it("should should load and typeset", function(done) {
    var math = "\\sum\\limits_{i=0}^{\\infty} \\frac{1}{n^2}";
    var latex = "$$" + math + "$$";

    var container = document.createElement("div");
    container.innerHTML = latex;
    assert.ok(typeof MathJax === "undefined", "MathJax should be undefined");
    mathJaxHelper.loadAndTypeset(document, container, function() {
      assert.ok(typeof MathJax === "object", "MathJax should be defined");
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
