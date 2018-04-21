// local imports
import getLocation from '.'

test('can extract packages', () => {
    // the packages to test
    for (const pkg of ['quark-web', 'quark-core', 'quark-native']) {
        // generate a filepath with the package name
        const filepath = `root/${pkg}/src/components/section/foo.js`

        // make sure we got back what we expected
        expect(getLocation(filepath)).toMatchObject({
            package: pkg
        })
    }
})

test('can extract sections', () => {
    // generate a filepath with the package name
    const filepath = `root/quark-web/src/components/section/foo.js`

    // make sure we got back what we expected
    expect(getLocation(filepath)).toMatchObject({
        section: 'section'
    })
})
