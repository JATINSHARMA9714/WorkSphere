import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");


    const submitHandler=(e)=>{
        e.preventDefault();
        handleLogin(email,password);
        setEmail("");
        setPassword("");
    }

    const emailHandler=(e)=>{
        setEmail(e.target.value);
    }

    const passwordHandler=(e)=>{
        setPassword(e.target.value);
    }

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='border-2 border-emerald-600 rounded-xl p-20'>
        <form className='flex flex-col items-center justify-center' onSubmit={submitHandler}>
            <input value={email} onChange={(e)=>emailHandler(e)} required className='border-2 border-emerald-600 py-3 px-5 text-xl text-white outline-none bg-transparent rounded-full placeholder:text-grey-400' type="email" placeholder='Enter your Email' />
            <input value={password} onChange={(e)=>passwordHandler(e)} required className='border-2 border-emerald-600 py-3 px-5 text-xl text-white outline-none bg-transparent rounded-full placeholder:text-grey-400  mt-3' type="password" placeholder='Enter Password' />
            <button className='mt-7 w-full font-semibold hover:bg-emerald-700 text-white border-none bg-emerald-600 py-3 text-xl  outline-none  rounded-full placeholder:text-white'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login    
