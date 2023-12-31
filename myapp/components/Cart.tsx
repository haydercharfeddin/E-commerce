<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';



export const Cart = ({ override }: { override?: React.CSSProperties }) => {

  const [quantity, setQuantity] = useState(1); 
  const [total, setTotal] = useState(0);
  const cart = [
    {
      id: 1,
      price: 10, 
      images:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      quantity: 1,
    },
    {
      id: 2,
      price: 20, 
      images:"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      quantity: 1,
    },
    
  ];

  useEffect(() => {
    const newTotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotal(newTotal);
  }, [cart]);


  const handleQuantityChange = (productId: number, newQuantity: number) => {
    const updatedCart = cart.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );

    
  return (
    <div
      className="relative w-full h-[1533px] bg-white font-[Poppins] "
      style={override}
    >
      <div>
      <div className="ml-[150px] mt-[120px] w-[1400px] h-[80px] border-2  shadow-xl border-white">
          <h1 className="text-xl  mt-[13px] ml-[50px] ">Products</h1>
          <h1 className="text-xl  ml-[470px] mt-[-26px]">Price</h1>
          <h1 className="text-xl  ml-[850px] mt-[-26px]">Quantity</h1>
          <h1 className="text-xl  ml-[1220px] mt-[-26px]">Subtotal</h1>
        </div>
        <div>
          {cart.map((product)=>{
            return(
          <div className="ml-[150px] mt-[40px] w-[1400px] h-[80px] border-2 shadow-xl border-white">
            <img src={product.images} alt="productPhoto" className="h-[55px] w-[80px] mt-[13px] ml-[50px]" />
            <h1 className="ml-[470px] mt-[-43px] ">{product.price}</h1>
            <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                  className="w-full h-full px-3 py-2 bg-transparent outline-none"
                />
            <h1 className="ml-[1250px] mt-[-30px] ">Total: ${product.price * product.quantity}</h1>

            <button className="button flex items-center justify-center space-x-2 p-4 border mt-[53px] w-[230px] border-black rounded-md hover:bg-red-500">
              <div className="view-all-products font-medium text-text-2 text-base">
                Return To Shop
              </div>
            </button>

            <button className="flex items-center justify-center space-x-2 p-4 border mt-[-60px] w-[230px] ml-[1166px] border-black rounded-md hover:bg-red-500">
              <div className="font-medium text-text-2 text-base">
                Update Cart
              </div>
            </button>

            <div className="frame flex items-end gap-16 mt-[70px] ">
              <div className="div-wrapper relative w-80 h-14 border border-black rounded overflow-hidden">
                <input
                  type="text"
                  className="input-field w-full h-full px-3 py-2 bg-transparent outline-none"
                  placeholder="Coupon Code"
                />
              </div>
              <button className="button flex items-center w-75 justify-center gap-2 p-4 border text-white border-black bg-red-500 rounded">
                <div className="view-all-products font-title-16px-medium text-text text-base whitespace-nowrap">
                  Apply Coupon
                </div>
              </button>
            </div>
            

          </div>
          )})}
        </div>

        <div className="frame  border-black border-2 rounded overflow-hidden relative w-96 h-[340px] ml-[1166px] mt-[150px]">
      <div className="text-wrapper absolute top-8 left-8 font-title-20px-medium text-text-2 text-lg whitespace-nowrap">
        Cart Total
      </div>
      <div className="div absolute mt-[60px] left-8 gap-x-36">
        <div className=" mt-[30px] text-wrapper-2 font-title-16px-regular text-text-2 text-base whitespace-nowrap">
          Subtotal:
        </div>
        <div className="ml-[260px] mt-[-25px] text-wrapper-2 font-title-16px-regular text-text-2 text-base whitespace-nowrap">
          $1750
        </div>
        <hr className="mt-[14px] border-black" />
      </div>
      <div className="div-2 absolute top-60 left-8 gap-x-36">
        <div className=" mt-[-100px] text-wrapper-2 font-title-16px-regular text-text-2 text-base whitespace-nowrap">
          Shipping:
        </div>
        <div className="ml-[262px] mt-[-25px] text-wrapper-2 font-title-16px-regular text-text-2 text-base whitespace-nowrap">
          Free
        </div>
        <hr className="mt-[18px] border-black " />
      </div>
      <div className="div-3 absolute top-[197px] left-8 gap-x-36">
        <div className=" text-wrapper-2 font-title-16px-regular text-text-2 text-base whitespace-nowrap">
          Total:
        </div>
        <div className="ml-[260px] mt-[-25px] text-wrapper-2 font-title-16px-regular text-text-2 text-base whitespace-nowrap">
          $1750
        </div>
      </div>
      <button className="w-[250px] mt-[250px] button absolute  ml-[65px] flex items-center justify-center gap-2 p-4 border border-black rounded bg-red-500">
        <div className=" view-all-products font-title-16px-medium text-white text-base whitespace-nowrap ">
          Process to checkout
        </div>
      </button>
      <div className="under-line absolute top-116 left-24 w-422 h-1 opacity-40 bg-black"></div>
      <div className="line-wrapper absolute top-172 left-24 w-422 h-1 opacity-40 bg-black"></div>
    </div>
        
      </div>
    </div>
  );
};



}


