import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  
  return (
    <div className=''>
      <div className=' xl:-mt-60 lg:md:-mt-[100px]  md:-mt-[80px] -mt-[70px] relative z-20 '>
      <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
      </div>
      <div className='bg-[#141414] md:-mt-40 -mt-[160px] md:pt-40 pt-[150px] '>
      <MovieList title={"Trending"} movies={movies.trendingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies.topratedMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
