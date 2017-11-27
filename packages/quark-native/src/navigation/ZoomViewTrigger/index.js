// external imports
import React from 'react'
import { View } from 'react-native'

type Props = {
    transitionTo: (data: any) => void,
    children: { trigger: (data: any) => void },
    unused: {}
}

class ZoomViewTrigger extends React.Component<Props> {
    render() {
        return (
            <View ref={ele => (this._ele = ele)}>
                {this.props.children({ trigger: this._trigger })}
            </View>
        )
    }

    _trigger = (data: any) => {
        this._ele.measure((_, __, width, height, x, y) => {
            // this.props.transitionTo(data)
            this.props.transitionTo({ x, y, width, height, data })
        })
    }
}

export default ZoomViewTrigger
