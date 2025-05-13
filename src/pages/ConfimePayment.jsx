import { Button } from "@/components/ui/button";
import { nanoid } from "@reduxjs/toolkit";
import React, { useId } from "react";
import { useSelector } from "react-redux";

const ConfimePayment = () => {
  const {user} = useSelector((state) => state.user)
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const referenceID = useSelector((state) => state.cart.referenceID);
  const id = nanoid()
  let newId = id.split('').slice(0, 10).join('');
  console.log(newId);
  


  const date = new Date().toLocaleDateString()

  let wholePrice = total - ((5 / 100) * total)
  return (
    <div>
      <div className="main px-4 py-6 bg-zinc-100">
        <div className="container mx-auto">
          <div className="confirm_payment rounded-xl p-4 lg:p-6 pb-24 bg-white shadow-lg flex items-center flex-col lg:gap-0 gap-4 lg:flex-row">
            <div className="left lg:w-1/2 w-full flex items-start flex-col gap-2">
              <p className="lg:text-4xl text-2xl font-bold leading-10 lg:leading-16 font-[Unbounded]">
                Thank you for your Purchase!
              </p>
              <p className="text-zinc-500 font-light">
                Your order will be processed within 24 hours during working
                days. We will notify you by email once your order has been
                shipped.
              </p>
              <div className="content mt-6 w-full lg:w-2/4">
                <p className="font-semibold text-lg">Billing Details</p>
                <div className="boxes mt-4 w-full">
                  <div className="box flex items-center justify-between">
                    <span>Name</span>
                    <span className="font-light">{user?.name}</span>
                  </div>
                  <div className="box mt-2 flex items-center justify-between">
                    <span>Email ID</span>
                    <span className="font-light">{user?.email}</span>
                  </div>
                  <Button className={`lg:w-1/2 mt-5 bg-blue-400 rounded-4xl h-[45px] cursor-pointer hover:bg-blue-500`}>Track Order</Button>
                </div>
              </div>
            </div>
            <div className="right lg:w-1/2 w-full flex items-center justify-center flex-col">
              <div className="line h-[20px] bg-[#EBEBEB] rounded-full relative w-full"></div>
              <div className="box w-[94%] p-4 lg:p-6  mt-[-10px] relative z-1 bg-[#F6F6F6]">
                <div className="top flex flex-col w-full gap-4 items-start">
                  <p className="text-xl font-semibold">Order Summary</p>
                  <div className="line w-full h-[1px] bg-zinc-300"></div>
                  <div className="boxes flex items-center w-full flex-col lg:flex-row">
                    <div className="box w-full lg:w-1/3 flex flex-col items-start gap-1 px-2">
                      <p className="font-light text-zinc-400">Date</p>
                      <p>{date}</p>
                    </div>
                    <div className="box w-full lg:w-1/3 flex flex-col items-start gap-1 px-2 lg:border-l-1 border-zinc-300">
                      <p className="font-light text-zinc-400">Payment ID</p>
                      <p className="text-sm">{referenceID?.razorpay_payment_id}</p>
                    </div>
                    <div className="box w-full lg:w-1/3 flex flex-col items-start gap-1 px-2 lg:border-l-1 border-zinc-300">
                      <p className="font-light text-zinc-400">Order Number</p>
                      <p className="text-sm">{newId}</p>
                    </div>
                  </div>
                  <div className="box w-full h-[4px] border-t-1 border-dotted relative border-zinc-400 flex items-center">
                    <div className="left w-[30px] h-[30px] lg:w-[55px] lg:h-[55px] rounded-full bg-white absolute lg:left-[-55px] left-[-36px]"></div>
                    <div className="right w-[30px] h-[30px] lg:w-[55px] lg:h-[55px] rounded-full bg-white absolute lg:right-[-55px] right-[-36px]"></div>
                  </div>
                </div>
                <div className="bottom min-h-[100px]  w-full flex flex-col items-start py-6 gap-8 border-b-1 border-zinc-300">
                  <div className="boxes flex items-start absolute w-full bottom-[-24px] left-0">
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                    <div
                      className="box w-6 h-6 bg-[#F6F6F6]"
                      style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
                    ></div>
                  </div>
                  {items.map((item) => (
                    <div className="item flex items-start gap-2 w-full">
                      <img
                        src={item.images[0]}
                        alt="product_image"
                        loading="lazy"
                        className="lg:w-20 w-16 rounded-md"
                      />
                      <div className="content w-full flex flex-col items-start">
                        <div className="box flex items-start justify-between w-full">
                          <p>{item?.title}</p>
                          <span>${item?.price * item?.quantity}</span>
                        </div>
                        <small className="font-light text-zinc-500">
                          Cloths
                        </small>
                        <small className="font-light text-zinc-500">
                          Qty: {item?.quantity}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="details py-4 w-full flex items-start flex-col gap-3 border-b-1 border-zinc-300">
                  <div className="box w-full flex items-center justify-between">
                    <span className="text-sm font-light text-zinc-400">Sub Total</span>
                    <span className="text-sm font-light text-zinc-400">${total}</span>
                  </div>
                  <div className="box w-full flex items-center justify-between">
                    <span className="text-sm font-light text-zinc-400">Shipping Fee</span>
                    <span className="text-sm font-light text-zinc-400">Free</span>
                  </div>
                  <div className="box w-full flex items-center justify-between">
                    <span className="text-sm font-light text-zinc-400">Discount</span>
                    <span className="text-sm font-light text-zinc-400">5%</span>
                  </div>
                </div>
                <div className="box w-full flex items-center justify-between mt-2">
                    <span className="text-lg">Order Total</span>
                    <span className="text-lg">${wholePrice}</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfimePayment;
