import React from 'react'
import {Text, Platform} from 'react-native'

export default ()=>{
    if(Platform.OS === 'android'){
        return <Text>ta no android</Text>
    }else if(Platform.OS === 'ios'){
        return <Text>ta no ios</Text>
    }else{
        return <Text>deu ruim</Text>
    }
}