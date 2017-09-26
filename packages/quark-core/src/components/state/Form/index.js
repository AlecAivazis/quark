// external imports
import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {

  static propTypes = {
    children: PropTypes.func.isRequired,
    validate: PropTypes.object,
    transform: PropTypes.object,
    initialErrors: PropTypes.bool,
    initialData: PropTypes.object
  }

  static defaultProps = {
    validate: {},
    transform: {},
    initialErrors: false,
    initialData: {},
  }

  render() {
    // figure out the child we should show
    const child = this.props.children({
      getValue: this._getValue,
      setValue: this._updateValue,
      getError: this._getErrors,
      hasErrors: this._hasErrors,
      clear: this._clear,
    })

    // if the child is not a valid element
    if (!React.isValidElement(child)) {
      // yell loudly
      throw new Error("Child of Form must return a valid react element.")
    }

    return child
  }

  get _hasErrors() {
    // figure out if the form has been updated
    const updated = Object.values(this.state._updated)
    const hasUpdated = updated.length > 0 && updated.filter(val => val).length > 0

    // if we have updated the form
    return !hasUpdated || (
      // and we have registered an error for one of the keys
      Object.values(this.state.errors).filter(err =>
        Array.isArray(err) ? err.length > 0 : err
      ).length > 0
    )
  }

  _updateValue(newValues) {
    // the state after updating the value
    const state = {...this.state}
    // for each value we want to change
    for (const key of Object.keys(newValues)) {
      // grab the transform if it exists
      const transform = this.props.transform[key] || (str => str)
      // and apply it to the new value
      const newValue = transform(newValues[key])

      // if we have a validator for the field
      if (this.props.validate[key]) {
        // pass the value onto the validator and store the result
        state.errors[key] = this.props.validate[key](newValue)
      }

      // update the key to the value
      state.data[key] = newValue
      state._updated = {
        ...this.state._updated,
        [key]: true

      }
    }

    // the onchange handler we were passed
    const onChange = this.props.onChange || (() => {})

    // update the component state
    this.setState(state, () => onChange(this.state.data))
  }

  _getValue(key) {
    return this.state.data[key]
  }

  _getErrors(key) {
    // if we aren't supposed to calcuate initial errors and we haven't been updated
    if (!this.props.initialErrors && !this.state._updated[key]) {
      // return the empty error value
      return null
    }

    return this.state.errors[key] || null
  }

  _clear() {
    this.setState({
      errs: {},
      data: {},
      _updated: {},
    })
  }


  constructor(props, ...args) {
    super(props, ...args)

    // grab the important props
    const { initialData } = props

    // set the initial state
    this.state = {
      _updated: {},
      data: initialData,
      // we could start off with errors
      errors: Object.keys(this.props.validate).map(
        // if the validator doesn't like empty strings
        key => this.props.validate[key](initialData[key] || '')
      )
    }

    // function binds
    this._clear = this._clear.bind(this)
    this._getErrors = this._getErrors.bind(this)
    this._getValue = this._getValue.bind(this)
    this._updateValue = this._updateValue.bind(this)
  }
}

export default Form
