const assert = require("assert");
const snapshot = require("snap-shot");
const { typesetMath, loadMathJax, mathJaxPath } = require("../index");

describe("loading", () => {
  it("should load MathJax", done => {
    const headScript = `<script type="text/javascript" src="${mathJaxPath}"></script>`;
    assert.ok(typeof MathJax === "undefined", "MathJax should be undefined");
    loadMathJax(document, () => {
      assert.ok(typeof MathJax === "object", "MathJax should be defined");
      const script = document.getElementsByTagName("script")[1].outerHTML;
      assert.equal(script, headScript);

      //It would throw if it tries to load MathJax again because loadMathJax is called without document
      assert.doesNotThrow(loadMathJax);

      done();
    });
  });

  it("should output the correct MathJax script", done => {
    const math = "\\sum\\limits_{i=0}^{\\infty} \\frac{1}{n^2}";
    const latex = "$$" + math + "$$";

    const container = document.createElement("div");
    container.innerHTML = latex;
    assert.ok(typeof MathJax === "object", "MathJax should be defined");
    typesetMath(container, () => {
      snapshot(container.innerHTML);
      done();
    });
  });
});
