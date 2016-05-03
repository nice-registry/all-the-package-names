#!/usr/bin/env node

const fs = require('fs')
const JSONStream = require('JSONStream')
const es = require('event-stream')
const compact = require('lodash').compact

var names = []

fs.createReadStream('./skimdb.json')
  .pipe(JSONStream.parse('rows.*'))
  .pipe(es.mapSync(function (pkg) {
    names.push(pkg.value.name)
    process.stdout.write('.')
    return pkg
  }))
  .on('end', function(){
    fs.writeFileSync('./names.json', JSON.stringify(compact(names), null, 2))
    console.log('\nwrote names.json')
  })
