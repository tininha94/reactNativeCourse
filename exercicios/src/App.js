import React, {useState} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Priemiro from './components/Primeiro'
import styles from './../assets/styles.js'
import Minmax from './components/Minmax'
import Aleatorio from './components/Aleatorio'
import Batatinha from './components/Titulo'
import Contador from './components/Contador'
import Diferenciar from './components/Diferenciar'
import DiferenciarNum from './components/ParImpar'
import Lista from './components/Lista'
import Mega from './components/mega/Mega'

export default () => {
    return (
        <View style={styles.App}>
            <Mega quantidade={6}/>
        </View>
    )
}
  