// local imports
import * as parse from '../parse'
import collectExports, { _memoizeStore, DEFAULT_EXPORT } from '.'

// make sure to clear the memoization after each test
afterEach(() => {
    for (const memoKey of Object.keys(_memoizeStore)) {
        Reflect.deleteProperty(_memoizeStore, memoKey)
    }
})

test('collects named arrow-function component exports', async () => {
    // provide mocked content when parsing example file
    parse.parseFile = jest.fn(() =>
        parse.parseText(`
          type Props = {
            a: string
          }

          export const Foo = (props: Props) => (
            'hello'
          )
        `)
    )

    expect((await collectExports('foo.js')).components.Foo).toEqual({
        props: {
            a: {
                value: 'string',
                required: true,
                nullable: false
            }
        }
    })
})

test('collects named class-based exports', async () => {
    // provide mocked content when parsing example file
    parse.parseFile = jest.fn(() =>
        parse.parseText(`
          type Props = {
            a: string
          }

          export class Foo extends React.Component<Props> {}
        `)
    )

    expect((await collectExports('foo.js')).components.Foo).toEqual({
        props: {
            a: {
                value: 'string',
                required: true,
                nullable: false
            }
        }
    })
})

test('collects default component exports from arrow-function reference', async () => {
    // provide mocked content when parsing example file
    parse.parseFile = jest.fn(() =>
        parse.parseText(`
          type Props = {
            a: string
          }

          const Foo = (props: Props) => (
            'hello'
          )

          export default Foo
        `)
    )

    expect((await collectExports('foo.js')).components[DEFAULT_EXPORT]).toEqual({
        props: {
            a: {
                value: 'string',
                required: true,
                nullable: false
            }
        }
    })
})

test('collects default component exports from class reference', async () => {
    // provide mocked content when parsing example file
    parse.parseFile = jest.fn(() =>
        parse.parseText(`
        type Props = {
          a: string
        }

        class Foo extends React.Component<Props> {
          render() {
            return 'hello'
          }
        }
        export default Foo
      `)
    )

    expect((await collectExports('foo.js')).components[DEFAULT_EXPORT]).toEqual({
        props: {
            a: {
                value: 'string',
                required: true,
                nullable: false
            }
        }
    })
})

test('collects inline default component exports', async () => {
    // provide mocked content when parsing example file
    parse.parseFile = jest.fn(() =>
        parse.parseText(`
          type Props = {
            a: string
          }

          export default function(props: Props) {
            return 'hello'
          }
      `)
    )

    expect((await collectExports('foo.js')).components[DEFAULT_EXPORT]).toEqual({
        props: {
            a: {
                value: 'string',
                required: true,
                nullable: false
            }
        }
    })
})

test('collects type exports', async () => {
    // provide mocked content when parsing example file
    parse.parseFile = jest.fn(() =>
        parse.parseText(`
          export type Props = {
            a: string
          }
      `)
    )

    expect((await collectExports('foo.js')).types.Props).toMatchObject({
        a: {
            value: 'string',
            required: true,
            nullable: false
        }
    })
})

test('includes type imports from a file', async () => {
    // provide mocked content when parsing example file
    parse.parseFile = jest.fn(filepath => {
        // if we are parsing the first file
        if (filepath === '1.js') {
            // return contents that import a type from another file
            return parse.parseText(`
                import type { Foo } from './2'

                export type Props = Foo & {
                    a: string
                }
            `)
        }
        // if we are parsing the second file
        if (filepath === '2') {
            // return contents that import a type from another file
            return parse.parseText(`
                export type Foo = {
                    b: string
                }
            `)
        }
    })

    // make sure the exported type includes information from the imported type
    expect((await collectExports('1.js')).types).toMatchObject({
        Props: {
            a: {
                value: 'string',
                required: true,
                nullable: false
            },
            b: {
                value: 'string',
                required: true,
                nullable: false
            }
        }
    })
})

test('follows type exports from', async () => {
    // provide mocked content when parsing example file
    parse.parseFile = jest.fn(filepath => {
        // if we are parsing the first file
        if (filepath === '1.js') {
            // return contents that import a type from another file
            return parse.parseText(`
                export type { Foo } from './2'
            `)
        }
        // if we are parsing the second file
        if (filepath === '2') {
            // return contents that import a type from another file
            return parse.parseText(`
                export type Foo = {
                    b: string
                }
            `)
        }
    })

    // make sure the exported type includes information from the imported type
    expect((await collectExports('1.js')).types).toMatchObject({
        Foo: {
            b: {
                value: 'string',
                required: true,
                nullable: false
            }
        }
    })
})

test('follows default export from', async () => {
    // provide mocked content when parsing example file
    parse.parseFile = jest.fn(filepath => {
        // if we are parsing the first file
        if (filepath === '1.js') {
            // return contents that import a type from another file
            return parse.parseText(`
                export Foo from './2'
            `)
        }
        // if we are parsing the second file
        if (filepath === '2') {
            // return contents that import a type from another file
            return parse.parseText(`
                type Props = {
                    b: string
                }

                export default ({props} : Props) => 'hello'
            `)
        }
    })

    // make sure the exported type includes information from the imported type
    expect((await collectExports('1.js')).components.Foo).toMatchObject({
        props: {
            b: {
                value: 'string',
                required: true,
                nullable: false
            }
        }
    })
})

