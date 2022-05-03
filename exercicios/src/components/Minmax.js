import React from 'react'
import {Text} from 'react-native'

export default (props) => {
    return(
        <Text>O valor {props.max} eh maior que {props.min}</Text>
    )
}

