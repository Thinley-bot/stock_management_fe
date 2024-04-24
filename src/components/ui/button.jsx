import React from 'react'

const Button = ({label,type,onClick})=> {
  return (
    <button type={type} onClick={onClick} className="text-white bg-gradient-to-br from-gray-800 to-blue-800 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-4 py-1.5 text-center">{label}</button>      
  )
}
export default Button