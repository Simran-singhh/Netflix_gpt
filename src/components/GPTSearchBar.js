import React, { useRef, useState } from 'react'
import openai from '../utils/openai'
import { API_Options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'

import { addgptRecommendedMovies, removegptRecommendedMovies } from '../utils/gptSlice'
import GPTMovieSuggestions from './GPTMovieSuggestions'

const GPTSearchBar = () => {
  const dispatch=useDispatch()
  const searchText=useRef(null)
  const [error, seterror] = useState(null)
  const {movieNames,movieResults}=useSelector(store=>store.gpt)
  const serachMovieTMDB=async(movie)=>{
    if(movie=='') return;
    const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&page=1', API_Options);
    const json= await data.json();
    return json.results;

   }
    
    const handleGptSearchClick=async()=>{
    
    
    seterror("")
    dispatch(removegptRecommendedMovies());
    if(searchText.current.value=='') return;
    const gptQuery='Act as a movie recommendation system and suggest some movie for the query: '+ searchText.current.value +
     "only give me names of 5 movies , comma seperated like the example sample given ahead. example :'raaz,don,phir hera pheri,golmaal,rustom' "
   
    const gptSearchResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
      });

    const gptMovies=gptSearchResults.choices?.[0]?.message?.content.split(",")
    if(gptMovies.length<5){seterror("No Recommendations!!! Try again") 
       return}
      
     const promiseArray=gptMovies.map(movie=>serachMovieTMDB(movie))//will give promise
     const tmdbMovies= await Promise.all(promiseArray)
    dispatch(addgptRecommendedMovies({movieNames:gptMovies,movieResults:tmdbMovies}))
    
  }
  return (
    <div className=''>
    <div className='  p-6 ml-20  pt-[10%] flex justify-center '>
      <form className=' w-2/3 bg-black grid grid-cols-12 rounded-lg' onSubmit={(e)=>e.preventDefault()}>
        <input type="text" ref={searchText} className=' col-span-10 p-2 m-3 text-black border-white rounded-xl'  placeholder='what suggestions do you need?'/>
        <button className='col-span-2  bg-red-600 hover:bg-red-700 bg-opacity-70 text-white m-3 rounded-lg' onClick={handleGptSearchClick}>Search</button>
      </form>
     
    </div>
    {error && <span className=' text-lg px-2 py-2 -mt-4 ml-[350px] bg-gradient-to-r from bg-red-100 text-red-600 font-bold'>{error}</span>}
     {movieNames && <GPTMovieSuggestions search={searchText.current.value}/>}
    </div>
  
  )
}

export default GPTSearchBar
