import React from 'react'
const ProductCard = ({product, handleProduct}) => {
  return (
    <>
    <div className="box flex flex-col items-start gap-3 cursor-pointer p-2 border rounded-md border-blue-200" onClick={() => handleProduct(product?.slug)}>
        <div className="top">
            <img src={product.images[0]} alt="product-image" loading='lazy' className='rounded-md'/>
        </div>
        <div className="bottom flex flex-col gap-0">
          <small className='text-zinc-400'>{product?.category?.name}</small>
            <p className='text-md lg:text-md'>{product?.title}</p>
            <span className='font-semibold text-blue-500 mt-2'>$&nbsp;{product?.price}</span>
        </div>
    </div>
    </>
  )
}

export default ProductCard