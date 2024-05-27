import React from 'react'

const Box = ({children}) => {
  return (
    <div
    className='max-w-screen-lg mx-auto xl:px-20 md:px-10 sm:px-2 px-4'
    >
        {children}
    </div>
  )
}

export default Box