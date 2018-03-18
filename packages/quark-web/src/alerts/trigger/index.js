// external imports
import * as React from 'react'

export type AlertConfig = {
    content?: React.ReactNode,
    message?: string,
    type?: 'success' | 'warning' | 'alert',
    namespace?: 'default',
    duration?: number
}

export const QUARK_ALERT = 'QUARK_ALERT'

export default function({ ...config }: AlertConfig) {
    // the metadata for the event
    const detail = {
        namespace: 'default',
        type: 'message',
        ...config,
        id: new Date().getTime()
    }

    // construct event with details
    const alert = new CustomEvent(QUARK_ALERT, { detail })

    // dispatch event
    window.dispatchEvent(alert)
}
