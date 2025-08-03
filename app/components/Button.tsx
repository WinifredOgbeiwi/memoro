import React from 'react'
import { ButtonProps } from '../type'

const Button = ({style,type,text}:ButtonProps) => {
  return (
           <button type={type} className={`bg-primary2 text-white rounded-md p-2 font-bold text-lg ${style} hover:bg-primary1 hover:scale-105 transition-colors duration-300`}>
         {text}
        </button>
  )
}

export default Button