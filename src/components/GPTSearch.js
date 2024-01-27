import React from 'react'
import GPTSearchBar from './GPTSearchBar'

import { BACKGROUND_COVER } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
        <div className='fixed -z-10 '>
       <img alt="" aria-hidden="true" className='h-screen w-screen object-cover  md:-mt-30   object-fit' data-uia="nmhp-card-hero+background+image" src={BACKGROUND_COVER} ></img>
       </div>
       <div className='pt-[20%] md:pt-0'>
      <GPTSearchBar/>
      </div>
    </div>
  )
}

export default GPTSearch
