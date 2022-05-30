import React, {Component} from 'react'
import {Text, View, TextInput} from 'react-native'

export default class Mega extends Component{

    alterarQuat = (quant) => {
        this.setState({quantidade: quant})
    }

    state = {
        quantidade: this.props.quantidade,
        numeros: []
    }

    gerarNumeroQueNaoTEnha = numeros => {
        const num = Math.floor(Math.random()*60) + 1

        if(numeros.includes(num)){
            return gerarNumeroQueNaoTEnha(numeros)
        }else{
            return novo
        }

    }

    gerarNumeros = () => {
        this.setState({numeros: []})
    }

    render() {
        return(
            <>
            <Text>Gerador de mega sena {this.state.quantidade}</Text>
            <TextInput
                placeholder="oi"
                value={this.state.quantidade}
                onChangeText={this.alterarQuat}
            />
            </>
        )
    }
}