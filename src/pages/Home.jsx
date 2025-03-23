import React from 'react'
import p1 from '../assets/images/p1.png'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/_components'
import { Link } from 'react-router-dom'

const Home = () => {
  const product = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>
      <div className="home_section1_container px-4 bg-blue-100 pt-6 lg:pt-0">
        <div className="container mx-auto">
          <div className="home_section1 flex items-center justify-center flex-col lg:flex-row gap-4 lg:gap-0">
            <div className="left w-full lg:w-1/2 flex flex-col items-start  gap-6">
              <p className='font-semibold uppercase'>See the world through</p>
              <h2 className='lg:text-7xl text-4xl'>Upgrade with Fashion Store</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus aspernatur consectetur laboriosam animi nobis voluptas eius</p>
              <Link to={'/products'}> <Button className='cursor-pointer'>Shop Now</Button></Link>
            </div>
            <div className="right w-full lg:w-1/2 flex justify-center  lg:justify-start items-end">
              <img src={p1} className='lg:w-[70%] w-[100%] block' alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* =============== Section 2 =================================== */}
      <div className="home_Section2_container px-4 ">
        <div className="container mx-auto">
          <div className="home_section2 py-9">
            <div className="heading flex items-center justify-between">
              <h3 className='text-3xl lg:text-4xl'>Our Products</h3>
              <div className="content flex items-center gap-3">
                <span className='cursor-pointer'>All</span>
                <span className='cursor-pointer'>Eyeglasses</span>
                <span className='cursor-pointer'>Accessories</span>
                <span className='cursor-pointer'>Sunglass</span>
              </div>
            </div> 
            <div className="boxes grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-6 gap-y-5 mt-10">
              {
                product.map((index) => (
                  <ProductCard key={index} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home