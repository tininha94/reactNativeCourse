import React from 'react'
import {Text, View} from 'react-native'
import styles from './../../assets/Styles'

export default props => {
    return(
        <View style={styles.display}>
            <Text style={styles.displayValue} numberOfLines={1}>
                {props.value}
            </Text>
        </View>
    )
}