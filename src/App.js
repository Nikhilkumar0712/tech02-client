
import React,{useState,createContext} from 'react'
import Navbar from './Navbar'
import Register from './Register'
import Login from './Login'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Myprofile from './Myprofile';

export const store=createContext()


const App = () => {
  const [token, settoken] = useState(null)
  return (
    <div>
    <store.Provider value={[token,settoken]}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/myprofile' element={<Myprofile/>}/>
        </Routes>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App