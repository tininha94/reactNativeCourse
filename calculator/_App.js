import {View, Text, TouchableHighlight, StyleSheet} from 'react-native'
import React, {Component, useState} from 'react';
import Button from './src/components/Button'
import Styles from './assets/Styles'
import Display from './src/components/Display'

export default () => {
    const [displayValue, setDisplayValue] = useState("0")
    const [operation, setOperation] = useState(null)
    const [clearDisplay, setClearDispaly] = useState(false)
    const [values, setValues] = useState([0,0])
    const [current, setCurrent] = useState(0)

    var value = ["0","0"]

    function inicialState(){
      setDisplayValue('0')
      setClearDispaly(false)
      setOperation(null)
      setValues(["0","0"])
      setCurrent(0)
    }    

    function addDigit(n){
      if(n === '.' && displayValue.includes('.')){
        return
      }

      if (displayValue === '0' || clearDisplay){
        value[current] = n

        console.log(value)
      }else{
        n = displayValue + n
        value[current] = displayValue + n

        console.log(value)
      }

        setDisplayValue(n)
      
        setValues(value)
    }

    function clearMemory(){
      inicialState()
    }

    function setOp(op){
      if(op === '=' && operation != null){

        const val = values[0] + operation + values[1]
        const result = eval(val)

        setDisplayValue(result)
        setClearDispaly(true)

      }else{
        if(operation != null){
          const val = values[0] + operation + values[1]
          const result = eval(val)


          value[0] = result
          console.log(value)

          setValues(value)
          setDisplayValue(result)
        }
        setCurrent(1)
        setOperation(op)
        setClearDispaly(true)
      }
    }

    return(
      <View style={Styles.container}>
        <Display value={displayValue}/>
        <View style={Styles.buttons}>
          <Button label='AC' triple onClick={clearMemory}/> 
          <Button label='/' isOperation onClick={()=> setOp("/")}/>
          <Button label='7' onClick={addDigit}/>
          <Button label='8' onClick={addDigit}/>
          <Button label='9' onClick={addDigit}/>
          <Button label='*' isOperation onClick={()=> setOp("*")}/>
          <Button label='4' onClick={addDigit}/>
          <Button label='5' onClick={addDigit}/>
          <Button label='6' onClick={addDigit}/>
          <Button label='-' isOperation onClick={()=> setOp("-")}/>
          <Button label='1' onClick={addDigit}/>
          <Button label='2' onClick={addDigit}/>
          <Button label='3' onClick={addDigit}/>
          <Button label='+' isOperation onClick={()=> setOp("+")}/>
          <Button label='0' double onClick={addDigit}/>
          <Button label='.' onClick={addDigit}/>
          <Button label='=' isOperation onClick={()=> setOp("=")}/>
        </View>
      </View>
    );    
};

