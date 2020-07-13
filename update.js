const path = require('path')
const writeJsonFile = require('write-json-file')
const ora = require('ora')
const numberSort = require('num-sort')
const registry = require('package-stream')()
const totalDirectDependents = new Map(require('dependent-counts').map(({ name, totalDirectDependents }) => [name, totalDirectDependents]))

const packageNames = new Set()
const spinner = ora('Collecting package names').start()

registry
  .on('package', ({ name }) => {
    if (typeof name === 'string') {
      packageNames.add(name)
      spinner.text = `${packageNames.size} package names collected`
    }
  })
  .on('up-to-date', async () => {
    const filename = path.join(__dirname, 'names.json')
    const finalPackageNames = [...packageNames].sort((a, b) => numberSort.descending(totalDirectDependents.get(a) || 0, totalDirectDependents.get(b) || 0))

    await writeJsonFile(filename, finalPackageNames, { indent: undefined })
    spinner.stop()
    console.log(`Wrote ${finalPackageNames.length} package names to ${filename}`)
    process.exit()
  })
