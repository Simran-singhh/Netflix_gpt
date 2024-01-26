import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'


const GPTMovieSuggestions = ({search}) => {
  const {movieNames,movieResults}=useSelector(store=>store.gpt)

  return (
    <div className=' bg-gradient-to-r from-black  -ml-5 py-8 '>
   { movieNames && <>
      
     <span className='font-bold text-xl   px-3 py-2 ml-10 text-white'>Showing results for {search}</span>
     <div className='' >
      { movieNames.map((movie,i)=><MovieList title={movie} movies={movieResults[i]}/>)
     }
     </div>
     </>
   }
    </div>
  )
}

export default GPTMovieSuggestions
