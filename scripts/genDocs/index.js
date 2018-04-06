// external imports
const chokidar = require('chokidar')
// local imports
const quarkPaths = require('../filePath')
const GenDocs = require('./GenDocs')

const enableWatchMode = process.argv.slice(2) == '--watch'

const genDocs = new GenDocs(quarkPaths.packageDirs)

if (enableWatchMode) {
    // Regenerate component metadata when components or examples change.
    chokidar.watch(packages).on('change', (event, path) => genDocs.init())
} else {
    genDocs.init()
}

/**
 * Generates metdata structured the following way:
 *
 * [
 *     {
 *         section: 'foo',
 *         components: [
 *             {
 *                 component: 'asdf',
 *                 packages: ['quark-core'],
 *                 description: 'asdf is cool.',
 *                 props: {
 *                     ...
 *                 },
 *                 examples: [
 *                     {...}
 *                 ]
 *
 *             }
 *         ]
 *     },
 *     ...
 * ]
 */
