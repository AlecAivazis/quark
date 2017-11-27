// external imports
import React from 'react'
import { mount } from 'enzyme'
// local imports
import FreeState from '.'

describe('State', () => {
    describe('Free', () => {
        test('can set the initial value', () => {
            // for this test, assume the initial state is false
            const wrapper = mount(
                <FreeState initial={true}>
                    {({ state }) => <span>{state && 'hello'}</span>}
                </FreeState>
            )

            // make sure the input updated
            expect(wrapper.text()).toEqual('hello')
        })

        test('can set the state value', () => {
            // for this test, assume the initial state is false
            const wrapper = mount(
                <FreeState initial={true}>
                    {({ state, set }) => (
                        <span onClick={() => set(false)}>
                            {state && 'hello'}
                        </span>
                    )}
                </FreeState>
            )

            // make sure the input updated
            expect(wrapper.text()).toEqual('hello')
        })
    })
})
