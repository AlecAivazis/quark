// external imports
const path = require('path')
// project root
const root = path.join(__dirname, '..')
// the directory to build to inside of the packages
const buildDir = 'build'
// the package directory
const packageDir = 'packages'
// the directory within the package with the source
const src = 'src'

// the list of packages
const packages = ['quark-core', 'quark-web', 'quark-native']

// the list of package directories
const packageDirs = packages.map(pkg => {
    const dir = path.join(packageDir, pkg)
    return {
        sourceDir: path.join(dir, src),
        buildDir: path.join(dir, buildDir),
        packageDir: dir
    }
})

module.exports = {
    docs: path.join(root, 'docs'),
    packages,
    packageDirs
}
