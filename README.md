# all-the-package-names

A perpetually out-of-date list of all the 198,000+ public package names on npm

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install all-the-package-names --save
```

## Usage

```js
const names = require("all-the-package-names")

names.indexOf('superagent') > -1
// => true

names.indexOf('crazy-new-package-name') > -1
// => false

names.length
// => 198679

names.filter(name => name.includes('banana'))
// => [ 'banana', 'banana-banana', 'banana-split', ...]

// note: example uses iojs with --harmony_arrow_functions enabled
```

## License

MIT
