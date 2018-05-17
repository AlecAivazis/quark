// @flow
// external
import * as React from 'react'
// local
import loadFile from './load-file'
import loadImage from './load-image'
import { FilePicker } from '..'

type Props = {
    children: React.Element<any>,
    onChange: (File[] | string) => void | Promise<void>,
    onError: string => void | Promise<void>,
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
        base64: false,
        dims: {}
    }

    _handleImg = async (files: File[]) => {
        // grab used props
        const { onChange, onError, dims, base64 } = this.props

        try {
            // convert files into base64 encoded strings
            const dataUrls = await Promise.all(files.map(loadFile))

            // verify that the files satisfy the dimension constraints
            await Promise.all(dataUrls.map(dataUrl => loadImage(dataUrl, dims)))
            // pass the file onto the callback handler
            onChange(base64 ? dataUrls : files)
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
