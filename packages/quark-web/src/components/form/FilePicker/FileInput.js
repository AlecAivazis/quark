// @flow
// external
import * as React from 'react'
import { View } from 'react-native-web'

type Props = {
    children: React.Element<*>,
    onChange: (File[]) => void,
    style?: CSSStyleDeclaration
}

class FileInput extends React.Component<Props> {
    fileInput: ?HTMLInputElement

    _handleUpload = (evt: { target: { files: File[] } }) => {
        // invoke the onChange callback
        this.props.onChange(evt.target.files)
        // free up the fileInput again
        if (this.fileInput) {
            this.fileInput.value = ''
        }
    }

    render() {
        return (
            <View style={this.props.style}>
                <input
                    type="file"
                    style={{ display: 'none' }}
                    onChange={this._handleUpload}
                    ref={ele => (this.fileInput = ele)}
                />
                {React.cloneElement(this.props.children, {
                    onClick: () => this.fileInput && this.fileInput.click()
                })}
            </View>
        )
    }
}

export default FileInput
