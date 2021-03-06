// local imports
import flatMap from './flatMap'

it('flattens the result of the map', function() {
    // create a nested list
    const test = [1, 1, 1]
    // double the list
    const result = flatMap(test, i => [i, i])

    expect(result).toEqual([1, 1, 1, 1, 1, 1])
})
