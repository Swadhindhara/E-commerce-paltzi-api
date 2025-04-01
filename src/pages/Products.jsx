import { ProductCard } from "@/_components";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchCategories } from "@/features/Categories/categorySlice";
import { fetchProducts } from "@/features/products/productSlice";
import { FilterIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState(null)
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { products, isLoading } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories())
  }, [dispatch]);

  const navigate = useNavigate();

  const handleProduct = (product) => {
    navigate("/products/" + product);
  };

  const handleCategory = (id) => {
    if (activeCategory === id) {
      setActiveCategory(null); 
    } else {
      setActiveCategory(id); 
      dispatch(fetchProducts(id))
    }
  };
 
  return (
    <>
      <div className="main px-4">
        <div className="container mx-auto">
          <div className="products flex items-start gap-3 flex-col md:flex-row">
            <div className="left md:w-1/4 lg:w-1/4 flex items-start flex-col gap-5">
              <div className="box flex items-center justify-between w-fit lg:w-full gap-3">
                <h3 className="font-semibold lg:text-2xl text-xl">Filters</h3>
                <FilterIcon />
              </div>
              <div className="categories flex flex-col gap-4">
                <p>Categories</p>
                <div className="boxes flex items-center gap-2 flex-wrap">
                  {
                    categories.map((category) => (
                      <div className={`box flex border py-1 px-4 rounded-md cursor-pointer transition-all delay-75 ${activeCategory === category?.id ? 'bg-blue-300 text-white border-blue-300 border' : ''}`} key={category?.id} onClick={() => handleCategory(category?.id)}>{category?.name}</div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="right w-full md:w-3/4 lg:w-3/4 grid lg:grid-cols-4 grid-cols-2  gap-6 gap-y-5">
              {!isLoading
                ? products.map((product) => (
                    <ProductCard
                      key={product?.id}
                      product={product}
                      handleProduct={handleProduct}
                    />
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
