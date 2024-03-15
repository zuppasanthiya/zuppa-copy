// import React from 'react';
// import { useState } from 'react';
// import Header from '../../components/header';
// import { auth } from "../../components/firebase";
// import { toast } from "react-toastify";

// const Register = () => {
//   const [userName, setUserName]= useState('')
//   const [email, setEmail] = useState("");
//   const [pasword, setPassword] = useState("")

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const config = {
//       url: 'http://localhost:3000/register/complete',
//       handleCodeInApp: true,
//     };

//     await auth.sendSignInLinkToEmail(email, config);
//     toast.success(
//       `Email is sent to ${email}. Click the link to complete your registration.`
//     );
//     // save user email in local storage
//     window.localStorage.setItem("emailForRegistration", email);
//     // clear state
//     setEmail("");
//   };

//   const registerForm = () => (
//     <form onSubmit={handleSubmit}>

// {/* <label>UserName</label>
// <input type='text' placeholder='enter your Name' /> */}

//       <input
//         type="email"
//         className="form-control"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         autoFocus
//       />

//       <button type="submit" className="btn btn-raised">
//         Register
//       </button>
//     </form>
//   );

//   return (
//     <>
  
//     <Header/>
//     <div className="container p-5">
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <h4>Register</h4>
//           {registerForm()}
//         </div>
//       </div>
//     </div>
  
//     </>
    
//   );
// };

// export default Register;
// ------------------------------------------------------------------------------------------------
import React, { useState } from 'react'
import './Login.css'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';



const Register = () => {
  const [name, setName]=useState("")
  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate=useNavigate()


const isValid =(name !== "") && (email !== "") && (password !== "") 


const postMethod =()=>{
console.log(email)
console.log(password)
navigate('/Login')
}



  return (
<div>
  <Header />
<div className='login-container'>
<div className='wrapper'>
<form action=''>
<h1>Register</h1>

<div className='input-box'>
<input  value={name} onChange={(e)=>setName(e.target.value)} type='name' placeholder='Enter Your Name' required=''/>

<PersonIcon className='icon'/>
</div>
<div className='input-box'>
<input  value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter Your Email Id' required=''/>

<EmailIcon className='icon'/>
</div>
<div className='input-box'>
<input  value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password' required=''/>
<LockIcon className='icon'/>
</div>
<div className='remember-forgot'>
  <label ><input type="checkbox"Remember me />Remember me</label>
 
</div>
<button type='submit'onClick={postMethod} disabled={!isValid}>Submit</button>

</form>
    </div>
</div>
<Footer/>
</div>
  )
}

export default Register










