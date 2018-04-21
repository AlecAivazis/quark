// local imports
import { parseText } from '..'
import isComponent from '.'

test('ignores string exports', () => {
    // parse some input with some exported text
    const input = parseText(`
      export const foo = 'bar'
    `)

    // make sure we don't mark it as a component
    expect(isComponent(input[0].declaration, input)).toBeFalsy()
})

test('includes arrow function exports', () => {
    // parse some input with some exported text
    const input = parseText(`
    export const foo = () => 'bar'
  `)

    // make sure we don't mark it as a component
    expect(isComponent(input[0].declaration, input)).toBeTruthy()
})

test('includes function exports', () => {
    // parse some input with some exported text
    const input = parseText(`
      export function foo () {
        return 'bar'
      }
    `)

    // make sure we don't mark it as a component
    expect(isComponent(input[0].declaration, input)).toBeTruthy()
})

test('includes classes', () => {
    // parse some input with some exported text
    const input = parseText(`
      export class Foo extends React.Component {}
    `)

    // make sure we don't mark it as a component
    expect(isComponent(input[0].declaration, input)).toBeTruthy()
})

test('can refer to variable declarations in the file', () => {
    // parse some input with some exported text
    const input = parseText(`
      class Foo extends React.Component {}

      export default Foo
    `)

    // make sure we don't mark it as a component
    expect(isComponent(input[1].declaration, input)).toBeTruthy()
})
