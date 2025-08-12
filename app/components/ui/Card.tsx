import React from 'react'

const Card = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <div className='bg-white shadow-md rounded-lg w-full my-3'>
        {children}
    </div>
  )
}

export default Card

