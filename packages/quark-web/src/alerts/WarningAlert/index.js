// @flow
// external imports
import * as React from 'react'
// local imports
import BaseAlert from '../BaseAlert'
import type { AlertProps } from '../BaseAlert'

const WarningAlert = props => <BaseAlert dismissable={false} {...props} />

export default WarningAlert
