import React from 'react'

const Message = () => {
  return (
    <div className='message owner' >
      <div className='messageInfo'>
        <img src='https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg' alt=''/>
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>Hey, how are you?</p>
        {/* <img src='https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg' alt=''></img> */}
      </div>
    </div>
  )
}

export default Message