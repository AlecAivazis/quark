// @flow
// external
import * as React from 'react'
// local
import loadFile from './load-file'
import loadImage from './load-image'
import { FilePicker } from '..'

type Props = {
    children: React.Node,
    onChange: File => File | string,
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
    style?: {}
}

class UploadImage extends React.Component<Props> {
    static defaultProps = {
        base64: false
    }

    _handleImg = async (file: File) => {
        // grab used props
        const { onChange, onError, dims, base64 } = this.props

        try {
            const dataUrl = await loadFile(file)
            await loadImage(dataUrl, dims)
            if (base64) {
                return dataUrl
            }
            onChange(file)
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
