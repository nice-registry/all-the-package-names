# all-the-package-names

*Maintained by [jsDelivr](https://github.com/jsdelivr). Please consider [becoming a sponsor](https://github.com/sponsors/jsdelivr) to support us.*

A list of all the public package names on npm.

- Includes scoped packages
- Updated daily

## Installation

```sh
npm install all-the-package-names --save
```

## Usage

The module exports a big flat array of package names:

```js
const names = require("all-the-package-names")

names.includes('superagent')
// => true

// Check if a given package name exists
names.includes('crazy-new-package-name')
// => false

names.length
// => 286289

names.filter(name => name.includes('banana'))
// => [ 'banana', 'banana-banana', 'banana-split', ...]

// Note: This example requires node 4 or greater because it uses
// const, arrow functions, and the `includes` array/string helper.

```

## CLI Usage

You can also use it on the command line. Newline-delimited names are piped to
STDOUT:

```sh
npm i -g all-the-package-names
all-the-package-names | grep spell
```

## ⚠️ Gotchas

Note that while mixed-case package names are no longer allowed to be published
to the npm registry, there are over 2800 legacy mixed-case packages, many of
which have the same spelling as other existing lowercase packages. See [nice-registry/mixed-case-package-names](https://github.com/nice-registry/mixed-case-package-names)
for the the full list.

To avoid the mixed-case names when working with this data,
just filter them out:

```js
const names = require('all-the-package-names')
  .filter(name => name === name.toLowerCase())
```

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [all-the-package-repos](https://github.com/nice-registry/all-the-package-repos): Normalized repository URLs for every package in the npm registry.
- [is-number](https://github.com/jonschlinkert/is-number): JavaScript/Node.js utility. Returns `true` if the value is a number or string number. Useful for checking regex match results, user input, parsed strings, etc.
- [tap-spec](https://github.com/scottcorgan/tap-spec): Formatted TAP output like Mocha&#39;s spec reporter
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers

## License

MIT
