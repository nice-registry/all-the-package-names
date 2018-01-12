# all-the-package-names

A list of all the public package names on npm.

- Includes scoped packages
- Sorted by [dependent count](https://github.com/zeke/dependent-counts)
- Uses npm's  [replicate.npmjs.com](https://github.com/npm/registry/blob/198b449e5ec11f0cc3e424ce2721dd66e8111589/docs/follower.md) service.
- Updated [daily](http://zeke.sikelianos.com/npm-and-github-automation-with-heroku/)

## Installation

```sh
npm install all-the-package-names --save
```

## Usage

The module exports a big flat array of package names:

```js
const names = require("all-the-package-names")

// Most-depended-on names are first. See what's popular!
names.slice(0,5)
// [
//   'mocha',
//   'chai',
//   'lodash',
//   'grunt',
//   'eslint'
// ]

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

- [dependent-counts](https://github.com/zeke/dependent-counts): Get counts of how many packages depend on the given package. Works offline.
- [lodash](https://github.com/lodash/lodash): The modern build of lodash modular utilities.
- [ora](https://github.com/sindresorhus/ora): Elegant terminal spinner
- [package-stream](https://github.com/zeke/package-stream): An endless stream of clean package data from the npm registry.
- [tap-spec](https://github.com/scottcorgan/tap-spec): Formatted TAP output like Mocha&#39;s spec reporter
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers

## License

MIT
