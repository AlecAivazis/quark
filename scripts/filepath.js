// external imports
const path = require('path')

// the directory to build to inside of the packages
const buildDir = 'build'
// the package directory
const packageDir = 'packages'
// the directory within the package with the source
const src = 'src'

// the list of packages
export const packages = ['quark-core', 'quark-web', 'quark-native']

// the list of package directories
export const packageDirs = packages.map(pkg => {
    const dir = path.join(packageDir, pkg)
    return {
        sourceDir: path.join(dir, src),
        buildDir: path.join(dir, buildDir),
        packageDir: dir
    }
})
