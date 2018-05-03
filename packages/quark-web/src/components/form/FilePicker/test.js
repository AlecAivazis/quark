// external
import React from 'react'
import { mount } from 'enzyme'
// local
import FilePicker from '.'

test('returns a valid component with required props', () => {
    const onChange = jest.fn()
    const onError = jest.fn()

    const ele = (
        <FilePicker onChange={onChange} onError={onError}>
            <button>Click to upload</button>
        </FilePicker>
    )

    expect(React.isValidElement(ele)).toBe(true)
})

test('call error handler when no file uploaded', () => {
    const onChange = jest.fn()
    const onError = jest.fn()

    // mount the select with a few options
    const wrapper = mount(
        <FilePicker onChange={onChange} onError={onError}>
            <div>Click here</div>
        </FilePicker>
    )

    // trigger the onChange callback on file input
    wrapper.find('input').simulate('change', { target: { files: [] } })

    expect(onError).toBeCalled()
    expect(onChange).not.toBeCalled()
})

test('call error handler when a file with incorrect extension is uploaded', () => {
    const onChange = jest.fn()
    const onError = jest.fn()

    // mount the select with a few options
    const wrapper = mount(
        <FilePicker onChange={onChange} onError={onError} extensions={['md']}>
            <div>Click here</div>
        </FilePicker>
    )

    const file = new Blob(['file contents'], { type: 'text/plain' })
    file.name = 'file.txt'

    // trigger the onChange callback on file input
    wrapper.find('input').simulate('change', { target: { files: [file] } })

    expect(onError).toBeCalled()
    expect(onChange).not.toBeCalled()
})

test('call error handler when a file that is too large is uploaded', () => {
    const onChange = jest.fn()
    const onError = jest.fn()

    // mount the select with a few options
    const wrapper = mount(
        <FilePicker
            onChange={onChange}
            onError={onError}
            // set unreasonably small max size so that our tiny blob is too big
            maxSize={0.0000000001}
        >
            <div>Click here</div>
        </FilePicker>
    )

    const file = new Blob(['file contents'], { type: 'text/plain' })

    // trigger the onChange callback on file input
    wrapper.find('input').simulate('change', { target: { files: [file] } })

    expect(onError).toBeCalled()
    expect(onChange).not.toBeCalled()
})

test('call change handler when a file with correct size and extension is uploaded', () => {
    const onChange = jest.fn()
    const onError = jest.fn()

    // mount the select with a few options
    const wrapper = mount(
        <FilePicker onChange={onChange} onError={onError} extensions={['txt']} maxSize={1}>
            <div>Click here</div>
        </FilePicker>
    )

    const file = new Blob(['file contents'], { type: 'text/plain' })
    file.name = 'file.txt'

    // trigger the onChange callback on file input
    wrapper.find('input').simulate('change', { target: { files: [file] } })

    expect(onError).not.toBeCalled()
    expect(onChange).toBeCalled()
})
