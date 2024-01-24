import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='aspect-video bg-gradient-to-r absolute from-black w-screen'>
    <div className='pt-[20%] pl-20 w-5/12  text-white '>
      <h1 className='font-bold text-5xl my-5 '>{title}</h1>
      <p className='font-light '>{overview}</p>
      <div className=''>
        <button className='m-5 bg-white font-semibold py-3 text-black px-10 rounded-sm hover:bg-opacity-90'>Play</button>
        <button className='m-5 bg-[#383434] font-semibold bg-opacity-50 text-white text-sm py-3  px-5 rounded-sm hover:bg-opacity-70'>More Info</button>
      </div>
    </div>
    </div>
  )
}

export default VideoTitle
