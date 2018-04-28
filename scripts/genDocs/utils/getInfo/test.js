// external imports
import path from 'path'
// local imports
import * as utils from '..'
import getInfo, { examplesDir, getExamplePath } from '.'

test('returns the filename of every file in the corresponding example dir', async () => {
    // the expected directory for component examples
    const componentExamples = path.resolve(examplesDir, 'section', 'component')

    // mock a response for the util that looks at directory contents
    utils.readDir = jest.fn(path => {
        if (path === componentExamples) {
            return ['example1.js', 'example2.js']
        }
    })

    // mock content of the files
    utils.readFile = jest.fn(async filepath => {
        // if we are reading the first example
        if (filepath === path.resolve(componentExamples, 'example1.js')) {
            return 'export default "example1"'
        }

        if (filepath === path.resolve(componentExamples, 'example2.js')) {
            return 'export default "example2"'
        }
    })

    // make sure each example has the filename
    expect(
        (await getInfo({
            section: 'section',
            component: 'component'
        })).examples.map(({ filename }) => filename)
    ).toEqual(['example1.js', 'example2.js'])
})

test('skips readme', async () => {
    // the expected directory for component examples
    const componentExamples = path.resolve(examplesDir, 'section', 'component')

    // mock a response for the util that looks at directory contents
    utils.readDir = jest.fn(path => {
        if (path === componentExamples) {
            return ['example1.js', 'example2.js', 'README.md']
        }
    })

    // mock content of the files
    utils.readFile = jest.fn(async filepath => {
        // if we are reading the first example
        if (filepath === path.resolve(componentExamples, 'example1.js')) {
            return 'export default "example1"'
        }

        if (filepath === path.resolve(componentExamples, 'README.md')) {
            return 'asfd'
        }

        if (filepath === path.resolve(componentExamples, 'example2.js')) {
            return 'export default "example2"'
        }
    })

    // make sure each example has the filename
    expect(
        (await getInfo({
            section: 'section',
            component: 'component'
        })).examples.map(({ filename }) => filename)
    ).toEqual(['example1.js', 'example2.js'])
})

test('retrieves description from readme', async () => {
    // the expected directory for component examples
    const componentExamples = path.resolve(examplesDir, 'section', 'component')

    // mock a response for the util that looks at directory contents
    utils.readDir = jest.fn(path => {
        if (path === componentExamples) {
            return ['README.md']
        }
    })

    // mock content of the files
    utils.readFile = jest.fn(async filepath => {
        // if we are reading the first example
        if (filepath === path.resolve(componentExamples, 'README.md')) {
            return 'hello'
        }
    })

    // make sure each example has the filename
    expect(
        await getInfo({
            section: 'section',
            component: 'component'
        })
    ).toMatchObject({
        description: 'hello'
    })
})

test('includes the title of an example by parsing the magic comment', async () => {
    // the expected directory for component examples
    const componentExamples = path.resolve(examplesDir, 'section', 'component')

    // mock a response for the util that looks at directory contents
    utils.readDir = jest.fn(path => {
        if (path === componentExamples) {
            return ['example1.js']
        }
    })

    // mock content of the files
    utils.readFile = jest.fn(async filepath => {
        // if we are reading the first example
        if (filepath === path.resolve(componentExamples, 'example1.js')) {
            return `
              /* title: "Awesome Title" */
              export default () => 'asdf'
            `
        }
    })

    // make sure each example has the filename
    expect(
        (await getInfo({
            section: 'section',
            component: 'component'
        })).examples[0].title
    ).toEqual('Awesome Title')
})

test('includes the body of an example', async () => {
    // the expected directory for component examples
    const componentExamples = path.resolve(examplesDir, 'section', 'component')

    // mock a response for the util that looks at directory contents
    utils.readDir = jest.fn(path => {
        if (path === componentExamples) {
            return ['example1.js']
        }
    })

    // mock content of the files
    utils.readFile = jest.fn(async filepath => {
        // if we are reading the first example
        if (filepath === path.resolve(componentExamples, 'example1.js')) {
            return `
            export default () => <span>hello</span>
          `
        }
    })

    // make sure each example has the filename
    expect(
        (await getInfo({
            section: 'section',
            component: 'component'
        })).examples[0].contents
    ).toEqual('() => <span>hello</span>')
})
