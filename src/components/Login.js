import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import { auth } from '../utils/firebaseConfig';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { BACKGROUND_COVER } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Login = () => {
  const dispatch=useDispatch()
    
    const[isSignInForm,setisSignInForm]=useState(true);
    const[error,seterror]=useState("")
    let email=useRef(null)
    let name=useRef('notauser')
    let password=useRef(null)
    const toggleSignInForm=()=>{
      
        setisSignInForm(!isSignInForm)
       
        seterror('')
    }
    const handleButtonClick=()=>{
       
      
      
        
        const message=checkValidateData(email.current.value,password.current.value,name.current.value)
      
        seterror(message)
        if(message && !isSignInForm)return;
         seterror("")
         if(!isSignInForm){
          
          
          
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
             // Signed up 
             const user = userCredential.user;

             updateProfile(auth.currentUser, {
                displayName: name.current.value, photoURL: ""
              }).then(() => {
                const {uid,email,displayName} = auth.currentUser;//contains updated values of the user
              dispatch(addUser({uid:uid,email:email,displayName:displayName}))
               
              }).catch((error) => {
                seterror(error.message)
              });
               
              })
            .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             seterror(errorCode+"-"+errorMessage)
             });
         }else{
             
            signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
              .then((userCredential) => {
              // Signed in 
             const user = userCredential.user;
            
             
              })
              .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                seterror("Incorrect email or password")
                });
         }
    } 
      return (
    <div >
       <Header/>
       <div className='absolute'>
       <img alt="" aria-hidden="true"className='h-screen w-screen object-fit object-cover' data-uia="nmhp-card-hero+background+image" src={BACKGROUND_COVER}></img>
       </div>

       <form onSubmit={(e)=>e.preventDefault()} className='absolute xl:w-3/12  md:w-5/12 w-1/2  bg-black p-7  md:p-10 lg:my-28 md:my-30 my-32 mx-auto bg-opacity-80 right-0 left-0 '>
        <h1 className='font-bold text-3xl py-4 text-white text-opacity-100'>{isSignInForm?"Sign In ":"Sign Up"}</h1>
        {!isSignInForm && <input type="text" ref={name} placeholder="Name" className='md:p-4 p-3 md:my-4 my-3 w-full border-radius-sm  bg-[#333] text-white rounded-md'/>}
        <input type="text" ref={email} placeholder="Email address" className='md:p-4 p-3 md:my-4 my-3  w-full border-radius-sm bg-[#333]  text-white rounded-md'/>
        <input type="password" ref={password}  placeholder="Password" className='md:p-4  p-3 md:my-4 my-3 w-full bg-[#333] text-white rounded-md'/>
        <p className=' text-sm px-2 text-red-500 font-semibold'>{error}</p>
        <button className='md:p-4 p-2 md:my-6 my-5 bg-red-600 w-full rounded-md text-white' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
        <span className='py-4 text-sm md:text-md text-[#737373]'>{isSignInForm?"New to Netflix?":"Already a User?"}</span>
       <span className='text-white text-sm md:text-md cursor-pointer' onClick={toggleSignInForm}> {isSignInForm?"Sign up Now":"Sign In"} </span>
       </form>
    </div>
  )
}

export default Login
