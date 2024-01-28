import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterpath}) => {
  return (
    <div className='lg:w-[200px] md:w-[170px]  w-[150px] md:h-[100px] lg:h-[130px] h-[110px] mb-7 md:mb-8 lg:mb-10   px-4 md:py-5 pt-1 shadow-sm rounded-md'>
        
        <img alt="" className='w-[170px] h-[110px] lg:w-[200px] md:w-[170px] md:h-[100px] lg:h-[130px] object:fit object:cover ' src={IMG_CDN_URL+posterpath}></img>
      
    </div>
  )
}

export default MovieCard
