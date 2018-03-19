// @flow
// external imports
import * as React from 'react'
import { IconAlertTriangle, GetTheme } from 'quark-core'
// local imports
import BaseAlert from '../BaseAlert'
import type { AlertProps } from '../BaseAlert'

const WarningAlert = props => (
    <GetTheme>
        {({ red }) => (
            <BaseAlert
                dismissable={false}
                style={{ backgroundColor: red }}
                icon={<IconAlertTriangle />}
                {...props}
            />
        )}
    </GetTheme>
)

export default WarningAlert
