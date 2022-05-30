import React from 'react'
import {View, Text} from 'react-native'
import params from './../params'
import styles from './../../assets/Styles'
import Mine from './Mine'
import Flag from './Flag'

export default props => {
    const {mined, opened, nearMines, exploded, flagged} = props
    const styleField = [styles.field]
    let color = null

    if(opened)
        styleField.push(styles.opened)
    if(exploded)
        styleField.push(styles.exploded)
    if(styleField.length === 1) 
        styleField.push(styles.flagged, styles.regular)
    if(flagged)
        styleField.push(styles.regular)

    if(nearMines > 0){
        if(nearMines == 1) 
            color = '#2A28D7'
        else if (nearMines == 2) 
            color = '#2B520F'
        else if (nearMines > 2 && nearMines < 6)
            color = '#F9060A'
        else
            color = '#F221A9'
    }

    return(
        <View style={styleField}>
            {!mined && opened && nearMines > 0 ?
                <Text style={styles.label, {color: color}} >
                    {nearMines} 
                </Text> 
                : false}
            {mined && opened ? <Mine /> : false}
            {flagged && !opened ? <Flag/> : false}
        </View>
    )
}