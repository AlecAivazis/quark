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

// external imports
import chokidar from 'chokidar'
// local imports
import quarkPaths from '../filePath'
import GenDocs from './GenDocs'

const enableWatchMode = process.argv.slice(2) == '--watch'

const genDocs = new GenDocs(quarkPaths.packageDirs)

if (enableWatchMode) {
    // initial run
    genDocs.init()
    // get list of dirs to keep an eye on
    const componentsDirs = quarkPaths.packageDirs.map(({ componentsDir }) => componentsDir)
    // Regenerate component metadata when components or examples change
    chokidar
        .watch([...componentsDirs, quarkPaths.examples])
        .on('change', (event, path) => genDocs.init())
} else {
    genDocs.init()
}
