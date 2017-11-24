// @flow
export default <T, A>(list: T[], fn: T => A[]): A[] => [].concat(...list.map(fn))
