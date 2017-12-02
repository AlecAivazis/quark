// @flow
// external imports
import * as React from 'react'
import { View } from 'react-native-web'
// local imports
import { Dropdown } from '..'
import styles from './styles'
import type { OptionValue } from '../Option'
import { Text, EventListener, ChevronDownIcon } from 'quark-web'

type Props = {
    value: OptionValue,
    placeholder: React.Node,
    children: React.Node,
    onChange?: OptionValue => void
}

type State = {
    value: ?OptionValue
}

// needs to be a class to hold references
class Select extends React.Component<Props, State> {
    constructor(props: Props, ...args: any[]) {
        // instantiate this
        super(props, ...args)
        // set the initial state to match the value prop
        this.state = {
            value: props.value
        }
    }

    render = () => (
        <Dropdown
            toggle={this._toggleElement}
            max={this._options.length}
            style={{ width: 200 }}
            dropdownStyle={{ maxHeight: 280 }}
        >
            {({ index: keyIdx, setIndex, toggle }) => [
                ...this._children.map((child, optionIdx) => {
                    // grab any previously defined onClick handlers
                    const onClick = child.props.onClick || (() => {})
                    const onMouseOver = child.props.onMouseOver || (() => {})
                    // add the required event handlers and props to the option
                    return React.cloneElement(child, {
                        key: child.props.value,
                        active: keyIdx === optionIdx,
                        selected: this.state.value === child.props.value,
                        onMouseOver: (evt: Event) => {
                            onMouseOver(evt)
                            setIndex(optionIdx)
                        },
                        onClick: (evt: Event) => {
                            onClick(evt)
                            this._onChange({ index: optionIdx, toggle })
                        }
                    })
                }),
                <EventListener
                    event="keydown"
                    filter={(evt: any) => evt.which === 13}
                    key="event-listener"
                >
                    {(evt: Event) => {
                        // prevent unwanted bubbling
                        evt.preventDefault()

                        // we're done
                        this._onChange({
                            index: keyIdx,
                            toggle
                        })
                    }}
                </EventListener>
            ]}
        </Dropdown>
    )

    _onChange = ({ toggle, index }: { index: number, toggle: () => void }) => {
        // the value of the appropriate option
        const { value } = this._options[index].props
        // save the value
        this.setState({ value })

        // if there is a callback to trigger
        if (this.props.onChange) {
            // pass the value to the parent
            this.props.onChange(value)
        }

        // close the dropdown
        toggle()
    }

    get _toggleElement() {
        // the content of the toggle element
        let content

        // find the child we have selected
        let selectedChild = this._options.find(child => child.props.value === this.state.value)
        // if we dont have a value to show or couldn't find a matching child
        if (!this.props.value || !selectedChild) {
            // return null if we have a placeholder, otherwise the first child is selected
            content = this.props.placeholder || this._children[0].props.children
        } else {
            content = selectedChild.props.children
        }

        return (
            <View style={styles.toggle}>
                <Text style={{ marginRight: 4 }}>{content}</Text>
                <ChevronDownIcon />
            </View>
        )
    }

    componentWillReceiveProps(nextProps: Props) {
        // if the value has changed
        if (nextProps.value !== this.state.value) {
            // update the internal tracker
            this.setState({ value: nextProps.value })
        }
    }

    // the list of options in the select
    get _options() {
        return this._children
    }

    // the flat list of options
    get _children() {
        return React.Children.toArray(this.props.children)
    }
}

export default Select
