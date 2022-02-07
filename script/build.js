#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const isNumber = require('is-number')

const filename = path.join(__dirname, '../names.json')
const names = Object.keys(require('all-the-package-repos')).filter(name => !isNumber(name))

fs.writeFileSync(filename, JSON.stringify(names, null, 2))
