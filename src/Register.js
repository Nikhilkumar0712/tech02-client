import React,{useState} from 'react'
import axios from 'axios';

const Register = () => {
    const [data,setData] = useState({
        firstnama:'',
        lastname:'',
        phone:"",
        email:'',
        password:'',
        confirmpassword:''
    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/register',data).then(
         res=>alert(res.data)
        )
    }
    return (
        <div>
            <center>
            <form onSubmit={submitHandler}>
                <h3>Register</h3>
                <input type="text" onChange={changeHandler} name="firstname" placeholder="first name" /><br />
                <input type="text" onChange={changeHandler} name="lastname" placeholder="Last Name" /><br />
                <input type="number" onChange={changeHandler} name="phone" placeholder="phone" /><br />
                <input type="email" onChange={changeHandler} name="email" placeholder="Email" /><br />
                <input type="password" onChange={changeHandler} name="password" placeholder="Password" /><br />
                <input type="password" onChange={changeHandler} name="confirmpassword" placeholder="Confirm Password" /><br />
                <input type="submit" value="Register" /><br />
            </form>
            </center>
        </div>
    )
}

export default Register