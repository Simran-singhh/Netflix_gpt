import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  
  return (
    <div className=''>
      <div className=' -mt-60 relative z-20 '>
      <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
      </div>
      <div className='bg-[#141414] -mt-20 pt-20 '>
      <MovieList title={"Trending"} movies={movies.trendingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies.topratedMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
