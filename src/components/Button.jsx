import React from 'react'

export const Button = ({ children }) => {
  return (
    <button className="w-64 text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-5 font-medium hover:cursor-pointer">{children}</button>
  )
}
