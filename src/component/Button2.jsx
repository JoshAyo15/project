import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Button2 = () => {
    const data = useContext(DataContext)

  return (
    <>
    {data && <button className='bg-black py-3 px-6 rounded-md text-white'>{data}</button>} 
    </>
  )
}

export default Button2