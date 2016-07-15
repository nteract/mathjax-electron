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

## Full API Documentation

### loadMathJax(document, callback)

Loads and configures MathJax if necessary.

**Parameters:**

- **document**: `Document`, A Document Object Model.
The MathJax Script is included in the <head> section of the HTML document.

- **callback**: `Callback`, A callback to run when MathJax is loaded.



### typesetMath(container, callback)

Typesets any math elements within the element.

**Parameters:**

- **container**: `HTMLElement`, The element whose math is to be typeset.

- **callback**: `Callback`, A callback to run when the typeset
is complete.



### loadAndTypeset(document, container, callback)

A helper function which loads MathJax if necessary and typesets any math
elements within the container.

**Parameters:**

- **document**: `Document`, A Document Object Model.
The MathJax Script is included in the <head> section of the HTML document.

- **container**: `HTMLElement`, The element whose math is to be typeset.

- **callback**: `Callback`, A callback to run when the typeset
is complete.
