import React from 'react'
import {Text, View} from 'react-native'
import styles from './../../assets/Styles'

export default props => {
    return(
        <View style={styles.mineContainer}>
            <View style={styles.coreMine}/>
            <View style={styles.line}/>
            <View style={[styles.line, { transform: [{ rotate: '45deg'}] }]}/>
            <View style={[styles.line, { transform: [{ rotate: '90deg'}] }]}/>
            <View style={[styles.line, { transform: [{ rotate: '135deg'}] }]}/>
        </View>  
    )
}