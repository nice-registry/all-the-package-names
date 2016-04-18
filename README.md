# all-the-package-names

A perpetually out-of-date list of all the 263663+ public package names on npm

## Installation

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
// => 206271

names.filter(name => name.includes('banana'))
// => [ 'banana', 'banana-banana', 'banana-split', ...]

// note: example uses node4+ for arrow functions
```

## License

MIT
