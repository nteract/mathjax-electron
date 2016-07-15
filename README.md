# mathjax-electron

A trimmed down version of the MathJax library for use with electron

## Installation

```
npm install mathjax-electron
```

## Example
```javascript
var mathjaxHelper = require('mathjax-electron')

var container = document.createElement('div')
container.innerHTML = '$$\\sum\\limits_{i=0}^{\\infty} \\frac{1}{n^2}$$'

mathjaxHelper.loadAndTypeset(document, container)

```

## Documentation
The full API documentation can be found [here](http://nteract.io/mathjax-electron/).
