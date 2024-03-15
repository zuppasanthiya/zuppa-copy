// import React, { useState } from 'react';
// import './Login.css'
// import Header from '../../components/header';
// import { useNavigate } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import PersonIcon from '@mui/icons-material/Person';



// function Login() {

// const [email, setEmail] = useState('')
// const [password, setPassword] = useState('')
// const navigate=useNavigate()

// const isValid = (email !== "") && (password !== "")


// const postMethod =()=>{
// console.log(email)
// console.log(password)
// navigate('/ShopNow')
// }

// const registerHandle =()=>{
//   navigate("/Register")
// }
//   return (
//   <>
//     <Header />
//   <div  className='login-container'>

//  <div className='login-container-page'>
//  <PersonIcon color="primary" fontSize="large"/>
//  <h3> Login</h3>

//     <TextField id="outlined-basic" label="Email Id" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter Your Email Id' required=''/>
//   <br/>
//     <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)} type='text' placeholder='Enter Your Password'/>
//       <a href="/Register"> </a>
//       <button className='login-button' onClick={postMethod} disabled={!isValid}>Submit</button>
      
//   <p>Creat an Account <button onClick={registerHandle} >Register</button></p>
//  </div>
//       </div>
//   </>
//   );
// }

// export default Login;

// ---------------------------------------------

import React, { useState } from 'react'
import './Login.css';
import Header from '../../components/header';
import Footer from "../../components/footer";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';


const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate=useNavigate()

const isValid = (email !== "") && (password !== "")


const postMethod =()=>{
console.log(email)
console.log(password)
navigate('/ShopNow')
}

const registerHandle =()=>{
  navigate("/Register")
}



  return (
<div>
<Header/>
<div className='login-container'>

<div className='wrapper'>
<form action=''>
<h1>Login</h1>
<div className='input-box'>
<input  value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter Your Email Id' required=''/>

<PersonIcon className='icon'/>
</div>
<div className='input-box'>
<input label="Password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)} type='text' placeholder='Enter Your Password'/>
<LockIcon className='icon'/>
</div>
<div className='remember-forgot'>
  <label ><input type="checkbox" Remember me />Remember me</label>
  <a href='# '>Forgot password</a>
</div>
<button type='submit' onClick={postMethod} disabled={!isValid}>Submit</button>

<div className='register-link'>
<p>Don't have an Account ? <a href='# ' onClick={registerHandle}>Register</a></p>
</div>
</form>
    </div>
</div>
<Footer/>
</div>
  )
}

export default Login