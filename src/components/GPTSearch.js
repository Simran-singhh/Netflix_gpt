import React from 'react'
import GPTSearchBar from './GPTSearchBar'

import { BACKGROUND_COVER } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
        <div className='fixed -z-10 '>
       <img alt="" aria-hidden="true" className='-mt-30 w-full h-full' data-uia="nmhp-card-hero+background+image" src={BACKGROUND_COVER} ></img>
       </div>
      <GPTSearchBar/>
     
    </div>
  )
}

export default GPTSearch
