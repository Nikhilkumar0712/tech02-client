import React,{useContext,useState} from 'react'
import { Link } from "react-router-dom";
import { store } from './App';
const Navbar = () => {
  const [token,setToken] = useContext(store)
  return (
    <div>
    <center>

    <h1>welcome to tech02</h1>
    </center>
    {!token &&
        <ul>
            <Link to='/'>Register</Link>
            <br />
            <Link to='/login'>Login</Link>


            
        </ul>
    }
    </div>
  )
}

export default Navbar