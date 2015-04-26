#!/usr/bin/env node

const fs = require('fs')
const packages = require('./skimdb.json').rows
const compact = require('lodash').compact

var names = packages.map(function (pkg) {
  return pkg.value.name;
})

fs.writeFileSync('./names.json', JSON.stringify(compact(names), null, 2))
