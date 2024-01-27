import React from 'react'
import ChatSidebar from './ChatSidebar'
import Chat from './Chat'

const ChatHome = () => {
  return (
    <div className='bg-[#a7bcff] h-screen '>
        <div className='flex border-white w-full h-full '>
            <div className='flex-3'><Chat/></div>
            <div className='flex-1'><ChatSidebar/></div>
        </div>
    </div>
  )
}

export default ChatHome