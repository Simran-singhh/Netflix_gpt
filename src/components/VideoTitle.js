import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='aspect-video bg-gradient-to-r from-black w-screen absolute'>
    <div className='pt-[25%] pl-20 w-4/12  text-white '>
      <h1 className='font-bold text-5xl my-5 '>{title}</h1>
      <p className='font-light '>{overview}</p>
      <div className=''>
        <button className='m-5  bg-white font-semibold py-2  text-black px-7 rounded-sm hover:bg-opacity-90'><svg xmlns="http://www.w3.org/2000/svg" className='w-4 inline-block mr-1' viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>Play</button>
        <button className='m-5 bg-[#383434] font-semibold bg-opacity-50 text-white text-sm py-2  px-4 rounded-sm hover:bg-opacity-70'><svg xmlns="http://www.w3.org/2000/svg" className='w-4 inline-block mr-2'fill='white' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>More Info</button>
      </div>
    </div>
    </div>
  )
}

export default VideoTitle
