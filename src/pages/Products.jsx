import { Button } from '@/components/ui/button'
import { fetchProducts } from '@/features/products/productSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
    const dispatch = useDispatch();
    const {products, isLoading, isError} = useSelector((state) => state.products)

    const getProducts = () => {
        dispatch(fetchProducts())
    }

    useEffect(()=> {
        console.log(`products: ${products}`);
        
    }, [])

  return (
    <>
        <div className="main px-4">
            <div className="container mx-auto">
                <div className="products flex items-start">
                    <div className="left border lg:w-1/4">
                        Filter
                    </div>
                    <div className="right border lg:w-3/4">
                        <Button className={`cursor-pointer`} onClick={getProducts}>GET PRODUCTS</Button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Products