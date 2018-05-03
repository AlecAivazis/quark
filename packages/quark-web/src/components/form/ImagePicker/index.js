// @flow
// external
import * as React from 'react'
// local
import loadFile from './load-file'
import loadImage from './load-image'
import { FilePicker } from '..'

type Props = {
    children: React.Element<*>,
    onChange: (File[] | string) => void | Promise<any>,
    onError: string => void,
    dims: {
        minWidth: number,
        maxWidth: number,
        minHeight: number,
        maxHeight: number
    },
    base64?: boolean,
    maxSize?: number,
    extensions?: Array<string>,
    style?: CSSStyleDeclaration
}

class UploadImage extends React.Component<Props> {
    static defaultProps = {
        base64: false
    }

    _handleImg = async (files: File[]) => {
        // grab used props
        const { onChange, onError, dims, base64 } = this.props

        try {
            // convert the file into a base64 encoded string
            const dataUrl = await loadFile(files[0])
            // verify the file satisfies the dimension constraints
            await loadImage(dataUrl, dims)
            // pass the file onto the callback handler
            onChange(base64 ? dataUrl : files)
        } catch (err) {
            // pass err message to onError handler
            onError(err.message)
        }
    }

    render() {
        const { children, ...unused } = this.props
        // pass our own onChange handler here and
        // use the user-provided onChange handler above in _handleImg
        Reflect.deleteProperty(unused, 'onChange')

        return (
            <FilePicker onChange={this._handleImg} {...unused}>
                {children}
            </FilePicker>
        )
    }
}

export default UploadImage
