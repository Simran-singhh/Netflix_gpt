import { API_Options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies} from '../utils/movieSlice'
import { useEffect } from 'react';


export const usePopularMovies=()=>{
const dispatch=useDispatch();
const popularMovies=useSelector(store=>store.movies.popularMovies)
const getPopularMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_Options)
  const json=await data.json();
 
  dispatch(addPopularMovies(json.results))
}

useEffect(()=>{
  !popularMovies&& getPopularMovies();
},[])
}