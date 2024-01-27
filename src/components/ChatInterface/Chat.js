import React from 'react'
import Cam from '../img/Icons/video-call.png'
import Add from '../img/Icons/add-friends.png'
import More from '../img/Icons/more-48.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='h-full bg-[#df67a9] rounded-lg truncate'>
      <div className='flex-2'>
       <div className='h-12 bg-[#9c376f] flex items-center justify-between p-2.5 text-black'>
        <span>Jane</span>
        <div className='flex gap-4'>
          <img src={Cam} alt='' className='h-5 cursor-pointer'/>
          <img src={Add} alt='' className='h-5 cursor-pointer'/>
          <img src={More} alt='' className='h-5 cursor-pointer'/>
        </div>
      </div> 
      <Messages/>
      <Input/>
      </div>
    </div>
  )
}

export default Chat