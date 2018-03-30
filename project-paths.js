const path = require('path')

const root = __dirname
const packages = path.join(root, 'packages')
const docs = path.join(root, 'docs')

module.exports = {
    root,
    packages,
    docs,
    core: path.join(packages, 'quark-core', 'src'),
    web: path.join(packages, 'quark-web', 'src'),
    native: path.join(packages, 'quark-native', 'src'),
    output: path.join(docs, 'componentData.js')
}
