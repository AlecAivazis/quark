// local imports
import * as parse from '../parse'
import collectExports, { DEFAULT_EXPORT } from '.'

test('collects named arrow-function component exports', () => {
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

    expect(collectExports('foo.js').components.Foo).toEqual({
        props: {
            a: {
                value: 'string',
                required: true,
                nullable: false
            }
        }
    })
})

test('collects named class-based exports', () => {
    // provide mocked content when parsing example file
    parse.parseFile = jest.fn(() =>
        parse.parseText(`
          type Props = {
            a: string
          }

          export class Foo extends React.Component<Props> {}
        `)
    )

    expect(collectExports('foo.js').components.Foo).toEqual({
        props: {
            a: {
                value: 'string',
                required: true,
                nullable: false
            }
        }
    })
})

test('collects default component exports from arrow-function reference', () => {
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

    expect(collectExports('foo.js').components[DEFAULT_EXPORT]).toEqual({
        props: {
            a: {
                value: 'string',
                required: true,
                nullable: false
            }
        }
    })
})

test('collects default component exports from class reference', () => {
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

    expect(collectExports('foo.js').components[DEFAULT_EXPORT]).toEqual({
        props: {
            a: {
                value: 'string',
                required: true,
                nullable: false
            }
        }
    })
})

test('collects inline default component exports', () => {
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

    expect(collectExports('foo.js').components[DEFAULT_EXPORT]).toEqual({
        props: {
            a: {
                value: 'string',
                required: true,
                nullable: false
            }
        }
    })
})

test('collects type exports', () => {
    // provide mocked content when parsing example file
    parse.parseFile = jest.fn(() =>
        parse.parseText(`
          export type Props = {
            a: string
          }
      `)
    )

    expect(collectExports('foo.js').types.Props).toMatchObject({
        a: {
            value: 'string',
            required: true,
            nullable: false
        }
    })
})

test('includes type imports from a file', () => {
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
    expect(collectExports('1.js').types).toMatchObject({
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

test('follows type exports from')

test('follows default export from')

test('follows named export from')
