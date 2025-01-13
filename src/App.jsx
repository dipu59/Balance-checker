import { useState } from 'react'
import './App.css'
import Head from './Components/Head'
import Balances from './Components/Balance'
import IncomeExpancess from './Components/IncomeExpances'
import InputTranjections from './Components/inputTranjection'
import TranjectonLists from './Components/TranjectonList'

function App() {
  //transection gula save korar jonno sue state define
  const [transections, setTranaction] = useState([]);

  //purbar transetion ar sata new transection add
  const addTransection = (transection) =>{
    setTranaction([...transections, transection])
  }
  //Balance add
  const calcluteBalance = ()=>{
  return transections.reduce((acc, transection)=>acc + transection.amount, 0)
}

//Income Add
const calcluteIncome = ()=>{
  return transections
  .filter((transection)=>transection.amount > 0).reduce((acc, transection)=>acc + transection.amount, 0)
}

//Expance add
const calcluteExpance = ()=>{
  return transections
  .filter((transection)=>transection.amount < 0)
  .reduce((acc, transection)=>acc + transection.amount, 0)
}
  return (
    <>
      <Head/>
      <Balances balance={calcluteBalance()}/>
      <IncomeExpancess income={calcluteIncome()} expances={calcluteExpance()}/>
      <TranjectonLists transitions={transections}/>
      <InputTranjections addTransection={addTransection}/>

    </>
  )
}

export default App
