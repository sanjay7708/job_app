import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './Components/Auth/Login'
import { Signup } from './Components/Auth/Signup'
import { Home } from './Components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
      
    </>
  )
}

export default App
