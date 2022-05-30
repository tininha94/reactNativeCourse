import React from 'react'
import {Text, TouchableHighlight} from 'react-native'
import styles from './../../assets/Styles'

export default props => {
    const stylesButton = [styles.button]

    if (props.double) stylesButton.push(styles.largeButton)
    if (props.triple) stylesButton.push(styles.largerButton)
    if (props.isOperation) stylesButton.push(styles.operationButton)

    return(
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}