import React from 'react'
import p2 from '../assets/images/p2.jpg'
const ProductCard = () => {
  return (
    <>
    <div className="box flex flex-col items-start gap-3 cursor-pointer">
        <div className="top">
            <img src={p2} alt="" className='rounded-md'/>
        </div>
        <div className="bottom flex flex-col gap-1">
            <p className='text-lg'>lorem ipsum</p>
            <span>$ 500</span>
        </div>
    </div>
    </>
  )
}

export default ProductCard