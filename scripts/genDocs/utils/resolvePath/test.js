// local imports
import * as utils from '..'
import resolvePath from '.'

test('uses a directory if there is no file with the name present', async () => {
    // mock the utility that looks for files and directories
    utils.readFile = jest.fn(async path => {
        // if we are looking for the path by a filename
        if (path === 'root/1.js') {
            throw new Error('Could not open file with that name')
        }

        // if we are looking for the path as a directory
        if (path === 'root/1/index.js') {
            return 'asdf'
        }
    })

    // attempt to look up the path as a directory and make sure it matches our expectation
    expect(await resolvePath('root/1')).toEqual('asdf')
})

test('uses a file when one exists', async () => {
    // mock the utility that looks for files and directories
    utils.readFile = jest.fn(async path => {
        // if we are looking for the path by a filename
        if (path === 'root/1.js') {
            return 'asdf'
        }
    })

    // attempt to look up the path as a directory and make sure it matches our expectation
    expect(await resolvePath('root/1')).toEqual('asdf')
})

test('can import *.js files directly', async () => {
    // mock the utility that looks for files and directories
    utils.readFile = jest.fn(async path => {
        // if we are looking for the path by a filename
        if (path === 'root/1.js') {
            return 'asdf'
        }
    })

    // attempt to look up the path as a directory and make sure it matches our expectation
    expect(await resolvePath('root/1')).toEqual('asdf')
})
