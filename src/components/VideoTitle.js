import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='aspect-video bg-gradient-to-r from-black w-screen absolute'>
    <div className='md:pt-[25%] lg:pt-[22%] pt-[18%] md:pl-20 pl-6 md:w-5/12 w-3/6 text-white '>
      <h1 className='font-bold lg:text-5xl md:text-3xl text-md lg:my-5  md:my-3 my-1  '>{title}</h1>
      <p className='font-light text-xs lg:text-lg md:text-md'>{overview}</p>
      <div className='flex flex-row -mt-3 xl:-mt-0 '>
        <button className='my-5 lg:mx-5 lg:mb-25 mb-20 md:mb-40  mr-5   flex  bg-white font-semibold xl:py-2 p-1 text-black lg:px-7 md:px-4  text-xs lg:text-lg md:text-md rounded-sm hover:bg-opacity-90'><svg xmlns="http://www.w3.org/2000/svg" className=' lg:w-4  w-2 mt-[2px] inline-block mr-1' viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>Play</button>
        <button className=' my-5 lg:mx-5 md:mx-3 mb-20 md:mb-40 bg-[#383434] flex  md:justify-between font-semibold bg-opacity-50 text-white  lg:py-2 text-xs lg:text-lg  lg:px-4 md:p-2 p-1 rounded-sm hover:bg-opacity-70'><svg xmlns="http://www.w3.org/2000/svg" className='lg:w-4  mt-[3px] w-2 inline-block lg:mr-2  mr-1'fill='white' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>More Info</button>
      </div>
    </div>
    </div>
  )
}

export default VideoTitle
