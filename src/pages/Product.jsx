import React from 'react'
import Productss from '../component/Productss'
import NavBar from '../component/NavBar'

const Product = () => {

  return (
    <div className='flex flex-col items-center'>
        <NavBar />
        <p>Product page</p>
        <Productss />
    </div>
  )
}

export default Product