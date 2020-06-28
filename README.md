# serve-markdown-it-template-default

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

Simple default template for `serve-markdown-it`, supporting multiple color
themes and configurable syntax highlighting.

> README & DOCS TODO

### [Installation](#installation)
![npm badge](https://nodei.co/npm/serve-markdown-it.png?downloads=true&downloadRank=true&stars=true)

```bash
yarn add serve-markdown-it-template-default
```

### [Developing](#developing)

```bash
yarn gen-readme // update README.md
yarn docs // update DOCUMENTATION.md
yarn test // lint & mocha
yarn update-deps // bump all deps
```

### [Release History](#release_history)

See *[CHANGELOG.md](CHANGELOG.md)* for more information.

### [License](#license)

Distributed under the **MIT** license. See [LICENSE.md](LICENSE.md) for more information.

### [Contributing](#contributing)

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

---

## [API Reference](#api_reference)

> The standalone JSDoc reference can be found in [DOCUMENTATION.md](DOCUMENTATION.md)

## Modules

<dl>
<dt><a href="#module_serve-markdown-it-template-default">serve-markdown-it-template-default</a></dt>
<dd><p>Simple default template for <a href="https://github.com/f3rno/serve-markdown-it">serve-markdown-it</a>, supporting
multiple color themes and configurable syntax highlighting.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#genImageMarkdown">genImageMarkdown(params)</a> ⇒ <code>string</code></dt>
<dd><p>Generate a markdown string to display an image at <code>relPath</code>.</p>
</dd>
</dl>

<a name="module_serve-markdown-it-template-default"></a>

## serve-markdown-it-template-default
Simple default template for [serve-markdown-it](https://github.com/f3rno/serve-markdown-it), supporting
multiple color themes and configurable syntax highlighting.

**License**: MIT  
<a name="genImageMarkdown"></a>

## genImageMarkdown(params) ⇒ <code>string</code>
Generate a markdown string to display an image at `relPath`.

**Kind**: global function  
**Returns**: <code>string</code> - md  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | params |
| params.relPath | <code>string</code> | path relative to content root path. |
| params.name | <code>string</code> | image alt text. |



<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/serve-markdown-it-template-default.svg?style=flat-square
[npm-url]: https://npmjs.org/package/serve-markdown-it-template-default
[npm-downloads]: https://img.shields.io/npm/dm/serve-markdown-it-template-default.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/f3rno/serve-markdown-it-template-default/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/f3rno/serve-markdown-it-template-default
