// @flow
// external imports
import * as React from 'react'
import { GetTheme, IconCheckCircle } from 'quark-core'
// local imports
import BaseAlert from '../BaseAlert'
import type { AlertProps } from '../BaseAlert'

const MessageAlert = (props: AlertProps) => (
    <GetTheme>
        {({ green }) => (
            <BaseAlert
                dismissable={true}
                style={{ backgroundColor: green }}
                icon={<IconCheckCircle />}
                {...props}
            />
        )}
    </GetTheme>
)

export default MessageAlert
