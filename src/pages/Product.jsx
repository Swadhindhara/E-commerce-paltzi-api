import { Button } from '@/components/ui/button'
import { fetchProducts, fetchSimilarProducts, fetchSingleProduct } from '@/features/products/productSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import g3 from './../assets/graphics/g3.png'
import { Heart, LucideTruck, Minus, Plus, RefreshCcw } from 'lucide-react';
import { ProductCard } from '@/_components';
const Product = () => {
  const {slug} = useParams()
  const dispatch = useDispatch();
  const {product, isLoading, similarProducts} = useSelector((state) => state.products)
    
  useEffect(()=> {
    dispatch(fetchSingleProduct(slug))
    dispatch(fetchProducts())
  }, [dispatch, slug])
  
  useEffect(() => {
    if (product?.category?.slug) {
      dispatch(fetchSimilarProducts(product.category.slug));
    }
  }, [dispatch, product?.category?.slug]);
  
  const navigate = useNavigate()
  const handleProduct = (product) => {
    navigate('/products/' + product)
  };
  
  
  return (
    <div>
      <div className="main px-4">
        <div className="container mx-auto">
          <div className="product w-full flex items-start lg:flex-row flex-col gap-6">
            <div className="left lg:w-2/4 border h-full">
            <img src={product?.images[0]} alt="" className={`rounded-md ${isLoading ? 'opacity-40' : ''}`}/>
            </div>
            <div className="right lg:w-2/4 flex flex-col gap-4 items-start">
              <h3 className={`font-semibold text-xl lg:text-2xl ${isLoading ? 'opacity-25' : ''}`}>{product?.title}</h3>
              <div className="content flex items-center gap-2">
                <div className="stars flex items-center gap-1">
                  <img src={g3} alt="icon" className='w-4'/>
                  <img src={g3} alt="icon" className='w-4'/>
                  <img src={g3} alt="icon" className='w-4'/>
                  <img src={g3} alt="icon" className='w-4'/>
                  <img src={g3} alt="icon" className='w-4'/>
                </div>
                <small className='text-zinc-400'>(150 Reviews)</small>
                <small className='text-zinc-400'>|</small>
                <small className='text-green-600'>In stock</small>
              </div>
              <p className='text-xl lg:text-2xl'>${product?.price}</p>
              <p className='font-light'>{product?.description}</p>
              <div className="line w-full h-0.5 bg-zinc-400"></div>
              <div className="box flex w-full items-center gap-4">
                <div className="counter flex items-center gap-2">
                  <div className="icon p-1 border rounded-md cursor-pointer">
                    <Minus/>
                  </div>
                  <div className="value w-10 flex justify-center items-center py-2">1</div>
                  <div className="icon p-1 border rounded-md cursor-pointer">
                    <Plus/>
                  </div>
                </div>
                <Button className={`cursor-pointer`}>Add to Cart</Button>
                <div className="icon p-1 border rounded-md cursor-pointer">
                  <Heart />
                </div>
              </div>
              <div className="boxes flex flex-col items-start w-full border rounded-md border-zinc-400">
                <div className="box w-full p-4 flex items-center gap-4">
                  <LucideTruck />
                  <div className="details">
                    <p>Free Delivery</p>
                    <small className='underline'>Enter your postal code for Delivery Availability</small>
                  </div>
                </div>
                <div className="box w-full border-zinc-400 border-t-1 p-4 flex items-center gap-4">
                  <RefreshCcw />
                  <div className="details">
                    <p>Free Delivery</p>
                    <small>Free 30 Days Delivery Returns. <span className='underline'>Details</span></small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className='text-xl mt-16'>Related Products</p>
          <div className="boxes grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-6 gap-y-5 mt-6">
            {
              !isLoading && similarProducts.slice(0, 4).map((product) => (
                <ProductCard product={product} handleProduct={handleProduct} key={product?.id}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product