import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  
  return (
    <div className=' pl-10 mt-5 ' >
        <h1 className='text-2xl font-bold text-white pl-4'>{title}</h1>
       <div className='flex  overflow-x-hidden'>
      
       <div className='flex '>
        {movies && movies.map( movie =>movie.poster_path&&(<MovieCard key={movie.id} posterpath={movie.poster_path}/>)
        )}
       
      </div>
    </div>
    </div>
  )
}

export default MovieList
