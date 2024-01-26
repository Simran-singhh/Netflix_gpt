import React from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { usePopularMovies } from '../hooks/usePopularMovies';
import {useTrendingMovies} from '../hooks/useTrendingMovies';
import { useTopRatedMovies } from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GPTSearch from './GPTSearch';

const Browse = () => {
  const gptSearchView=useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header/>
      <div>
     { gptSearchView?<GPTSearch/> :  
        <>
        <MainContainer/>
        <SecondaryContainer/>
        </> 
     }
     </div>
    </div>
  )
}

export default Browse
