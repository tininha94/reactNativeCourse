import React from 'react'
import {View} from 'react-native'
import styles from './../../assets/Styles'
import Field from './Fields'

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c} />
        })
        return <View key={r} style={{flexDirection: 'row'}}>{columns}</View>
    })
    return <View style={styles.mineFieldContainer}>{rows}</View>
    
}