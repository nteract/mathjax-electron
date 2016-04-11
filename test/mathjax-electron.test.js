import {assert} from 'chai';
import {jsdom} from 'jsdom';
var path = require('path');
var mathJaxHelper = require('../src/mathjax-electron');

describe('latex transform', function() {
    beforeEach(function() {
        this.document = jsdom();
    });

    it('should load MathJax', function() {
        let mathJaxPath = path.join(__dirname, "..", "resources");
        let headScript = '<script type="text/javascript" src="' + mathJaxPath + '/MathJax/MathJax.js?delayStartupUntil=configured"></script>'
        mathJaxHelper.loadMathJax(this.document);
        let script = this.document.getElementsByTagName('script')[0].outerHTML
        return assert.equal(script, headScript);
    });

    it('should output the correct MathJax script', function() {
        let latex = '\sum\limits_{i=0}^{\infty} \frac{1}{n^2}';
        let mathJaxScript = '<script type="math/tex">\sum\limits_{i=0}^{\infty} \frac{1}{n^2}</script>';

        let container = this.document.createElement('script');
        container.type = 'math/tex';
        container.innerHTML = latex.replace('<br>', '');

        mathJaxHelper.loadMathJax(this.document);
        mathJaxHelper.mathProcessor(container);
        return assert.equal(container.outerHTML, mathJaxScript);
    });
});
