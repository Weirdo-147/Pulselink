import React from 'react'
import ChatNavbar from './ChatNavbar'
import ChatSearch from './ChatSearch'
import Chats from './Chats'

const ChatSidebar = () => {
  return (
    <div className='h-full bg-[#9269c2] rounded-lg truncate'>
      <ChatNavbar/>
      <ChatSearch/>
      <Chats/>
    </div>
  )
}

export default ChatSidebar