test('follows named export from', async () => {
    // provide mocked content when parsing example file
    parse.parseFile = jest.fn(filepath => {
        // if we are parsing the first file
        if (filepath === '1.js') {
            // return contents that import a type from another file
            return parse.parseText(`
                export { Foo } from './2'
            `)
        }
        // if we are parsing the second file
        if (filepath === '2') {
            // return contents that import a type from another file
            return parse.parseText(`
                type Props = {
                    b: string
                }

                export const Foo = (props : Props) => 'hello'
            `)
        }
    })

    // make sure the exported type includes information from the imported type
    expect((await collectExports('1.js')).components.Foo).toMatchObject({
        props: {
            b: {
                value: 'string',
                required: true,
                nullable: false
            }
        }
    })
})

test('follows re-named export from', async () => {
    // provide mocked content when parsing example file
    parse.parseFile = jest.fn(filepath => {
        // if we are parsing the first file
        if (filepath === '1.js') {
            // return contents that import a type from another file
            return parse.parseText(`
                export { default as Foo } from './2'
            `)
        }
        // if we are parsing the second file
        if (filepath === '2') {
            // return contents that import a type from another file
            return parse.parseText(`
                type Props = {
                    b: string
                }

                export default (props : Props) => 'hello'
            `)
        }
    })

    // make sure the exported type includes information from the imported type
    expect((await collectExports('1.js')).components.Foo).toMatchObject({
        props: {
            b: {
                value: 'string',
                required: true,
                nullable: false
            }
        }
    })
})

test('export all components from module', async () => {
    // provide mocked content when parsing example file
    parse.parseFile = jest.fn(filepath => {
        // if we are parsing the first file
        if (filepath === '1.js') {
            // return contents that import a type from another file
            return parse.parseText(`
                export * from './2'
            `)
        }
        // if we are parsing the second file
        if (filepath === '2') {
            // return contents that import a type from another file
            return parse.parseText(`
                type Props = {
                    b: string
                }

                export const Foo = (props : Props) => 'hello'
                export const Bar = (props : Props) => 'hello'
                export const Baz = (props : Props) => 'hello'
            `)
        }
    })

    // make sure the exported type includes information from the imported type
    expect((await collectExports('1.js')).components).toMatchObject({
        Foo: {
            props: {
                b: {
                    value: 'string',
                    required: true,
                    nullable: false
                }
            }
        },
        Bar: {
            props: {
                b: {
                    value: 'string',
                    required: true,
                    nullable: false
                }
            }
        },
        Baz: {
            props: {
                b: {
                    value: 'string',
                    required: true,
                    nullable: false
                }
            }
        }
    })
})

test('ignores non-aliased package references', async () => {
    // provide mocked content when parsing example file
    parse.parseFile = jest.fn(filepath => {
        // if we are parsing the first file
        if (filepath === '1.js') {
            // return contents that import a type from another file
            return parse.parseText(`
                export { default as Foo } from 'quark-web'
            `)
        }
    })

    // make sure the exported type includes information from the imported type
    expect((await collectExports('1.js')).components).toEqual({})
})

test('includes aliased package references', async () => {
    // provide mocked content when parsing example file
    parse.parseFile = jest.fn(filepath => {
        // if we are parsing the first file
        if (filepath === '1.js') {
            // return contents that import a type from another file
            return parse.parseText(`
                export { default as Foo } from 'quark-web'
            `)
        }
        // if we are parsing the first file
        if (filepath === 'foo/quark-web.js') {
            // return contents that import a type from another file
            return parse.parseText(`
                type Props = {
                    b: string
                }

                export default (props : Props) => 'hello'
            `)
        }
    })

    // make sure the exported type includes information from the imported type
    expect(
        (await collectExports('1.js', {
            alias: {
                'quark-web': 'foo/quark-web.js'
            }
        })).components.Foo
    ).toMatchObject({
        props: {
            b: {
                value: 'string',
                required: true,
                nullable: false
            }
        }
    })
})

test('memoizes input', async () => {
    // provide mocked content when parsing example file
    parse.parseFile = jest.fn(filepath => {
        // if we are parsing the first file
        if (filepath === '1.js') {
            // return contents that import a type from another file
            return parse.parseText(`
                export { Foo } from 'quark-web'
                export * from './2'
            `)
        }
        // if we are parsing the first file
        if (filepath === '2') {
            // return contents that import a type from another file
            return parse.parseText(`
                export { Bar } from 'quark-web'
            `)
        }
        // if we are parsing the first file
        if (filepath === 'foo/quark-web.js') {
            // return contents that import a type from another file
            return parse.parseText(`
                type Props = {
                    b: string
                }

                export const Foo = (props : Props) => 'hello'
                export const Bar = (props : Props) => 'hello'
            `)
        }
    })

    // make sure the exported type includes information from the imported type
    expect(
        (await collectExports('1.js', {
            alias: {
                'quark-web': 'foo/quark-web.js'
            }
        })).components
    ).toMatchObject({
        Foo: {
            props: {
                b: {
                    value: 'string',
                    required: true,
                    nullable: false
                }
            }
        },
        Bar: {
            props: {
                b: {
                    value: 'string',
                    required: true,
                    nullable: false
                }
            }
        }
    })

    // make sure we only looked up the value of `quark-web` once
    expect(
        parse.parseFile.mock.calls.filter(value => value[0] === 'foo/quark-web.js')
    ).toHaveLength(1)
})
