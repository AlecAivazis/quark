// @flow
// external imports
import * as React from 'react'
import ReactMarkdown from 'react-markdown'
// local imports
import { Text, FlexColumn } from 'quark-core'
import { Table, TableHeader } from '../../table'
import TableCell from './TableCell'
import InlineCode from './InlineCode'
import Code from './Code'
import styles from './styles'

type Props = {
    children: string,
    textStyle: CSSStyleDeclaration
}

const Markdown = ({ children, textStyle, renderers, ...unused }: Props) => (
    <ReactMarkdown
        source={children}
        renderers={{
            root: FlexColumn,
            table: Table,
            tableHead: TableHeader,
            paragraph: ({ children }) => (
                <Text style={{ ...styles.p, ...textStyle }}>{children}</Text>
            ),
            tableCell: TableCell,
            inlineCode: props => <InlineCode {...props} style={textStyle} />,
            code: props => <Code {...props} style={textStyle} />,
            ...renderers
        }}
        {...unused}
    />
)

export default Markdown
