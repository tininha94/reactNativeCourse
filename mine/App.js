import React, {useState} from 'react';
import {Text, View} from 'react-native'
import params from './src/params'
import Field from './src/components/Fields'
import Mine from './src/components/Mine'
import styles from './assets/Styles'
import MineField from './src/components/MineField'
import {createMinedBoard} from './src/functions'

export default () => {
  const [tabuleiro, setTabuleiro] = useState(createState())

  function minesAmount() {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return Math.ceil(cols * rows * params.difficultLevel)
  }

  function createState() {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return (
      createMinedBoard(rows, cols, minesAmount())
    )
  }

  return(
    <View style={styles.boardContainer}>
      <View stye={styles.board}>
        <MineField board={tabuleiro}/>
      </View> 
    </View>
  )
}