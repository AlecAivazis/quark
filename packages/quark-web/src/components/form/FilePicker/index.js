// @flow
// external
import * as React from 'react'
// local
import FileInput from './FileInput'

type Props = {
    children: React.Element<*>,
    onChange: (File[]) => void | Promise<void>,
    onError: string => void | Promise<void>,
    maxSize: number,
    extensions?: Array<string>,
    style?: CSSStyleDeclaration
}

class FilePicker extends React.Component<Props> {
    static defaultProps = {
        maxSize: 2
    }

    _validate = (files: File[]) => {
        const { onError, onChange, maxSize, extensions } = this.props

        // make sure a file was provided in the first place
        if (!files) {
            onError('Failed to upload a file.')
            return
        }

        // if we care about file extensions
        if (extensions) {
            // the extensions we care about
            const exts = extensions.map(ext => ext.toLowerCase())

            const isValid = files
                // pull the extension out of each name of the file
                .map(file =>
                    file.name
                        .split('.')
                        .pop()
                        .toLowerCase()
                )
                // make sure each extension satisfies the required list
                .reduce((prev, extension) => prev && extensions.includes(extension), false)

            // if one of the files are invalid
            if (!isValid) {
                // yell loudly
                onError(`Must upload a file of type: ${extensions.join(' or ')}`)
                return
            }
        }

        // convert maxSize from megabytes to bytes
        const maxBytes = maxSize * 1000000

        // look to see if any files are above the limit
        const tooBig = files.reduce((prev, file) => prev || file.size > maxBytes, false)
        if (tooBig) {
            onError(`File size must be less than ${maxSize} MB.`)
            return
        }

        // return native file object
        onChange(files)
    }

    render = () => (
        <FileInput onChange={this._validate} style={this.props.style}>
            {this.props.children}
        </FileInput>
    )
}

export default FilePicker
