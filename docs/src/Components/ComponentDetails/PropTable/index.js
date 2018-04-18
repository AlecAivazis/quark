// external imports
import React from 'react'
import { H3, FlexColumn, Text } from 'quark-web'
// local imports
import styles from './styles'

const PropTable = ({ info, style }) => (
    <React.Fragment>
        <H3 style={{ ...styles.header, ...style }}>Props</H3>
        {info.props ? (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(info.props)
                        .sort()
                        .map(prop => {
                            const propInfo = info.props[prop]

                            return (
                                <tr>
                                    <td>{prop}</td>
                                    <td>{propInfo.value}</td>
                                    <td>{JSON.stringify(!propInfo.nullable)}</td>
                                    <td>{propInfo.description}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        ) : (
            <Text>No prop info available</Text>
        )}
    </React.Fragment>
)

export default PropTable
