import React from 'react'
import {Text, FlatList} from 'react-native'

import produtos from './produtos'

export default () => {
    
    const produtoRender = ({item: p}) => {
        return <Text>0{p.id}) {p.nome}</Text>
    }

    return(
        <>
            <Text>
                Lista de produtos
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}>
            </FlatList>
        </>
    )
   
}