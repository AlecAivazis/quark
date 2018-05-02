// @flow
import * as React from 'react'

type Props = {
    children: React.Node,
    onChange: () => {},
    style: {}
}

class FileInput extends React.Component<Props> {
    _handleUpload = evt => {
        const file = evt.target.files[0]
        this.props.onChange(file)
        // free up the fileInput again
        this.fileInput.value = null
    }

    render() {
        return (
            <div style={this.props.style}>
                <input
                    type="file"
                    style={{ display: 'none' }}
                    onChange={this._handleUpload}
                    ref={ele => (this.fileInput = ele)}
                />
                {React.cloneElement(this.props.children, {
                    onClick: () => this.fileInput.click()
                })}
            </div>
        )
    }
}

export default FileInput
