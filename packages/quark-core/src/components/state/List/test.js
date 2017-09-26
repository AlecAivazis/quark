// external imports
import React from 'react'
import { mount } from 'enzyme'
// local imports
import ListState from '.'

describe('State', () => {
    describe('List', () => {
        test('starts off as an empty list', () => {
            // for this test, assume the initial state is false
            const wrapper = mount(
                <ListState initial={true}>
                    {({state}) => (
                        <span>{Array.isArray(state) && state.length}</span>
                    )}
                </ListState>
            )

            // make sure the input updated
            expect(wrapper.text()).toEqual('0')
        })

        test('can set initial value', () => {
            // for this test, assume the initial state is false
            const wrapper = mount(
                <ListState initial={[1]}>
                    {({state}) => (
                        <span>{Array.isArray(state) && state.length && state[0]}</span>
                    )}
                </ListState>
            )

            // make sure the input updated
            expect(wrapper.text()).toEqual('1')
        })

        test('can add an element to the list', () => {
            // for this test, assume the initial state is false
            const wrapper = mount(
                <ListState>
                    {({state, append}) => (
                        <span onClick={() => append('hello')}>
                            {JSON.stringify(state)}
                        </span>
                    )}
                </ListState>
            )

            // sanity check
            expect(wrapper.text()).toEqual('[]')

            // click on the element to add the entry to the list
            wrapper.find('span').simulate('click')

            // there should be the string 'hello' in the span
            expect(wrapper.text()).toEqual('["hello"]')
        })

        test('can update element in place', () => {
            // for this test, assume the initial state is false
            const wrapper = mount(
                <ListState initial={[1, 2, 3]}>
                    {({state, append}) => (
                        <span onClick={() => update(1, 'hello')}>
                            {JSON.stringify(state)}
                        </span>
                    )}
                </ListState>
            )

            // sanity check
            expect(wrapper.text()).toEqual('[]')

            // click on the element to add the entry to the list
            wrapper.find('span').simulate('click')

            // there should be the string 'hello' in the span
            expect(wrapper.text()).toEqual('[1, "hello", 3]')
        })
    })
})
