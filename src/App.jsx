import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './compnents/First'
import Tab from './compnents/Tab'
import Navbar from './compnents/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasic from './compnents/Statebasic'
import Reg from './compnents/Reg'
import Count from './compnents/Count'
import New from './compnents/New'
import Formbasics from './compnents/Formbasics'
import ApiGet from './compnents/ApiGet'
import Jewelery from './compnents/Jewelery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<First/>}/>
      <Route path='/r' element={<Reg data={{Name:"Ajay",age:20,place:"way"}}/>}/>
      <Route path='/t' element={<Tab/>}/>
      <Route path='/s' element={<Statebasic/>}/>
      <Route path='/c' element={<Count/>}/>
      <Route path='/q' element={<New/>}/>
      <Route path='/w' element={<Formbasics/>}/>
      <Route path='/y' element={<ApiGet/>}/>
      <Route path='/k' element={<Jewelery/>}/>
    </Routes>  
    </>
  )
}

export default App
