// external imports
import React from 'react'
import { mount } from 'enzyme'
// local imports
import Form from '.'

describe('State', () => {
    describe('Form', () => {
        test('can control a component', () => {
            const wrapper = mount(
                <Form>
                    {({ getValue, setValue }) => (
                        <input
                            value={getValue('test')}
                            onChange={evt => {
                                setValue({ test: evt.target.value })
                            }}
                        />
                    )}
                </Form>
            )

            // save a reference to the input
            const input = wrapper.find('input')
            input.node.value = 'a'
            input.simulate('change', input)

            // make sure the input updated
            expect(wrapper.find('input').props().value).toEqual('a')
        })

        test('transforms values', () => {
            const wrapper = mount(
                <Form
                    transform={{
                        test: str => str.toUpperCase()
                    }}
                >
                    {({ getValue, setValue }) => (
                        <input
                            value={getValue('test')}
                            onChange={evt => {
                                setValue({ test: evt.target.value })
                            }}
                        />
                    )}
                </Form>
            )

            // save a reference to the input
            const input = wrapper.find('input')
            input.node.value = 'aaa'
            input.simulate('change', input)

            // make sure the input updated
            expect(wrapper.find('input').props().value).toEqual('AAA')
        })

        test('validates values', () => {
            const wrapper = mount(
                <Form
                    validate={{
                        test: str => (str.length > 0 ? str.toUpperCase() : null)
                    }}
                >
                    {({ getValue, setValue, getError }) => (
                        <div>
                            <span>{getError('test')}</span>
                            <input
                                value={getValue('test')}
                                onChange={evt => {
                                    setValue({ test: evt.target.value })
                                }}
                            />
                        </div>
                    )}
                </Form>
            )

            // make sure there is no error reported
            expect(wrapper.find('span').props().children).toEqual(null)

            // save a reference to the input
            const input = wrapper.find('input')
            input.node.value = 'aaa'
            input.simulate('change', input)

            // make sure there is an error reported (and that we passed the handler the string)
            expect(wrapper.find('span').props().children).toEqual('AAA')
        })

        test('transforms before validates', () => {
            const wrapper = mount(
                <Form
                    transform={{
                        test: () => 'A'
                    }}
                    validate={{
                        test: str => str !== 'A' && 'error'
                    }}
                >
                    {({ getValue, setValue, getError }) => (
                        <div>
                            <span>{getError('test')}</span>
                            <input
                                value={getValue('test')}
                                onChange={evt => {
                                    setValue({ test: evt.target.value })
                                }}
                            />
                        </div>
                    )}
                </Form>
            )

            // make sure there is no error reported
            expect(wrapper.find('span').props().children).toEqual(null)

            // save a reference to the input
            const input = wrapper.find('input')
            input.node.value = 'aaa'
            input.simulate('change', input)

            // make sure there is an error reported (and that we passed the handler the string)
            expect(wrapper.find('span').props().children).toEqual(null)
        })

        test('can find errors for strings and arrays', () => {
            const wrapper = mount(
                <Form
                    validate={{
                        test: str =>
                            str.length > 0 ? str.toUpperCase() : null,
                        test2: str =>
                            str.length > 0 ? [str.toUpperCase()] : null
                    }}
                >
                    {({ hasErrors, getValue, setValue }) => (
                        <div>
                            {hasErrors && <span>error</span>}
                            <input
                                value={getValue('test')}
                                onChange={evt => {
                                    setValue({
                                        test: evt.target.value,
                                        test2: evt.target.value
                                    })
                                }}
                            />
                        </div>
                    )}
                </Form>
            )

            // save a reference to the input
            const input = wrapper.find('input')
            input.node.value = 'aaa'
            input.simulate('change', input)

            // make sure there is an error reported
            expect(wrapper.find('span')).toHaveLength(1)
        })

        test('there is an error if no updates have been made', () => {
            const wrapper = mount(
                <Form
                    validate={{
                        test: str =>
                            str.length > 0 ? str.toUpperCase() : null,
                        test2: str =>
                            str.length > 0 ? [str.toUpperCase()] : null
                    }}
                >
                    {({ hasErrors, getValue, setValue }) => (
                        <div>
                            {hasErrors && <span>error</span>}
                            <input
                                value={getValue('test')}
                                onChange={evt => {
                                    setValue({
                                        test: evt.target.value,
                                        test2: evt.target.value
                                    })
                                }}
                            />
                        </div>
                    )}
                </Form>
            )

            expect(wrapper.find('span')).toHaveLength(1)
        })
    })
})
