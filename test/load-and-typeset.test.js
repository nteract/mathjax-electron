const assert = require("assert");
const snapshot = require("snap-shot");

const { loadAndTypeset } = require("../index");

describe("load and typeset", () => {
  it("should should load and typeset", done => {
    const math = "\\sum\\limits_{i=0}^{\\infty} \\frac{1}{n^2}";
    const latex = "$$" + math + "$$";

    const container = document.createElement("div");
    container.innerHTML = latex;
    assert.ok(typeof MathJax === "undefined", "MathJax should be undefined");
    loadAndTypeset(document, container, () => {
      assert.ok(typeof MathJax === "object", "MathJax should be defined");
      snapshot(container.innerHTML);
      done();
    });
  });
});
