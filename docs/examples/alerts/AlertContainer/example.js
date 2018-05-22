// external imports
import React from 'react'
import { AlertContainer, PrimaryButton, triggerAlert, FlexRow } from 'quark-web'

const styles = {
    button: { marginRight: 10 }
}

/* title: "Default namespace" */
export default () => (
    <React.Fragment>
        <AlertContainer style={{ position: 'fixed', top: 10, left: 10, right: 10, zIndex: 2 }} />
        <FlexRow>
            <PrimaryButton
                onPress={() => triggerAlert({ type: 'success', message: 'Success Message' })}
                style={styles.button}
            >
                Success
            </PrimaryButton>
            <PrimaryButton
                onPress={() => triggerAlert({ type: 'warning', message: 'Warning Message' })}
                style={styles.button}
            >
                Warning
            </PrimaryButton>
            <PrimaryButton
                onPress={() => triggerAlert({ type: 'info', message: 'Info Message' })}
                style={styles.button}
            >
                Info
            </PrimaryButton>
        </FlexRow>
    </React.Fragment>
)
