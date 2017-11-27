// external imports
import React from 'react'
import { mount } from 'enzyme'
// local imports
import BooleanState from '.'

describe('State', () => {
    describe('Boolean', () => {
        test('can set the initial value', () => {
            // for this test, assume the initial state is false
            const wrapper = mount(
                <BooleanState initial={true}>
                    {({ state }) => <span>{state && 'hello'}</span>}
                </BooleanState>
            )

            // make sure the input updated
            expect(wrapper.text()).toEqual('hello')
        })

        test('can set the state value', () => {
            // for this test, assume the initial state is false
            const wrapper = mount(
                <BooleanState initial={false}>
                    {({ state, set }) => (
                        <span onClick={() => set(true)}>
                            {state && 'hello'}
                        </span>
                    )}
                </BooleanState>
            )
            // make sure the input updated
            expect(wrapper.text()).toEqual('')

            // click on the span
            wrapper.find('span').simulate('click')

            // make sure the input updated
            expect(wrapper.text()).toEqual('hello')
        })

        test('can toggle state', () => {
            // for this test, assume the initial state is false
            const wrapper = mount(
                <BooleanState initial={false}>
                    {({ state, toggle }) => (
                        <span onClick={toggle}>{state && 'hello'}</span>
                    )}
                </BooleanState>
            )
            // make sure the input updated
            expect(wrapper.text()).toEqual('')

            // click on the span
            wrapper.find('span').simulate('click')

            // make sure the input updated
            expect(wrapper.text()).toEqual('hello')
        })
    })
})
