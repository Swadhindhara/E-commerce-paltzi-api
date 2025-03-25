import { ProductCard } from "@/_components";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchProducts } from "@/features/products/productSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const navigate = useNavigate();

  const handleProduct = (product) => {
    navigate('/products/' + product)
  };

  return (
    <>
      <div className="main px-4">
        <div className="container mx-auto">
          <div className="products flex items-start gap-3 flex-col md:flex-row">
            <div className="left border md:w-1/4 lg:w-1/4">Filter</div>
            <div className="right w-full md:w-3/4 lg:w-3/4 grid lg:grid-cols-4 grid-cols-2  gap-6 gap-y-5">
              {!isLoading
                ? products.map((product) => (
                    <ProductCard key={product?.id} product={product} handleProduct={handleProduct}/>
                  ))
                : data.map((index) => (
                    <div className="flex flex-col space-y-3 w-full" key={index}>
                      <Skeleton className="h-[200px] w-full rounded-lg" />
                      <div className="space-y-2 w-full">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
