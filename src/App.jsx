/* eslint no-eval: 0 */
import React, { useState } from 'react';
import words from 'lodash.words';
import Functions from './components/Functions';
import Numbers from './components/Numbers';
import MathOperations from './components/MathOperations';
import Result from './components/Result';
import './App.css';
// import { number } from 'prop-types';


const App = () => {

  const [stack, setStack] = useState("")
  const items = words(stack, /[^-^+^*^/]+/g )
  const value = items.length > 0 ? items[items.length-1] : "0" ;

  console.log('RENDERIZACIÓN DE APP', value)
  
  return (
  <main className='react-calculator'>
    <Result value={value}/>
   
    <Numbers onClickNumber={number=>{
      console.log("Click en number", number)
      setStack(`${stack} ${number}`)
    }}
    
    />

    {/* <Numbers 
      onClickNumber={(number) => {
        console.log("Click en number", number);
        funcionModificaTexto(number);
      }} 
    /> */}


    <Functions 
      onContentClear={() => {
        console.log("Content Clear")
        setStack('')
      }}
        
      onDelete={() => {
        if (stack.length > 0){
        const newStack = stack.substring(0, stack.length - 1)
        console.log("onDelete", newStack)
        setStack(newStack)
      
        }
      }}
    />
    <MathOperations 
      onClickOperation={operation => {
        console.log('Operation: ', operation)
        setStack(`${stack} ${operation}`)
      }}
      onClickEqual={equal => {
        console.log('Equal: ', equal)
        setStack(eval(stack).toString())
      }}/>
  </main>)
}

export default App;
