import React, {useState} from 'react'
import {Text, Button} from 'react-native'

export default props => {
    value = props.valorInicial + 1

    return(
        <Button title="executar" onPress={() => props.funcao(value)}/>
    )
}