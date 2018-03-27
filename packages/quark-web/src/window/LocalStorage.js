// @flow
import * as React from 'react'

type Props = {
    children: ({
        setItem?: string => void,
        getItem?: {}
    }) => React.Node,
    itemKey: string
}

class LocalStorage extends React.Component<Props> {
    render = () =>
        this.props.children({
            setItem: this._setItem,
            getItem: this._item
        })

    get _item(): {} {
        const item = window.localStorage.getItem(this.props.itemKey)
        return JSON.parse(item)
    }

    _setItem = (item: string) =>
        window.localStorage.setItem(this.props.itemKey, JSON.stringify(item))
}

export default LocalStorage
