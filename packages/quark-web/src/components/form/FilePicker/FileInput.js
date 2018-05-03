// @flow
// external
import * as React from 'react'
import { View } from 'react-native-web'

type Props = {
    children: React.Node,
    onChange: File => void,
    style?: CSSStyleDeclaration
}

class FileInput extends React.Component<Props> {
    fileInput: ?HTMLInputElement

    _handleUpload = (evt: Event) => {
        const file = evt.target.files[0]
        this.props.onChange(file)
        // free up the fileInput again
        this.fileInput.value = null
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
                    onClick: () => this.fileInput.click()
                })}
            </View>
        )
    }
}

export default FileInput
