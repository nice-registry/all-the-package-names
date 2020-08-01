# all-the-package-names

A list of all the public package names on npm. The list is just a JSON file and can be used wherever.

## Highlights

- Includes scoped packages.
- Sorted by [dependent count](https://github.com/zeke/dependent-counts).
- Uses npm's [replicate.npmjs.com](https://github.com/npm/registry/blob/198b449e5ec11f0cc3e424ce2721dd66e8111589/docs/follower.md) service.
- Updated every 8 hours.

## Install

```sh
npm install all-the-package-names
```

## Usage

```js
const names = require('all-the-package-names')

// Most-depended-on names are first. See what's popular!
names.slice(0, 5)
/*
[
  'mocha',
  'chai',
  'lodash',
  'grunt',
  'eslint'
]
*/

names.includes('superagent')
// => true

names.includes('crazy-new-package-name')
// => false

names.length
// => 286289

names.filter(name => name.includes('banana'))
// => [ 'banana', 'banana-banana', 'banana-split', ...]
```

## CLI Usage

```sh
$ npm i -g all-the-package-names
$ all-the-package-names
mocha
chai
lodash
grunt
eslint
...
```

## Common pitfalls

Note that while mixed-case package names are no longer allowed to be published
to the npm registry, there are over 2800 legacy mixed-case packages, many of 
which have the same spelling as other existing lowercase packages. See [nice-registry/mixed-case-package-names](https://github.com/nice-registry/mixed-case-package-names)
for the full list.

To avoid the mixed-case names when working with this data, just filter them out:

```js
const names = require('all-the-package-names').filter(name => name === name.toLowerCase())
```
