// external imports
import * as React from 'react'
import { FlexColumn } from 'quark-core'
// local imports
import { QUARK_ALERT } from '../trigger'
import { EventListener } from '../../window'
import BaseAlert from '../BaseAlert'
import SuccessAlert from '../SuccessAlert'
import WarningAlert from '../WarningAlert'
import type { AlertConfig } from '../trigger'
import styles from './styles'

type Props = {
    maxAlerts?: number,
    namespace?: string
}

type State = {
    alerts: Array<AlertConfig>
}

// the map of alert types to components
const alertMap = {
    warning: WarningAlert,
    success: SuccessAlert
}

class AlertContainer extends React.Component<Props, State> {
    static defaultProps = {
        namespace: 'default',
        maxAlerts: 5
    }

    state = {
        alerts: []
    }

    render() {
        return (
            <React.Fragment>
                {this.state.alerts.length > 0 && (
                    <FlexColumn style={this.props.style}>
                        <FlexColumn style={styles.contentContainer}>
                            {this.state.alerts
                                .slice(0, this.props.maxAlerts)
                                .map((alert: AlertConfig) => {
                                    // grab the appropriate kind of alert
                                    const AlertComponent = alertMap[alert.type] || BaseAlert

                                    // render the right alert
                                    return (
                                        <AlertComponent
                                            key={alert.id}
                                            {...alert}
                                            onDismiss={() => this._removeAlert(alert.id)}
                                        />
                                    )
                                })}
                        </FlexColumn>
                    </FlexColumn>
                )}
                <EventListener event={QUARK_ALERT}>
                    {({ detail: alert }: { detail: AlertConfig }) => {
                        // if we received an alert that matches this containers namespace
                        if (alert.namespace === this.props.namespace) {
                            // add the alert
                            this._addAlert(alert)
                        }
                    }}
                </EventListener>
            </React.Fragment>
        )
    }

    // add an alert to the list
    _addAlert = alert => {
        // add it to the list
        this.setState(({ alerts }) => ({
            alerts: [...alerts, alert]
        }))
    }

    // remove an alert from the list
    _removeAlert = alertId => {
        // add it to the list
        this.setState(({ alerts }) => ({
            alerts: alerts.filter(({ id }) => id !== alertId)
        }))
    }
}

export default AlertContainer
