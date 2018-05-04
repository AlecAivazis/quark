// external
import React from 'react'
import { mount } from 'enzyme'
// local
import ImagePicker from '.'

const dims = { minWidth: 0, maxWidth: 10, minHeight: 0, maxHeight: 10 }

test('returns a valid component with required props', () => {
    const onChange = jest.fn()
    const onError = jest.fn()

    const ele = (
        <ImagePicker onChange={() => ({})} onError={() => ({})} dims={dims}>
            <button>Click to upload</button>
        </ImagePicker>
    )

    expect(React.isValidElement(ele)).toBe(true)
})

test('call the error handler when no image uploaded', () => {
    const onChange = jest.fn()
    const onError = jest.fn()

    // mount the select with a few options
    const wrapper = mount(
        <ImagePicker onChange={onChange} onError={onError} dims={dims}>
            <div>Click here</div>
        </ImagePicker>
    )

    // trigger the onChange callback on file input
    wrapper.find('input').simulate('change', { target: { files: [] } })

    expect(onError.mock.calls.length).toBe(1)
    expect(onChange.mock.calls.length).toBe(0)
})
