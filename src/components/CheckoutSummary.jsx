import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosAdd } from "react-icons/io";
import { Link } from 'react-router-dom'

export default function CheckoutSummary(props) {


  return (
    <div className="w-full">
      <div className="pt-[20px] pb-[50px] px-[30px] w-full h-full flex flex-col justify-between">
        <div className="">
          <h1 className='text-[23px] font-medium text-[#ED7534] mb-[20px]'>Summary</h1>
          <hr className='mb-[10px]' />
        </div>


        <div className="flex flex-col">
          <div className="flex flex-col mb-[10px]">
            
 
                <div className="flex flex-row justify-between mb-[5px]">
                  {/* {item.data.attributes.products.data.map((item) => ( */}
                    <div  >
                      <h1 className='text-[12px]'>Office Funiture pack</h1>
                      <p className='font-bold text-[12px]'>$500</p>
                    </div>
                  {/* ))} */}

                </div>
   

            <div className="w-full px-[10px] py-[25px]">
              <div className="w-full flex flex-row justify-between items-center bg-gray-200 p-[10px]">
                <h1 className='text-[12px]'>Promo Code <span className='font-bold'>&quot;GLIMM300&quot;</span></h1>
                <AiOutlineClose className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />
              </div>
            </div>
            {/* <div className="flex flex-row justify-between mb-[10px]">
                    <h1 className='text-[12px]'>Free Delivery</h1>
                    <p className='font-bold text-[#ED7534] text-[12px]'>$850</p>
                  </div> */}
            <div className="flex flex-row justify-between">
              <h1 className='text-[12px]'>Total</h1>
              <div className="">
                <h1 className='text-[14px] font-bold text-right'>$4000.00</h1>
                {/* <p className='text-[12px] text-right'></p>
                      <p className='text-[12px] text-right'>Import duties included</p> */}
              </div>
            </div>
          </div>

        </div>

        <Link to="/checkout">
          <button className="flex flex-row justify-center items-center p-[10px] h-[50px] w-full bg-black cursor-pointer">
            <div className="flex flex-row items-center">
              <p className='text-white text-[11px] mr-[3px]'>Proceed to Checkout</p>
              <IoIosAdd className="w-[20px] h-[20px] text-white-100" />
            </div>

          </button>
        </Link>

      </div>

    </div>
  )
}
