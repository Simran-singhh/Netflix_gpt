import React, { useEffect } from 'react'
import { auth } from '../utils/firebaseConfig';
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO,USER_ICON } from '../utils/constants';

const Header = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(store=>store.user)
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            
           }).catch((error) => {
            // An error happened.
          });
           
        }

        useEffect(()=>{
          const unsubscribe=onAuthStateChanged(auth, (user) => {
              if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid,email,displayName} = user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName}))
                navigate("/browse")
              } else {
                // User is signed out
                dispatch(removeUser())
                navigate("/")
              }
          })
          return()=>{
            console.log("unsubscribed")
            unsubscribe()};
       },[])
  return (
    
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-row justify-between'>
   <img  className=" w-44 ml-20 mt-5" src={NETFLIX_LOGO} alt=""/>
   { user && <div className='flex flex-row'>
    <img className=' w-8 h-8 mt-10 mr-8'src={USER_ICON}/>
    <button onClick={handleSignOut} className='rounded-lg mt-10  mb-5 p-1 mr-5 text-white bg-red-600 hover:bg-red-700'>Sign Out</button>
   </div>}
   </div>
  
  )
}

export default Header
