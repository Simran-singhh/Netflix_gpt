import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
    const[isSignInForm,setisSignInForm]=useState(true);
    const toggleLogin=()=>{
        setisSignInForm(!isSignInForm)
    }
      return (
    <div >
       <Header/>
       <div className='absolute'>
       <img alt="" aria-hidden="true" data-uia="nmhp-card-hero+background+image" src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg 1800w" class="default-ltr-cache-1jxs5rh e13sg9vu0"></img>
       </div>
       <form className='absolute w-3/12 bg-black  p-10 my-36 mx-auto bg-opacity-80 right-0 left-0 '>
        <h1 className='font-bold text-3xl py-4 text-white text-opacity-100'>{isSignInForm?"Sign In ":"Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Name" className='p-4 my-4 w-full border-radius-sm bg-[#333] rounded-md'/>}
        <input type="text" placeholder="Email address" className='p-4 my-4 w-full border-radius-sm bg-[#333] rounded-md'/>
        <input type="text" placeholder="Password" className='p-4 my-4 w-full bg-[#333] rounded-md'/>
        <button className='p-4 my-6 bg-red-600 w-full rounded-md text-white'>{isSignInForm?"Sign In":"Sign Up"}</button>
        <span className='py-4 text-[#737373]'>{isSignInForm?"New to Netflix?":"Already a User?"}</span>
       <span className='text-white cursor-pointer' onClick={toggleLogin}> {isSignInForm?"Sign up Now":"Sign In"} </span>
       </form>
    </div>
  )
}

export default Login
