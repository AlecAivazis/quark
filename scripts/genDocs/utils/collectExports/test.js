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

    expect(collectExports('root/quark-web/src/components/section/a.js').components.Foo).toEqual({
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

    expect(collectExports('root/quark-web/src/components/section/a.js').components.Foo).toEqual({
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

    expect(
        collectExports('root/quark-web/src/components/section/a.js').components[DEFAULT_EXPORT]
    ).toEqual({
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

    expect(
        collectExports('root/quark-web/src/components/section/a.js').components[DEFAULT_EXPORT]
    ).toEqual({
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

    expect(
        collectExports('root/quark-web/src/components/section/a.js').components[DEFAULT_EXPORT]
    ).toEqual({
        props: {
            a: {
                value: 'string',
                required: true,
                nullable: false
            }
        }
    })
})

test('collects type exports', () => {})

test('follows type imports')

test('follows default export from')

test('follows named export from')
