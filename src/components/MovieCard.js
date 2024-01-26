import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterpath}) => {
  return (
    <div className='w-[170px] h-50  px-4 py-5 shadow-sm rounded-md'>
        
        <img alt="" src={IMG_CDN_URL+posterpath}></img>
      
    </div>
  )
}

export default MovieCard
