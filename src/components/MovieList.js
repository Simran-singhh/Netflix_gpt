import React, { useRef } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  const containerRef = useRef(null);
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
    }
  };
  return (
    <div className=' md:pl-10 pl-5 lg:mt-10  mt-7' >
        <h1 className='lg:text-2xl md:text-xl text-lg font-bold text-white pl-4'>{title}</h1>
       <div className='flex  overflow-x-hidden hover:overflow-x-scroll'>
      <div>
       <div className='flex '>
        {movies && movies.map( movie =>movie.poster_path&&(
        <>
        <MovieCard key={movie.id} posterpath={movie.poster_path}/>
         </>
        )
        )}
         </div>
      </div>
       
       
    </div>
    </div>
  )
}

export default MovieList
