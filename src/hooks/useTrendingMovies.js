import { API_Options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrendingMovies} from '../utils/movieSlice'
import { useEffect } from 'react';


export const useTrendingMovies=()=>{
const dispatch=useDispatch();
const trendingMovies=useSelector(store=>store.movies.trendingMovies)
const getTrendingMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US',API_Options)
  const json=await data.json();
 
  dispatch(addTrendingMovies(json.results))
}

useEffect(()=>{
    !trendingMovies && getTrendingMovies();
},[])
}