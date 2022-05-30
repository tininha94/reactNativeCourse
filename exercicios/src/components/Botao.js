import React from 'react'
import {Button} from 'react-native'

export default () =>{

    function teste(){
        console.warn("to no teste")
    }
    function executar(){
        return teste
    }

    return(
        <Button title="teste" 
                onPress={executar()}
        />
    )
}