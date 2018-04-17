// external imports
import * as React from 'react'
import lodash from 'lodash'

type FormRenderProp = {
    getValue: string => any,
    setValue: ({ [key: string]: string }) => void,
    getError: string => string,
    data: { [key: string]: string },
    hasErrors: boolean,
    clear: () => void
}

type Props = {
    children: FormRenderProp => React.Node,
    onChange: ({ [key: string]: any }) => void,
    validate: { [key: string]: (any) => ?Error },
    transform: { [key: string]: (any) => any },
    value: { [key: string]: any },
    initialErrors: boolean,
    initialData: { [key: string]: any }
}

class Form extends React.Component<Props> {
    static defaultProps = {
        validate: {},
        transform: {},
        initialErrors: false
    }

    render() {
        // figure out the child we should show
        const child = this.props.children({
            getValue: this._getValue,
            setValue: this._updateValue,
            getError: this._getErrors,
            data: this.state.data,
            hasErrors: this._hasErrors,
            clear: this._clear
        })

        // if the child is not a valid element
        if (!React.isValidElement(child)) {
            // yell loudly
            throw new Error('Child of Form must return a valid react element.')
        }

        return child
    }

    // A field counts as having been updated if it had initial data
    _isUpdated = key =>
        this.state._updated[key] ||
        (this.props.initialData &&
            (this.props.initialData[key] !== null &&
                typeof this.props.initialData[key] !== 'undefined'))

    get _hasErrors() {
        return (
            Object.values(this.state.errors).filter(
                err => (Array.isArray(err) ? err.length > 0 : err)
            ).length > 0
        )
    }

    _updateValue = newValues => {
        // the state after updating the value
        const state = { ...this.state }
        // for each value we want to change
        for (const key of Object.keys(newValues)) {
            // grab the transform if it exists
            const transform = this.props.transform[key] || (str => str)
            // and apply it to the new value and update the key to the value
            state.data[key] = transform(newValues[key])
            state._updated = {
                ...state._updated,
                [key]: true
            }
        }

        // Run validation over all the fields if one exists for the field
        for (const key of Object.keys(this.props.validate)) {
            // Pass the updated and transformed value onto the validator and store the error result
            // Also pass all of the current values if the validator needs to validate based on other values
            state.errors[key] = this.props.validate[key](state.data[key], state.data)
        }
        // update the component state
        this.setState(state, () => {
            // if we have an onchange handler to call
            if (this.props.onChange) {
                // pass the form data to the handler
                this.props.onChange(this.state.data)
            }
        })
    }

    _getValue = key => {
        return this.state.data[key]
    }

    _getErrors = key => {
        // if we aren't supposed to calculate initial errors and we haven't been updated
        if (!this.props.initialErrors && !this._isUpdated(key)) {
            // return the empty error value
            return null
        }

        return this.state.errors[key] || null
    }

    _resetStates(resetData) {
        const initialData = resetData || this.props.initialData || this.props.value || {}
        return {
            _updated: {},
            data: { ...initialData },
            // we could start off with errors
            errors: lodash.mapValues(
                this.props.validate,
                // if the validator doesn't like empty strings
                (validator, key) => validator(initialData[key] || '', initialData)
            )
        }
    }

    _clear = resetData => {
        this.setState(this._resetStates(resetData))
    }

    _didValueUpdate = (newValue, oldValue) =>
        (newValue && !oldValue) || JSON.stringify(newValue) !== JSON.stringify(oldValue)

    componentWillReceiveProps(nextProps) {
        const { value: newValue, initialData: newInitialData } = nextProps
        const { value: oldValue, initialData: oldInitialData } = this.props
        // if we were given a new value or initial data
        if (newInitialData && this._didValueUpdate(newInitialData, oldInitialData)) {
            this._clear(newInitialData)
        }
        // value have the last say
        if (newValue && this._didValueUpdate(newValue, oldValue)) {
            // update the internal tracker
            this._updateValue(newValue)
        }
    }

    constructor(props, ...args) {
        super(props, ...args)

        this.state = this._resetStates()
    }
}

export default Form
