// local imports
import getLocation from '.'

test('can extract packages', () => {
    // the packages to test
    for (const pkg of ['quark-web', 'quark-core', 'quark-native']) {
        // generate a filepath with the package name
        const filepath = `root/${pkg}/src/components/section/foo.js`
        expect(getLocation(filepath)).toMatchObject({
            package: pkg
        })
    }
})

test('can extract sections', () => {
    // the packages to test
    for (const pkg of ['quark-web', 'quark-core', 'quark-native']) {
        // generate a filepath with the package name
        const filepath = `root/${pkg}/src/components/section/foo.js`
        expect(getLocation(filepath)).toMatchObject({
            section: 'section'
        })
    }
})
