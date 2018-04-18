// local imports
import sortGraph from './sortGraph'

test('can sort graph', () => {
    // the graph to sort
    expect(
        sortGraph([
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
        ]).map(({ filepath }) => filepath)
    ).toEqual(['1', '3', '2'])
})
