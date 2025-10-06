import React from 'react'

const button = ({style, text, func}) => {
  return (
    <button onClick={func} className={`py-2 px-4 rounded-2xl ${style}`}>{text}</button>
  )
}

export default button