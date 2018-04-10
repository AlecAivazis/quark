// external imports
import * as React from 'react'
import { mount } from 'enzyme'
// local imports
import TriggerAlert from '../trigger'
import AlertContainer from '.'

test('emitting an alert with the right namespace adds the alert to container', () => {
    // mount an alert container with a specific namespace
    const wrapper = mount(<AlertContainer namespace="test" />)

    // emit an alert with the proper namespace
    TriggerAlert({
        namespace: 'test',
        content: 'hello'
    })

    wrapper.update()

    // make sure we added the alert to the component state
    expect(wrapper.state().alerts).toMatchObject([{ content: 'hello' }])
})

test('the event/container pattern does not need a specific namespace', () => {
    // mount an alert container with a specific namespace
    const wrapper = mount(<AlertContainer />)

    // emit an alert with the proper namespace
    TriggerAlert({
        content: 'hello'
    })

    wrapper.update()

    // make sure we added the alert to the component state
    expect(wrapper.state().alerts).toMatchObject([{ content: 'hello' }])
})

test('emitting an alert with the wrong namespace does nothing', () => {
    // mount an alert container with a specific namespace
    const wrapper = mount(<AlertContainer namespace="test" />)

    // emit an alert with the proper namespace
    TriggerAlert({
        content: 'hello'
    })

    wrapper.update()

    // make sure we added the alert to the component state
    expect(wrapper.state().alerts).toEqual([])
})

test('passes props to the mounted alert components', () => {
    // mount an alert container with a specific namespace
    const wrapper = mount(<AlertContainer />)

    // emit an alert with the proper namespace
    TriggerAlert({
        content: 'hello'
    })
    wrapper.update()

    // look for a mounted alert
    const alertWrapper = wrapper.find('BaseAlert')

    // make sure one exists
    expect(alertWrapper).toHaveLength(1)

    // make sure it got the right content
    expect(alertWrapper.props()).toMatchObject({
        content: 'hello'
    })
})

test('can trigger an warning alert', () => {
    // mount an alert container with a specific namespace
    const wrapper = mount(<AlertContainer />)

    // emit an alert with the proper namespace
    TriggerAlert({
        content: 'hello',
        type: 'warning'
    })

    wrapper.update()

    // look for a mounted alert
    const alertWrapper = wrapper.find('WarningAlert')

    // make sure one exists
    expect(alertWrapper).toHaveLength(1)
})

test('can trigger a success alert', () => {
    // mount an alert container with a specific namespace
    const wrapper = mount(<AlertContainer />)

    // emit an alert with the proper namespace
    TriggerAlert({
        content: 'hello',
        type: 'success'
    })

    wrapper.update()

    // look for a mounted alert
    const alertWrapper = wrapper.find('SuccessAlert')

    // make sure one exists
    expect(alertWrapper).toHaveLength(1)
})

test('an alert with a message gets a <Text/> component')

test('an alert with context get no wrapper')
