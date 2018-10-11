# mathjax-electron

[![Build Status](https://travis-ci.org/nteract/mathjax-electron.svg?branch=master)](https://travis-ci.org/nteract/mathjax-electron)

A trimmed down version of the [MathJax](https://www.mathjax.org/) library for use with electron and modern browsers.

`mathjax-electron` allows you to render math inside your application while keeping the package size at a minimum. To achieve this we provide a preconfigured MathJax environment with only the necessary bits of the MathJax Library included.

The package size is ~1 MB compared to 66 MB for a full MathJax installation. If you need support for different output formats and legacy browsers try [`mathjax-node`](https://github.com/mathjax/MathJax-node).

## Installation

```bash
npm install mathjax-electron
```

## Usage

### Loading MathJax

Place the following line in the `<head>` section of your document:

```html
<script type="text/javascript" src="./node_modules/mathjax-electron/resources/MathJax/MathJax.js?config=electron"></script>
```

Now you can use MathJax inside you application.

To trigger a rendering on a specific container, you can either use our helper module:

```javascript
const { typesetMath } = require("mathjax-electron");

const container = document.createElement("div");
container.innerHTML = "$$\\sum\\limits_{i=0}^{\\infty} \\frac{1}{n^2}$$";
typesetMath(container);
```

or the MathJax global:

```javascript
const container = document.createElement("div");
container.innerHTML = "$$\\sum\\limits_{i=0}^{\\infty} \\frac{1}{n^2}$$";

MathJax.Hub.Queue(["Typeset", MathJax.Hub, container]);
```

For more information about synchronizing your code, consult the [MathJax documentation](http://docs.mathjax.org/en/latest/advanced/synchronize.html).

### Loading MathJax Dynamically

To load MathJax dynamically, you can do:

```javascript
const { loadAndTypeset } = require("mathjax-electron");

const container = document.createElement("div");
container.innerHTML = "$$\\sum\\limits_{i=0}^{\\infty} \\frac{1}{n^2}$$";

loadAndTypeset(document, container);
```

If used for the first time it will initialize MathJax and trigger a rendering. After that it won't load MathJax again and only trigger the rendering.

### Manually Loading MathJax

For applications to manually loaded, or directly injected into the HTML, `mathjax-electron` exports the absolute path to load the configured MathJax Library.

```javascript
const { mathJaxPath } = require("mathjax-electron");
// /.../node_modules/mathjax-electron/MathJax-2.7.5/MathJax.js?config=nteract
```
