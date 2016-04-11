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
});
