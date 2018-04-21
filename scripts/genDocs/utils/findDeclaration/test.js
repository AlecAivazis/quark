// local imports
import { parseText } from '..'
import findDeclaration from '.'

test('can find a class declaration', () => {
    const input = parseText(`
      class Foo extends React.Component {}
    `)

    expect(findDeclaration('Foo', input)).toBeTruthy()
})

test('can find a variable declaration', () => {
    const input = parseText(`
      const Foo = 'asf'
    `)

    expect(findDeclaration('Foo', input)).toBeTruthy()
})
