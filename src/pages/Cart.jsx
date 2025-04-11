import { CartCard } from "@/_components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GiftIcon, LucideTruck, MessageCircleMoreIcon, PhoneCall } from "lucide-react";
import { loadRazorpay } from "../../PaymentComponent.js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  // const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let wholeTotal = total - (5 / 100) * total;

  const handlePayment = (wholeTotal) => {
    loadRazorpay(wholeTotal, navigate, dispatch)
  }

  return (
    <>
      <div className="cart_container px-4 bg-[#EFF3F6]">
        <div className="container mx-auto">
          <div className="cart py-8 flex items-start gap-8">
            <div className="left w-4/6 flex flex-col items-start gap-4">
              <div className="content flex flex-col gap-2">
                <p className="lg:text-2xl text-xl font-semibold">
                  Shopping Bag
                </p>
                <p className="font-light">
                  <b className="font-semibold">{items.length} items</b> in your
                  bag.
                </p>
              </div>

              <div className="products shadow-lg rounded-xl bg-white p-4 w-full">
                <div className="box flex items-center w-full">
                  <div className="left w-3/6 ">
                    <p>Products</p>
                  </div>
                  <div className="right flex items-center w-3/6">
                    <div className="flex justify-center items-center w-1/3">
                      Price
                    </div>
                    <div className="flex justify-center items-center w-1/3">
                      Quantity
                    </div>
                    <div className="flex justify-center items-center w-1/3">
                      Total Price
                    </div>
                  </div>
                </div>
                {items.map((item) => (
                  <CartCard key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="right w-2/6 border-red-400 shadow-lg rounded-xl bg-white p-4">
              <div className="box flex flex-col gap-3 border-b-1 border-zinc-300 pb-4">
                <p className="text-xl">Coupon Code</p>
                <small className="text-zinc-400">
                  Lorem ipsum dolor sit amet consectetur adipisida cumque Lorem
                  ipsum dolor sit amet. non dolorem delectus a rerum. Omnis,
                  aperiam?
                </small>
                <Input
                  type="search"
                  placeholder="Coupon Code"
                  className={`outline-none rounded-2xl h-[40px] `}
                />
                <Button className={`h-[40px] rounded-2xl cursor-pointer`}>
                  Apply
                </Button>
              </div>

              <div className="box w-full bg-[#EFF3F6] rounded-2xl mt-4 p-3">
                <p className=" text-lg mb-6">Cart Total</p>
                <div className="flex items-center justify-between mb-1">
                  <span>Cart Subtotal</span> <span>${total}</span>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span>Shipping Cost</span>
                  <span>Free</span>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span>Discount</span>5%
                </div>
                <div className="flex items-center justify-between">
                  <span>Cart Total</span>
                  <span className="text-lg font-semibold text-blue-400">
                    ${wholeTotal}
                  </span>
                </div>
                <Button
                  className={`mt-5 w-full cursor-pointer h-[40p] rounded-2xl`}
                  onClick={() => handlePayment(wholeTotal)}
                >
                  Check Out
                </Button>
              </div>
            </div>
          </div>
          <div className="boxes w-full flex items-center gap-4 py-8">
            <div className="box w-1/4 bg-white flex items-center gap-3 flex-row rounded-lg p-3 shadow-xl">
              <div className="icon w-10 h-10 flex items-center justify-center rounded-sm bg-red-300">
                <LucideTruck />
              </div>
              <div className="details">
                <p>Free Shipping</p>
                <small className="text-zinc-400">when you spend $50+</small>
              </div>
            </div>
            <div className="box w-1/4 bg-white flex items-center gap-3 rounded-lg p-3 shadow-xl">
              <div className="icon w-10 h-10 flex items-center justify-center rounded-sm bg-yellow-200">
                <PhoneCall />
              </div>
              <div className="details">
                <p>Call us anytime</p>
                <small className="text-zinc-400">033 898 9 8900</small>
              </div>
            </div>
            <div className="box w-1/4 bg-white flex items-center gap-3 rounded-lg p-3 shadow-xl">
              <div className="icon w-10 h-10 flex items-center justify-center rounded-sm bg-green-300">
                <MessageCircleMoreIcon />
              </div>
              <div className="details">
                <p>Chat With Us</p>
                <small className="text-zinc-400">when offer 24hrs chat support</small>
              </div>
            </div>
            <div className="box w-1/4 bg-white flex items-center gap-3 rounded-lg p-3 shadow-xl">
              <div className="icon w-10 h-10 flex items-center justify-center rounded-sm bg-blue-300">
                <GiftIcon />
              </div>
              <div className="details">
                <p>Gift Cards</p>
                <small className="text-zinc-400">For loved one in any amount</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
