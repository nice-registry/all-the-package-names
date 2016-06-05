# all-the-package-names

A list of all the public package names on npm. Updated hourly.

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

You can also use it on the command line. Newline-delimited names are piped to
STDOUT:

```sh
npm i -g all-the-package-names
all-the-package-names | grep spell
```

## License

MIT
