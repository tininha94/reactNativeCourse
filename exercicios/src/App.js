import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Priemiro from './components/Primeiro'
import styles from './../assets/styles.js'
import Minmax from './components/Minmax'
import Aleatorio from './components/Aleatorio'

export default () => (
    <View style={styles.App}>
        <Aleatorio min={3} max={20}/>
    </View>
)
