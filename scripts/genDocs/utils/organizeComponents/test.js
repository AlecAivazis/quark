import * as getInfo from '../getInfo'
import organizeComponents from '.'

test('merges many lists into one', async () => {
    // the list of components
    const components1 = {
        Foo1: {
            filepath: 'asdf/quark-web/src/components/Section1/foo.js',
            props: {}
        }
    }
    const components2 = {
        Foo2: {
            filepath: 'asdf/quark-web/src/components/Section1/foo.js',
            props: {}
        }
    }

    // we don't care about the info for each component
    getInfo.default = jest.fn(() => ({
        description: '',
        examples: []
    }))

    expect((await organizeComponents([components1, components2])).data).toMatchObject({
        Section1: {
            Foo1: {
                props: {}
            },
            Foo2: {
                props: {}
            }
        }
    })
})

test('organizes lists of components into section objects', async () => {
    // the list of components
    const components = {
        Foo1: {
            filepath: 'asdf/quark-web/src/components/Section1/foo.js',
            props: {}
        },
        Foo2: {
            filepath: 'asdf/quark-web/src/components/Section1/foo.js',
            props: {}
        },
        Foo3: {
            filepath: 'asdf/quark-web/src/components/Section1/foo.js',
            props: {}
        },
        Foo4: {
            filepath: 'asdf/quark-web/src/components/Section2/foo.js',
            props: {}
        }
    }

    // we don't care about the info for each component
    getInfo.default = jest.fn(() => ({
        description: '',
        examples: []
    }))

    expect((await organizeComponents([components])).data).toMatchObject({
        Section1: {
            Foo1: {
                props: {}
            },
            Foo2: {
                props: {}
            },
            Foo3: {
                props: {}
            }
        },
        Section2: {
            Foo4: {
                props: {}
            }
        }
    })
})

test("complains if prop tables for components don't match", async () => {
    // the list of components
    const components1 = {
        Foo1: {
            filepath: 'asdf/quark-web/src/components/Section1/foo.js',
            props: {
                a: {
                    value: 'asdf'
                }
            }
        }
    }
    const components2 = {
        Foo1: {
            filepath: 'asdf/quark-native/src/components/Section1/foo.js',
            props: {
                a: {
                    value: 'asdfi'
                }
            }
        }
    }

    // we don't care about the info for each component
    getInfo.default = jest.fn(() => ({
        description: '',
        examples: []
    }))

    // make sure the
    expect((await organizeComponents([components1, components2])).errors).toHaveLength(1)
})

test('adds examples and description', async () => {
    // the list of components
    const components = {
        Foo1: {
            filepath: 'asdf/quark-web/src/components/Section1/foo.js',
            props: {}
        }
    }

    // make sure the description and examples are known values
    getInfo.default = jest.fn(async ({ section, component }) => {
        return (
            section === 'Section1' &&
            component === 'Foo1' && {
                description: 'this is a description',
                examples: ['awesome content']
            }
        )
    })

    expect((await organizeComponents([components])).data).toMatchObject({
        Section1: {
            Foo1: {
                description: 'this is a description',
                examples: ['awesome content']
            }
        }
    })
})

test('tags the components if its not in all component objects', async () => {
    // the list of components
    const components1 = {
        Foo1: {
            filepath: 'asdf/quark-web/src/components/Section1/foo.js',
            props: {}
        }
    }

    const components2 = {
        Foo2: {
            filepath: 'asdf/quark-web/src/components/Section1/foo.js',
            props: {}
        }
    }

    // we don't care about the info for each component
    getInfo.default = jest.fn(() => ({
        description: '',
        examples: []
    }))

    expect((await organizeComponents([components1, components2])).data.Section1.Foo1).toMatchObject(
        {
            tags: ['quark-web']
        }
    )
})

test("doesn't tag component if its present in all component objects", async () => {
    // the list of components
    const components1 = {
        Foo1: {
            filepath: 'asdf/quark-web/src/components/Section1/foo.js',
            props: {}
        }
    }
    const components2 = {
        Foo1: {
            filepath: 'asdf/quark-native/src/components/Section1/foo.js',
            props: {}
        }
    }

    // we don't care about the info for each component
    getInfo.default = jest.fn(() => ({
        description: '',
        examples: []
    }))

    expect((await organizeComponents([components1, components2])).data.Section1.Foo1).toMatchObject(
        {
            tags: []
        }
    )
})
