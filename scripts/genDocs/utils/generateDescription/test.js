// local imports
import generateDescription from '.'

test('can extract prop table', () => {
    let input = `
      type Props = {
        value: string,
        onClick: (string) => void
      }

      /* title: "Input - Disabled" */
      const Input = ({onChange, value}: Props) => 'hello'

      export default Input
    `
    // grab the prop table from the parsed input
    const { props } = generateDescription(input)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'string',
            optional: false,
            nullable: false
        },
        onClick: {
            value: '(string) => void',
            optional: false,
            nullable: false
        }
    })
})

test('inline type defs', () => {
    let input = `
        const Input = ({onChange, value}: {
          value: string,
          onClick: (string) => void
        }) => 'hello'

        export default Input
      `

    // grab the prop table from the parsed input
    const { props } = generateDescription(input)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'string',
            optional: false,
            nullable: false
        },
        onClick: {
            value: '(string) => void',
            optional: false,
            nullable: false
        }
    })
})

test('generics', () => {
    let input = `
    const Input = ({onChange, value}: {
      value: Array<any>
    }) => 'hello'

    export default Input
  `

    // grab the prop table from the parsed input
    const { props } = generateDescription(input)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'Array<any>',
            optional: false,
            nullable: false
        }
    })
})

test('qualified generics', () => {
    let input = `
      const Input = ({onChange, value}: {
        value: React.Element<any>
      }) => 'hello'

      export default Input
    `

    // grab the prop table from the parsed input
    const { props } = generateDescription(input)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'React.Element<any>',
            optional: false,
            nullable: false
        }
    })
})

test('qualified types', () => {
    let input = `
      const Input = ({onChange, value}: {
        value: React.Node
      }) => 'hello'

      export default Input
    `

    // grab the prop table from the parsed input
    const { props } = generateDescription(input)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'React.Node',
            optional: false,
            nullable: false
        }
    })
})

test('number', () => {
    let input = `
    const Input = ({onChange, value}: {
      value: number
    }) => 'hello'

    export default Input
  `

    // grab the prop table from the parsed input
    const { props } = generateDescription(input)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'number',
            optional: false,
            nullable: false
        }
    })
})

test('boolean', () => {
    let input = `
    const Input = ({onChange, value}: {
      value: boolean
    }) => 'hello'

    export default Input
  `

    // grab the prop table from the parsed input
    const { props } = generateDescription(input)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'boolean',
            optional: false,
            nullable: false
        }
    })
})

test('empty object', () => {
    let input = `
      const Input = ({onChange, value}: {
        value: {}
      }) => 'hello'

      export default Input
    `

    // grab the prop table from the parsed input
    const { props } = generateDescription(input)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: '{}',
            optional: false,
            nullable: false
        }
    })
})

test('concrete object', () => {
    let input = `
        const Input = ({onChange, value}: {
            value: { hello: string }
        }) => 'hello'

        export default Input
    `

    // grab the prop table from the parsed input
    const { props } = generateDescription(input)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: '{ hello: string }',
            optional: false,
            nullable: false
        }
    })
})

test('generic object', () => {
    let input = `
        const Input = ({onChange, value}: {
            value: { [k: string]: string }
        }) => 'hello'

        export default Input
    `

    // grab the prop table from the parsed input
    const { props } = generateDescription(input)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: '{ [k: string]: string }',
            optional: false,
            nullable: false
        }
    })
})

test('optional types', () => {
    let input = `
        const Input = ({onChange, value}: { value?: string }) => 'hello'

        export default Input
    `

    // grab the prop table from the parsed input
    const { props } = generateDescription(input)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'string',
            optional: true,
            nullable: false
        }
    })
})

test('nullable values', () => {
    let input = `
        const Input = ({onChange, value}: {
            value: ?string
        }) => 'hello'

        export default Input
    `

    // grab the prop table from the parsed input
    const { props } = generateDescription(input)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'string',
            optional: false,
            nullable: true
        }
    })
})

test('string literals', () => {
    let input = `
        const Input = ({onChange, value}: {
            value: 'hello'
        }) => 'hello'

        export default Input
    `

    // grab the prop table from the parsed input
    const { props } = generateDescription(input)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: '"hello"',
            optional: false,
            nullable: false
        }
    })
})

test('number literals', () => {
    let input = `
        const Input = ({onChange, value}: {
            value: 1
        }) => 'hello'

        export default Input
    `

    // grab the prop table from the parsed input
    const { props } = generateDescription(input)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: '1',
            optional: false,
            nullable: false
        }
    })
})

test('unions', () => {
    let input = `
        const Input = ({onChange, value}: {
            value: 1 | 2
        }) => 'hello'

        export default Input
    `

    // grab the prop table from the parsed input
    const { props } = generateDescription(input)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: '1 | 2',
            optional: false,
            nullable: false
        }
    })
})

test('intersections', () => {
    let input = `
        const Input = ({onChange, value}: {
            value: ?string
        } & {
            key: string
        }) => 'hello'

        export default Input
    `

    // grab the prop table from the parsed input
    const { props } = generateDescription(input)

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'string',
            optional: false,
            nullable: true
        },
        key: {
            value: 'string',
            optional: false,
            nullable: false
        }
    })
})

test('can get types of class component', () => {
    let input = `
        type Props = {
            value?: string
        }

        class Foo extends React.Component<Props> {
            render() {
                return 'hello'
            }
        }

        export default Foo
    `
    expect(generateDescription(input).props).toEqual({
        value: {
            value: 'string',
            optional: true,
            nullable: false
        }
    })
})

test('can incoporate module-scoped types', () => {
    let input = `
        const Input = ({onChange, value}: {
            value: ?string
        } & Foo) => 'hello'

        export default Input
    `

    // grab the prop table from the parsed input
    const { props } = generateDescription(input, {
        Foo: {
            key: {
                value: 'string',
                optional: false,
                nullable: false
            }
        }
    })

    // make sure we got the right value
    expect(props).toEqual({
        value: {
            value: 'string',
            optional: false,
            nullable: true
        },
        key: {
            value: 'string',
            optional: false,
            nullable: false
        }
    })
})
