import { parseText } from '..'
import { _extract } from '.'

test('can extract objects', () => {
    // the input
    const input = parseText(`
        export type Foo = {
            a: string
        }

        export type Bar = {
            b: string
        }
    `)

    expect(_extract(input)).toEqual({
        Foo: {
            a: {
                value: 'string',
                nullable: false,
                optional: false
            }
        },
        Bar: {
            b: {
                value: 'string',
                nullable: false,
                optional: false
            }
        }
    })
})

test('can extract intersection types', async () => {
    // the input
    const input = parseText(`
        export type Foo = {
            a: string
        } & {
            b: string
        }
    `)

    expect(_extract(input)).toEqual({
        Foo: {
            a: {
                value: 'string',
                nullable: false,
                optional: false
            },
            b: {
                value: 'string',
                nullable: false,
                optional: false
            }
        }
    })
})

test('can mix local types into an intersection', () => {
    // the input
    const input = parseText(`
        type Bar = {
            b: string
        }

        export type Foo = {
            a: string
        } & Bar
    `)

    expect(_extract(input)).toEqual({
        Foo: {
            a: {
                value: 'string',
                nullable: false,
                optional: false
            },
            b: {
                value: 'string',
                nullable: false,
                optional: false
            }
        }
    })
})

test('can extract union type', () => {
    // the input
    const input = parseText(`
        export type Bar = "a" | "b"
    `)

    expect(_extract(input)).toEqual({
        Bar: '"a" | "b"'
    })
})