=======
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Cart = ({ override }: { override?: React.CSSProperties }) => {
  const jwt = require("jsonwebtoken");
  let token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  const decodedToken = jwt.decode(token);
  var idUser = 0;
  if (decodedToken !== null) {
    idUser = decodedToken.id;
  }

  const [data,setData]=useState([])
  const [trigger,setTrigger]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:5000/wishList/getAllCart/${idUser}`)
    .then((result) => {
      setData(result.data);
    })
    .catch((error: any) => {
      console.log(error);
    });
  },[trigger])
  return (
    <div className="relative bg-bg w-full h-[1200px] overflow-hidden text-left text-sm text-text2 font-title-12px-medium">
      <div className="absolute top-[100px] left-[135px] flex flex-col items-start justify-start gap-[80px] text-base">
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="flex flex-col items-start justify-start gap-[40px]">
            <div className="relative rounded bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-[1170px] h-[72px] overflow-hidden shrink-0">
              <div className="absolute top-[24px] left-[40px] flex flex-row items-center justify-start gap-[284px]">
                <div className="relative leading-[24px]">Product</div>
                <div className="relative leading-[24px]">Price</div>
                <div className="relative leading-[24px]">Quantity</div>
                <div className="relative leading-[24px]">Subtotal</div>
              </div>
            </div>
            {data &&
              data.map((e) => {
                return (
                  <div className="relative rounded bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-[1170px] h-[102px] overflow-hidden shrink-0">
                    <div className="absolute top-[39px] left-[387px] leading-[24px]">
                      {e.price}
                    </div>
                    <div className="absolute top-[39px] left-[1063px] leading-[24px]">
                      $650
                    </div>
                    <div className="absolute top-[27.5px] left-[708.5px] rounded box-border w-[75px] h-[47px] overflow-hidden border-[1.5px] border-solid border-gray-200">
                      <div className="absolute top-[6px] left-[12px] w-12 flex flex-row items-center justify-start gap-[16px]">
                        <div className="relative leading-[24px]">01</div>
                        <div className="flex flex-col items-start justify-start">
                          <img
                            className="relative w-4 h-4 overflow-hidden shrink-0"
                            alt=""
                            src="/dropupsmall.svg"
                          />
                          <img
                            className="relative w-4 h-4 overflow-hidden shrink-0"
                            alt=""
                            src="/dropdownsmall.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_545px)] w-[54px] h-[54px] overflow-hidden">
                      <img
                        className="absolute h-[72.22%] w-[92.59%] top-[14.81%] right-[3.7%] bottom-[12.96%] left-[3.7%] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/g27cq4500x500-1@2x.png"
                      />
                    </div>
                    <div className="absolute top-[39px] left-[114px] leading-[24px]">
                      {e.name}
                    </div>
                    <img
                      className="absolute top-[20px] left-[30px] w-6 h-6 overflow-hidden"
                      alt=""
                      src="/iconcancel.svg"
                    />
                  </div>
                );
              })}
          </div>
          <div className="flex flex-row items-start justify-start gap-[757px]">
            <Link href="/dropdown">
              <div className="rounded flex flex-row py-4 px-12 items-center justify-center border-[1px] border-solid border-gray-300">
                <div className="relative leading-[24px] font-medium">
                  Return To Shop
                </div>
              </div>
            </Link>
            <div className="rounded flex flex-row py-4 px-12 items-center justify-center border-[1px] border-solid border-gray-300">
              <div className="relative leading-[24px] font-medium">
                Update Cart
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[173px]">
          <div className="flex flex-row items-end justify-start gap-[16px]">
            <input
              className="relative rounded box-border w-[300px] h-14 overflow-hidden shrink-0 border-[1px] border-solid border-text2"
              placeholder=" Coupon Code"
            />

            <div className="rounded bg-button2 flex flex-row py-4 px-12 items-center justify-center text-text bg-red-500">
              <div className="relative leading-[24px] font-medium text-white">
                Apply Coupon
              </div>
            </div>
          </div>
          <div className="relative rounded box-border w-[470px] h-[324px] overflow-hidden shrink-0 border-[1.5px] border-solid border-text2">
            <div className="absolute top-[32px] left-[24px] text-xl leading-[28px] font-medium">
              Cart Total
            </div>
            <div className="absolute top-[84px] left-[24px] flex flex-row items-start justify-start gap-[307px]">
              <div className="relative leading-[24px]">Subtotal:</div>
              <div className="relative leading-[24px]">$1750</div>
            </div>
            <div className="absolute top-[140px] left-[24px] flex flex-row items-start justify-start gap-[314px]">
              <div className="relative leading-[24px]">Shipping:</div>
              <div className="relative leading-[24px]">Free</div>
            </div>
            <div className="absolute top-[196px] left-[24px] flex flex-row items-start justify-start gap-[335px]">
              <div className="relative leading-[24px]">Total:</div>
              <div className="relative leading-[24px]">$1750</div>
            </div>
            <div className="absolute top-[236px] left-[120px] rounded bg-button2 flex flex-row py-4 px-12 items-center justify-center text-text bg-red-500">
              <div className="relative leading-[24px] font-medium text-white">
                Procees to checkout
              </div>
            </div>
            <img
              className="absolute top-[123px] left-[24px] w-[422px] h-px opacity-[0.4]"
              alt=""
              src="/underline.svg"
            />
            <img
              className="absolute top-[179px] left-[24px] w-[422px] h-px opacity-[0.4]"
              alt=""
              src="/underline1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
>>>>>>> c952cd48b0e3fb45e0321aa3270250aafe8587b4
