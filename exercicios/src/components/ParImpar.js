import React from 'react'
import {Text, View} from 'react-native'

export default ({num}) => {
    return(
        <View>
            <Text> O resultado é {num}</Text>
            {num % 2 == 0
                ? <Text>é par</Text>
                : false
            }
        </View>
    )
}