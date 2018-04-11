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
genDocs.writeResult()

if (enableWatchMode) {
    // get list of dirs to keep an eye on
    const componentsDirs = quarkPaths.packageDirs.map(({ componentsDir }) => componentsDir)
    // Regenerate component metadata when components or examples change
    chokidar.watch([...componentsDirs, quarkPaths.examples]).on('change', genDocs.writeResult)
}
