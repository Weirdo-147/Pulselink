import React from 'react'
import Attach from '../img/Icons/attach-32.png'
import Img from '../img/Icons/add-image.png'
import SendIcon from '../img/Icons/send.png'

const Input = () => {
  return (
    <div className='bg-[#ffffff] h-12 p-2.5 rounded-lg flex items-center justify-between'>
      <input type='text' placeholder='Type a message' className='w-full h-full bg-[#f5f5f5] p-2.5 border-hidden outline-transparent mr-2'/>
      <div className='flex items-center justify-between space-x-3'>
        <img src={Attach} alt='' className='h-8 w-12 cursor-pointer rounded-lg border border-black'/>
        <input type='file' className='hidden' id='file'/>
        <label htmlFor='file'>
          <img src={Img} alt='' className='h-8 w-12 cursor-pointer rounded-lg border border-black'/>
        </label>
        <button className='bg-[#df67a9] rounded-lg p-2.5 text-black border border-black'>
         <img src={SendIcon} alt='Send' className='h-3 w-6'/>
        </button>
      </div>
    </div>
  )
}

export default Input