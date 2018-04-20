// local imports
import * as parse from '../parseFile'
import buildGraph from './buildGraph'

test('includes intersections', async () => {
    // some filepaths to test
    const filepaths = ['1', '2', '3']

    parse.parseFile = jest.fn(value => {
        // if we passed in the first file
        if (value === filepaths[0]) {
            // return a file that does not depend on any
            return parse.parseText(`
              export type Foo = {
                a: string
              }
            `)
        }
        // if we passed in the second file
        if (value === filepaths[1]) {
            // return a file that depends on 1 and 3
            return parse.parseText(`
                export type Baz = Foo & Bar & {
                  b: string
                }
            `)
        }
        // if we passed in the third file
        if (value === filepaths[2]) {
            // return contents that only depends on 1
            return parse.parseText(`
              export type Bar = Foo & {
                b: string
              }
            `)
        }
    })

    // get the graph of response
    expect(await buildGraph(filepaths)).toEqual([
        {
            filepath: '1',
            dependsOn: []
        },
        {
            filepath: '2',
            dependsOn: ['1', '3']
        },
        {
            filepath: '3',
            dependsOn: ['1']
        }
    ])
})

test('excludes paths without type definitions', async () => {
    // some filepaths to test
    const filepaths = ['1', '2', '3']

    parse.parseFile = jest.fn(value => {
        // if we passed in the first file
        if (value === filepaths[0]) {
            // return a file that does not depend on any
            return parse.parseText(`
              export type Foo = {
                a: string
              }
            `)
        }
        // if we passed the fourth file
        if (value === filepaths[1]) {
            return parse.parseText('export default 1 + 1')
        }

        // if we passed the fourth file
        if (value === filepaths[2]) {
            return parse.parseText('export default 1 + 1')
        }
    })

    // get the graph of response
    expect(await buildGraph(filepaths)).toEqual([
        {
            filepath: '1',
            dependsOn: []
        }
    ])
})

test('includes aliases', async () => {
    // some filepaths to test
    const filepaths = ['1', '2']

    parse.parseFile = jest.fn(value => {
        // if we passed in the first file
        if (value === filepaths[0]) {
            // return a file that does not depend on any
            return parse.parseText(`
              export type Foo = {
                a: string
              }
            `)
        }
        // if we passed the fourth file
        if (value === filepaths[1]) {
            return parse.parseText(`
              export type Bar = Foo
            `)
        }
    })

    // get the graph of response
    expect(await buildGraph(filepaths)).toEqual([
        {
            filepath: '1',
            dependsOn: []
        },

        {
            filepath: '2',
            dependsOn: ['1']
        }
    ])
})

test('includes unions', async () => {
    // some filepaths to test
    const filepaths = ['1', '2', '3']

    parse.parseFile = jest.fn(value => {
        // if we passed in the first file
        if (value === filepaths[0]) {
            // return a file that does not depend on any
            return parse.parseText(`
              export type Foo = {
                a: string
              }
            `)
        }
        // if we passed in the second file
        if (value === filepaths[1]) {
            // return a file that depends on 1 and 3
            return parse.parseText(`
                export type Baz = Foo | Bar
            `)
        }
        // if we passed in the third file
        if (value === filepaths[2]) {
            // return contents that only depends on 1
            return parse.parseText(`
              export type Bar = Foo | {
                b: string
              }
            `)
        }
    })

    // get the graph of response
    expect(await buildGraph(filepaths)).toEqual([
        {
            filepath: '1',
            dependsOn: []
        },
        {
            filepath: '2',
            dependsOn: ['1', '3']
        },
        {
            filepath: '3',
            dependsOn: ['1']
        }
    ])
})

test('only includes the initial declaration of a type', async () => {
    // some filepaths to test
    const filepaths = ['1', '2']

    parse.parseFile = jest.fn(value => {
        // if we passed in the first file
        if (value === filepaths[0]) {
            // return a file that does not depend on any
            return parse.parseText(`
              export type Foo = {
                a: string
              }
            `)
        }
        // if we passed the fourth file
        if (value === filepaths[1]) {
            return parse.parseText("export { Foo } from 'asdf'")
        }
    })

    // get the graph of response
    expect(await buildGraph(filepaths)).toEqual([
        {
            filepath: '1',
            dependsOn: []
        }
    ])
})

test('exclused locally defined types', async () => {
    // some filepaths to test
    const filepaths = ['1', '2']

    parse.parseFile = jest.fn(value => {
        // if we passed in the first file
        if (value === filepaths[0]) {
            // return a file that does not depend on any
            return parse.parseText(`
              export type Blah = {
                a: string
              }
            `)
        }
        // if we passed in the third file
        if (value === filepaths[1]) {
            // return contents that only depends on 1
            return parse.parseText(`
              type Blah = {
                b: string
              }

              export type Bar = Blah | {
                c: string
              }
            `)
        }
    })

    // get the graph of response
    expect(await buildGraph(filepaths)).toEqual([
        {
            filepath: '1',
            dependsOn: []
        },
        {
            filepath: '2',
            dependsOn: []
        }
    ])
})
