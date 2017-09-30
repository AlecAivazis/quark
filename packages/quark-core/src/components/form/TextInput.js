// external imports
import React, { Component } from 'react'
import { TextInput as NativeInput, View, Text, StyleSheet, Modal } from 'react-native'
// local imports
import { primaryColor, secondaryColor, grey2, grey4, baseDim } from '../../styles'
import { Button, PrimaryButton, SecondaryButton } from '../buttons'
import { StatusBar } from 'quark-native'

class TextInput extends Component{

    state = {
        showModal: false,
        value: '',
    }

    componentWillMount() {
        // if there is an initial value
        if (this.props.children) {
            // copy it to the internal state
            this.setState({
                value: this.props.children
            })
        }
    }

    componentWillReceiveProps({children}) {
        // if we are getting a new value
        if (typeof children !== 'undefined') {
            // copy it to the internal state
            this.setState({
                value: children
            })
        }
    }

    _showModal() {
        this.setState({
            showModal: true,
        })
    }

    _cancel() {
        this.setState({
            showModal: false,
        })
    }

    _submitModal() {
        // if there is an onChange handler
        if (this.props.onChange) {
            // pass the value to the handler
            this.props.onChange(this.state.value)
        }
        this.setState({
            showModal: false,
        })
    }

    constructor(...args) {
        super(...args)

        // function binds
        this._showModal = this._showModal.bind(this)
        this._cancel = this._cancel.bind(this)
        this._submitModal = this._submitModal.bind(this)
    }

    render() {
        const {style, children, content, onChange, ...unused} = this.props

        // the content of the input
        const value =  typeof children === 'undefined' ? this.state.value : children

        return (
            <View style={[styles.container, style]}>
                <Button
                    style={[
                        styles.inputPlaceholder,
                        styles.inactive,
                    ]}
                    onPress={this._showModal}
                    constrainSize={false}
                >
                    {value}
                </Button>
                    {this.state.showModal && (
                        <Modal style={{backgroundColor: "white"}}>
                            <StatusBar/>
                            <View style={styles.content}>
                                <NativeInput
                                    autoFocus
                                    style={styles.input}
                                    selectionColor={primaryColor}
                                    returnKeyType="done"
                                    onSubmitEditing={this._submitModal}
                                    value={this.state.value}
                                    onChangeText={value => this.setState({ value })}
                                />
                                <View style={styles.modalControls}>
                                    <SecondaryButton onPress={this._cancel} style={[styles.button, styles.leftButton]}>
                                        Cancel
                                    </SecondaryButton>
                                    <PrimaryButton onPress={this._submitModal} style={[styles.button, styles.rightButton]}>
                                        Submit
                                    </PrimaryButton>
                                </View>
                            </View>
                        </Modal>
                    )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputPlaceholder: {
        borderRadius: 2,
        borderWidth: 1,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 10 * baseDim,
        paddingTop: 3 * baseDim,
        paddingBottom: 3 * baseDim,
        paddingLeft: 2 * baseDim,
        paddingRight: 2 * baseDim,
    },
    inactive: {
        borderColor: grey2,
    },
    active: {

    },
    disabled: {

    },
    modalControls: {
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        fontSize: 12 * baseDim,
        width: '60%',
        height: 15 * baseDim,
        display: 'flex',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 8 * baseDim,
        marginBottom: 8 * baseDim,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 100,
    },
    leftButton: {
        marginRight: 3 * baseDim,
    },
    rightButton: {

    },
})

export default TextInput
