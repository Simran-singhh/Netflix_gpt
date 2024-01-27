import React, { useEffect } from 'react'
import { auth } from '../utils/firebaseConfig';
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO,USER_ICON } from '../utils/constants';
import { removegptRecommendedMovies, toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
    const navigate=useNavigate();
    const gptSearchView=useSelector(store=>store.gpt.showGptSearch)
    
    const dispatch=useDispatch();
    const user=useSelector(store=>store.user)
    const handleSignOut=()=>{
        if(gptSearchView==true) 
        dispatch(toggleGptSearchView())
        signOut(auth).then(() => {
            
           }).catch((error) => {
            // An error happened.
          });
        }

        const handleGptSearch=()=>{
          dispatch(toggleGptSearchView())
          dispatch(removegptRecommendedMovies())
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
            
            unsubscribe()};
       },[])
  return (
    
    <div className={`absolute w-full md:px-8 px-5 md:py-20  bg-gradient-to-b from-black bg-opacity-20 z-10 flex flex-row  justify-between md:-mb-20 sm:${gptSearchView || !user ? 'mt-0' : 'mt-0'}  md:${ gptSearchView || !user ? '-mt-20' : 'mt-20'} `}>
   <img  className=" md:w-44 w-20  md:mx-0 md:ml-20 mt-3" src={NETFLIX_LOGO} alt=""/>
   { user && <div className='flex flex-row mt-8 '>
   {!gptSearchView?<svg xmlns="http://www.w3.org/2000/svg" fill='white' className='md:w-6 md:h-6 w-4 h-4 cursor-pointer' onClick={handleGptSearch} viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>:
      <button onClick={handleGptSearch} className='rounded-lg  mb-8 md:p-1 px-2  md:text-sm text-xs text-white bg-opacity-70 bg-blue-600 hover:bg-blue-700'>Home</button>
   }
    <img className=' md:w-7 md:h-7 w-5 h-5  md:mx-5 mx-3'src={USER_ICON}/>
    
    <button onClick={handleSignOut} className='rounded-lg mb-7 p-1 mr-2 md:text-sm  text-xs bg-opacity-70 text-white bg-red-600 hover:bg-red-700'>Sign Out</button>
   
   </div>}
   </div>
   
  
  )
}

export default Header
