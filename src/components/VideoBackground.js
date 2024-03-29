import React from 'react'
import { useMovieTrailer } from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux';
const VideoBackground = ({movieId}) => {
     
    const trailer=useSelector(store=>store.movies?.trailerVideo)
    useMovieTrailer(movieId);
   
  return (
    <div>
      <iframe className='w-[99vw]  aspect-video md:-mt-20'
      
       src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay=1&&mute=1"}
       title="YouTube video player"
       
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowFullScreen>
         
       </iframe>
    </div>
  )
}

export default VideoBackground
