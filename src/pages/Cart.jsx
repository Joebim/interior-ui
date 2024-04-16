import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";

import { slideImages } from '../components/slideimages';
import hand from "../assets/images/hand.png"
import CheckoutSummary from '../components/CheckoutSummary';


export default function Cart(props) {

  const [summaryToggle, setSummaryToggle] = useState(false)


  return (

    <div className="relative">
      <div className={` absolute sm:hidden h-[100%] w-full duration-200 bg-black ${summaryToggle ? "z-[99] opacity-50" : "z-[-99] opacity-0"} `}
        onClick={() => {
          setSummaryToggle(false)
        }}
      ></div>


      <div className="flex flex-col sm:flex-row">
        <div className={`w-full flex-[8] duration-300 bg-white-100 px-[15px] sm:px-[60px] pb-[40px] pt-[80px]`}
        >
          <div className="w-full h-full flex flex-col pb-[20px]">

            {slideImages.length == 0 ? <div className='h-full w-full flex justify-center items-center'>
              <div className="flex flex-col justify-center px-[35px]">
                <h1 className='text-[#9d5c0d] text-[18px] font-bold text-center '>Oops! It looks like your cart is currently empty.</h1>
                <p className='mt-[10px] text-[12px] text-center '>But fear not, your fashion journey is just a click away</p>
              </div>
            </div>
              :
              <div className="flex flex-col gap-[12px]">
                <div className="w-full pt-[0px] sm:pt-[20px] flex flex-col h-full">
                  <h1 className='text-[20px] font-bold mb-[30px]'>Shopping Cart</h1>

                  <div className="flex flex-col gap-[20px] justify-between">
                    {slideImages.map((items, id) => (
                      <div key={id} className="w-full h-[250px] flex flex-row gap-[20px] p-[30px] items-center justify-between relative border-[1px] border-solid border-gray-200 rounded-[10px] duration-150 overflow-hidden]">
                        <div className="flex-[2] h-full rounded-[10px] w-[70px] bg-cover bg-center bg-no-repeat "
                          style={{ backgroundImage: `url(${hand})` }}
                        >
                        </div>

                        {/* {items.data.attributes.products.data.map((item) => ( */}
                        <div className="flex-[6.5] h-full py-[20px] flex flex-col justify-between gap-[5px]">
                          <h1 className='text-[13px] font-semibold'>Office Funiture Pack</h1>
                          <p className='text-[10px]'>Office Chair, Office Metal Table & Visitor's Chairs</p>
                          {/* <ProductColor colors={item} /> */}
                          <span className=''>5 x $500.00</span>
                          {/* <ProductCounter item={items}/> */}
                        </div>
                        {/* ))} */}
                        <button type='button' className="flex-[i] cursor-pointer"
                        // onClick={() => {
                        //   console.log("Delete button clicked");
                        //   dispatch(deleteCart({id:items.data.id, jwt:jwt}));
                        //   }}
                        >
                          <FaTrash className={`text-[15px] text-red-600 duration-200 `} />
                        </button>
                      </div>
                    ))}
                  </div>

                </div>


              </div>}



          </div>

        </div>

        <div className="flex-[3.7]  sm:block hidden bg-gray-100 pb-[40px] pt-[80px]">

          <CheckoutSummary cart={slideImages} />

        </div>

        <div className="sm:hidden p-[20px] px-[20px] sticky bottom-0 z-[100]">


          <div className="relative h-[50px]">

            <div className={`absolute bg-[white] bottom-0 w-full flex flex-col gap-[8px] mt-[20px] rounded-[20px] duration-200 ${summaryToggle ? "shadow-md z-[100] h-[70vh] overflow-y-scroll mb-[70px]" : "h-[0px] z-[-20] overflow-hidden"} `}
            >
              <CheckoutSummary />
            </div>

            <div className="relative w-full h-[50px] rounded-[20px] px-[30px] p-[5px] bg-black flex flex-row justify-around items-center z-[100]">

              <div className="flex-[4] flex flex-row cursor-pointer gap-[3px]"
                onClick={() => {
                  setSummaryToggle(!summaryToggle)
                }}
              >
                <p className="text-white text-[17px] font-black">$4000.00</p>
                <MdKeyboardArrowDown className={`text-[20px] duration-200 text-white ${summaryToggle ? " rotate-180" : " rotate-0"}`} />
              </div>
              <hr className="mr-[20px] h-[20px] bg-white w-[1.5px]" />
              <div className="flex-[1] px-[30px] py-[5px] cursor-pointer flex gap-[10px] items-center rounded-[8px] bg-gray-100">
                <p className="text-[15px] font-black">Checkout</p>
                <HiArrowNarrowRight className="text-[20px] text-black" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>


  )
}



