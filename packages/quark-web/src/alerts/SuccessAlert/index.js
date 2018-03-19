// @flow
// external imports
import * as React from 'react'
// local imports
import BaseAlert from '../BaseAlert'
import type { AlertProps } from '../BaseAlert'

const MessageAlert = props => <BaseAlert dismissable={true} {...props} />

export default MessageAlert
