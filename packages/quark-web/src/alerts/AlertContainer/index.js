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
            <>
                {this.state.alerts.length > 0 && (
                    <FlexColumn style={this.props.style}>
                        <FlexColumn style={styles.contentContainer}>
                            {this.state.alerts
                                .slice(0, this.props.maxAlerts)
                                .map((alert: AlertConfig) => {
                                    // if the alert is a warning
                                    if (alert.type === 'warning') {
                                        return <WarningAlert key={alert.id} {...alert} />
                                    } else if (alert.type === 'success') {
                                        return <SuccessAlert key={alert.id} {...alert} />
                                    } else {
                                        return <BaseAlert key={alert.id} {...alert} />
                                    }
                                })}
                        </FlexColumn>
                    </FlexColumn>
                )}
                <EventListener event={QUARK_ALERT}>
                    {({ detail: alert }: { detail: AlertConfig }) => {
                        // if we received an alert that matches this containers namespace
                        if (alert.namespace === this.props.namespace) {
                            // add it to the list
                            this.setState(({ alerts }) => ({
                                alerts: [...alerts, alert]
                            }))
                        }
                    }}
                </EventListener>
            </>
        )
    }
}

export default AlertContainer
