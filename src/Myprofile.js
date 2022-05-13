import React,{useState,useContext,useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import {store} from './App';
import axios from 'axios';
const Myprofile = () => {
    const [token,settoken]=useContext(store)
    const [data,setData] = useState(null);
    useEffect(() =>{
        axios.get('http://localhost:5000/myprofile',{
            headers: {
                'x-token' : token
            }
        }).then(res => setData(res.data)).catch((err) => console.log(err))
    },[token])
    if(!token){
        return <Navigate to='/login' />
    }
  return (
    <div>
    <h1>Dashboard</h1>
{
    data &&
    <center>
        <h1>welcome Again : {data.username}</h1>
        <button onClick={()=>settoken(null)}>logout</button>
    </center>
}
    </div>
  )
}

export default Myprofile