#!/usr/bin/env node

const fs = require('fs')

require('superagent')
  .get('https://skimdb.npmjs.com/registry/_design/scratch/_view/byField')
  .done(function (data) {
    fs.writeFileSync('./skimdb.json', JSON.stringify(data, null, 2))
  })
