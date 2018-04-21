// local imports
import getPropTable from '.'
import { parseText } from '..'

const _getTable = (input, extraTypes) => {
    const ast = parseText(input)

    return getPropTable(ast, ast[0].right, extraTypes)
}

test('can find references types', () => {
    const input = parseText(`
      type Props = {
        value: string
      }

      type Foo = Props
    `)

    const props = getPropTable(input, input[1].right)

    expect(props).toEqual({
        value: {
            value: 'string',
            required: true,
            nullable: false
        }
    })
})

test('can extract multiple props', () => {
    let props = _getTable(`
      type Props = {
        value: string,
        onClick: (string) => void
      }
    `)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'string',
            required: true,
            nullable: false
        },
        onClick: {
            value: '(string) => void',
            required: true,
            nullable: false
        }
    })
})

test('generics', () => {
    let props = _getTable(`
        type Props = {
        value: Array<any>
        }

    `)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'Array<any>',
            required: true,
            nullable: false
        }
    })
})

test('array type', () => {
    let props = _getTable(`
        type Props = {
        value: any[]
        }

    `)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'Array<any>',
            required: true,
            nullable: false
        }
    })
})

test('qualified generics', () => {
    let props = _getTable(`
      type Props = {
        value: React.Element<any>
      }
    `)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'React.Element<any>',
            required: true,
            nullable: false
        }
    })
})

test('qualified types', () => {
    let props = _getTable(`
      type Props = {
        value: React.Node
      }
    `)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'React.Node',
            required: true,
            nullable: false
        }
    })
})

test('number', () => {
    let props = _getTable(`
      type Props = {
        value: number
      }
    `)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'number',
            required: true,
            nullable: false
        }
    })
})

test('boolean', () => {
    let props = _getTable(`
    type Props = {
      value: boolean
    }
  `)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'boolean',
            required: true,
            nullable: false
        }
    })
})

test('empty object', () => {
    let props = _getTable(`
      type Props = {
        value: {}
      }
    `)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: '{}',
            required: true,
            nullable: false
        }
    })
})

test('concrete object', () => {
    let props = _getTable(`
        type Props = {
            value: { hello: string }
        }

    `)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: '{ hello: string }',
            required: true,
            nullable: false
        }
    })
})

test('generic object', () => {
    let props = _getTable(`
        type Props = {
            value: { [k: string]: string }
        }

    `)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: '{ [k: string]: string }',
            required: true,
            nullable: false
        }
    })
})

test('optional types', () => {
    let props = _getTable(`
        type Props = { value?: string }

    `)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'string',
            required: false,
            nullable: false
        }
    })
})

test('nullable values', () => {
    let props = _getTable(`
        type Props = {
            value: ?string
        }

    `)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'string',
            required: true,
            nullable: true
        }
    })
})

test('string literals', () => {
    let props = _getTable(`
        type Props = {
            value: 'hello'
        }

    `)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: '"hello"',
            required: true,
            nullable: false
        }
    })
})

test('number literals', () => {
    let props = _getTable(`
        type Props = {
            value: 1
        }

    `)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: '1',
            required: true,
            nullable: false
        }
    })
})

test('unions', () => {
    let props = _getTable(`
        type Props = {
            value: 1 | 2
        }

    `)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: '1 | 2',
            required: true,
            nullable: false
        }
    })
})

test('intersections', () => {
    let props = _getTable(`
        type Props = {
            value: ?string
        } & {
            key: string
        }

    `)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'string',
            required: true,
            nullable: true
        },
        key: {
            value: 'string',
            required: true,
            nullable: false
        }
    })
})

test('can get types of class component', () => {
    let props = _getTable(`
        type Props = {
            value?: string
        }

        class Foo extends React.Component<Props> {
            render() {
                return 'hello'
            }
        }

        export default Foo
    `)

    expect(props).toEqual({
        value: {
            value: 'string',
            required: false,
            nullable: false
        }
    })
})

test('can incoporate module-scoped types', () => {
    let props = _getTable(
        `
        type Props = {
            value: ?string
        } & Foo

    `,
        {
            Foo: {
                key: {
                    value: 'string',
                    required: true,
                    nullable: false
                }
            }
        }
    )

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'string',
            required: true,
            nullable: true
        },
        key: {
            value: 'string',
            required: true,
            nullable: false
        }
    })
})
