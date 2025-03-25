import React, { useEffect } from "react";
import p1 from "../assets/images/p1.png";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/_components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/features/products/productSlice";
import { Skeleton } from "@/components/ui/skeleton";

const Home = () => {
  const product = [1, 2, 3, 4, 5, 6, 7, 8];
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const navigate = useNavigate()
  const handleProduct = (product) => {
    navigate('/products/' + product)
  };

  return (
    <>
      <div className="home_section1_container px-4 bg-blue-100 pt-6 lg:pt-0">
        <div className="container mx-auto">
          <div className="home_section1 flex items-center justify-center flex-col lg:flex-row gap-4 lg:gap-0">
            <div className="left w-full lg:w-1/2 flex flex-col items-start  gap-6">
              <p className="font-semibold uppercase">See the world through</p>
              <h2 className="lg:text-7xl text-4xl">
                Upgrade with Fashion Store
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                voluptatibus aspernatur consectetur laboriosam animi nobis
                voluptas eius
              </p>
              <Link to={"/products"}>
                {" "}
                <Button className="cursor-pointer">Shop Now</Button>
              </Link>
            </div>
            <div className="right w-full lg:w-1/2 flex justify-center  lg:justify-start items-end">
              <img src={p1} className="lg:w-[70%] w-[100%] block" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* =============== Section 2 =================================== */}
      <div className="home_Section2_container px-4 ">
        <div className="container mx-auto">
          <div className="home_section2 py-9">
            <div className="heading flex items-center gap-4 justify-between md:flex-row flex-col">
              <h3 className="text-2xl lg:text-4xl">Our Products</h3>
              <div className="content flex items-center gap-3 md:w-fit w-full justify-around md:justify-center">
                <span className="cursor-pointer">All</span>
                <span className="cursor-pointer">Eyeglasses</span>
                <span className="cursor-pointer">Accessories</span>
                <span className="cursor-pointer">Sunglass</span>
              </div>
            </div>
            <div className="boxes grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-6 gap-y-5 mt-10">
              {isLoading ? (
                <>
                  {product.map((_, index) => (
                    <div className="flex flex-col space-y-3 w-full" key={index}>
                      <Skeleton className="h-[200px] w-full rounded-lg" />
                      <div className="space-y-2 w-full">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                products
                  .slice(0, 8)
                  .map((product) => (
                    <ProductCard key={product?.id} product={product} handleProduct={handleProduct}/>
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
