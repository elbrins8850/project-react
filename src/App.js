import React,{useEffect, useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import  {ScaleLoader}  from 'react-spinners'
import Home from './Home'
import Navbarrrr from './Navbarrrr'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
    const [ loading,setloading]=useState(false);
    useEffect(()=>{
      setloading(true)
      setTimeout(()=>{
        setloading(false)
      },3000)
    },[])

  return (
    <BrowserRouter className="all">
    
    {loading ? <div className='loading'> <ScaleLoader color="#f87765" loading={loading}width={5}  margin={10}
  radius={10} height={200}  /></div> : 
   <>
   <Navbarrrr/>
      <Routes className="all"> 
      
        <Route path='/' element={<Home/>}/>
      </Routes>
      </>  
    }
    </BrowserRouter>
  )
}

export default App
