import React from 'react'

const MembershipForm = ({text, placeholderText}) => {
  return (
    <form className='bg-white p-0.5 rounded-full w-full flex items-center gap-1 max-md:text-[15px]'>
        <input type="text" placeholder={placeholderText} className='w-full h-12 pr-2 rounded-full border-none focus:outline-gray-200 focus:outline-1 text-gray-500' />
        <button type='submit' className='bg-[#4a6e53] px-7 py-3 rounded-full'>{text}</button>
    </form>
  )
}

export default MembershipForm