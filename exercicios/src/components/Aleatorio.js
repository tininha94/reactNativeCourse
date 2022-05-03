import React from 'react'
import {Text} from 'react-native'


export default (props) => {
    const numAleatorio = parseInt(Math.random() * (props.max - props.min + 1)) + props.min

    return(
        <Text>A sua resposta eh: {numAleatorio}</Text>
    )
}