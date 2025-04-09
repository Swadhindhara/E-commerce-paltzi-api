import { Minus, Plus } from "lucide-react";
import React from "react";

const CartCard = ({ item }) => {
  return (
    <>
      <div className="cart_cart flex items-center mt-4 last:border-0 border-b-zinc-300 border-b-1 py-3">
        <div className="left w-3/6 flex items-center gap-2">
          <img
            src={item.images[0]}
            alt="product_img"
            loading="lazy"
            className="w-32 rounded-md"
          />
          <div className="details flex flex-col gap-1">
            <p className="text-zinc-300">{item?.category?.name}</p>
            <p className="text-lg">{item.title}</p>
          </div>
        </div>
        <div className="right flex items-center w-3/6">
          <div className="flex justify-center items-center  w-1/3">
            ${item?.price}
          </div>
          <div className="flex justify-center items-center w-1/3">
            <div className="box flex items-center gap-3">
              <div className="icon border p-0.5 rounded-md cursor-pointer hover:bg-zinc-100">
                <Plus/>
              </div>
              <p>{item?.quantity}</p>
              <div className="icon border p-0.5 rounded-md cursor-pointer  hover:bg-zinc-100">
                <Minus/>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center  w-1/3">
            <p className="text-lg font-semibold text-blue-400">${item?.price * item?.quantity}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
