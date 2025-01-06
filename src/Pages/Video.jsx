import React from 'react'
import SideBar from '../Components/SideBar'
import PlayVideo from '../Components/PlayVideo'
import Recommended from '../Components/Recommended'

const Video = () => {
  return (
    <div className='bg-[#f9f9f9] px-[2%] py-[1.25rem] flex justify-between flex-wrap '>
      <PlayVideo/>
      <Recommended/>
    </div>
  )
}

export default Video