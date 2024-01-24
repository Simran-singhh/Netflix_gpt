import { API_Options } from '../utils/constants'
import { useDispatch} from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice';
import { useEffect } from 'react';

export const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
    const getMovieVideos=async()=>{
      const data= await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_Options)
      const json=await data.json();
    //   console.log(json)
      if(!json) return
      const filterdata=json.results.filter((video)=>video.type=="Trailer");
      const trailer=filterdata.length?filterdata[0]:json.results[0];
    //   console.log(trailer)
      dispatch(addTrailerVideo(trailer))
    }
    useEffect(()=>{
        getMovieVideos();
    },[])
}