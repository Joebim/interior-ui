import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import hand from "../assets/images/hand.png"
import Tick from '../components/Tick';
import { slideImages } from '../components/slideimages';



export default function ProductList() {
  const [clicked, setClicked] = useState(false)
  const [togglePopularity, setTogglePopularity] = useState(false)

  console.log('togglePopularity', togglePopularity)

  return (
    <div className="flex flex-row p-[50px] gap-[30px]">
                <div className="flex-[1] flex flex-col gap-[20px]">
                    <div className=" rounded-[15px] bg-gray-50">
                        <div className="pt-[18px] flex flex-row gap-[10px]">
                            <div className="h-[20px] w-[18px] bg-black rounded-r-full "></div>
                            <h1 className="font-bold text-[15px]">Filter</h1>
                        </div>
                        <div className="flex flex-col gap-[10px] px-[26px] py-[15px]">
                            <input id="range" type="range" value="50" className="w-full h-2 bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-200"></input>
                            <p className="text-[12px] font-bold ">Price: $400.00 - $640.00</p>
                            <div className="px-[20px] py-[5px] rounded-[10px] text-white text-[12px] bg-black z-[2] cursor-pointer font-bold flex justify-center items-center">Filter</div>

                        </div>
                    </div>
                    <div className=" rounded-[15px] bg-gray-50">
                        <div className="pt-[18px] flex flex-row gap-[15px]">
                            <div className="h-[20px] w-[18px] bg-black rounded-r-full"></div>
                            <h1 className="font-bold text-[15px]">Products By Rating</h1>
                        </div>
                        <div className="flex flex-col gap-[15px] px-[26px] py-[15px]">


                            <div className="flex flex-row p-[12px] gap-[10px] rounded-[10px] bg-white">
                                <div className="flex flex-col items-start gap-[10px]">
                                    <div className="">
                                        <p className="text-[10px] text-left font-bold">Office Chair, Office Metal Table & Visitor's Chairs</p>
                                    </div>
                                    <div className="flex flex-row gap-[5px]">
                                        <FaStar className=' text-yellow-300' />
                                        <FaStar className=' text-yellow-300' />
                                        <FaStar className=' text-yellow-300' />
                                        <FaStar className=' text-yellow-300' />
                                        <FaStar className=' text-yellow-300' />
                                    </div>
                                    <div className="flex flex-row gap-[5px]">
                                        <p className="text-[12px] text-gray-400 line-through">$640.00</p>
                                        <p className="text-[12px] ">$400.00</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center">
                                    <img src={hand} alt="" />
                                </div>

                            </div>


                            <div className="flex flex-row p-[12px] gap-[10px] rounded-[10px] bg-white">
                                <div className="flex flex-col items-start gap-[10px]">
                                    <div className="">
                                        <p className="text-[10px] text-left font-bold">Office Chair, Office Metal Table & Visitor's Chairs</p>
                                    </div>
                                    <div className="flex flex-row gap-[5px]">
                                        <FaStar className=' text-yellow-300' />
                                        <FaStar className=' text-yellow-300' />
                                        <FaStar className=' text-yellow-300' />
                                        <FaStar className=' text-yellow-300' />
                                        <FaStar className=' text-yellow-300' />
                                    </div>
                                    <div className="flex flex-row gap-[5px]">
                                        <p className="text-[12px] text-gray-400 line-through">$640.00</p>
                                        <p className="text-[12px] ">$400.00</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center">
                                    <img src={hand} alt="" />
                                </div>

                            </div>


                            <div className="flex flex-row p-[12px] gap-[10px] rounded-[10px] bg-white">
                                <div className="flex flex-col items-start gap-[10px]">
                                    <div className="">
                                        <p className="text-[10px] text-left font-bold">Office Chair, Office Metal Table & Visitor's Chairs</p>
                                    </div>
                                    <div className="flex flex-row gap-[5px]">
                                        <FaStar className=' text-yellow-300' />
                                        <FaStar className=' text-yellow-300' />
                                        <FaStar className=' text-yellow-300' />
                                        <FaStar className=' text-yellow-300' />
                                        <FaStar className=' text-yellow-300' />
                                    </div>
                                    <div className="flex flex-row gap-[5px]">
                                        <p className="text-[12px] text-gray-400 line-through">$640.00</p>
                                        <p className="text-[12px] ">$400.00</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center">
                                    <img src={hand} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className=" rounded-[15px] bg-gray-50">
                        <div className="pt-[18px] flex flex-row gap-[10px]">
                            <div className="h-[20px] w-[18px] bg-black rounded-r-full"></div>
                            <h1 className="font-bold text-[15px]">Product Categories</h1>
                        </div>
                        <div className="flex flex-col gap-[15px] px-[26px] py-[15px]">
                            <p className="text-[12px] font-bold ">Accessories(1)</p>
                            <p className="text-[12px] font-bold ">Android(1)</p>
                            <p className="text-[12px] font-bold ">Camera(1)</p>
                            <p className="text-[12px] font-bold ">CCTV Camera(1)</p>
                        </div>
                    </div>
                </div>

                <div className="flex-[4] flex flex-col gap-[20px]">
                    <div className="flex flex-row justify-between rounded-[15px] bg-black h-[50px] py-[10px] px-[20px]">
                        <div className="flex flex-row items-center gap-[10px]">
                            <p className="text-white text-[12px]">Sort by</p>
                            <div className="relative flex flex-row bg-white rounded-[10px] cursor-pointer z-[20]"
                            onClick={()=> {
                              setTogglePopularity(!togglePopularity)
                            }}
                            >
                              <div className={`absolute bg-white w-full duration-200 mt-[20px] rounded-b-[10px] ${togglePopularity ? "shadow-md z-[19] h-[150px]" : "h-[0px] z-[-20]"} `}
                              onMouseLeave={()=> {
                                setTogglePopularity(false)
                              }}
                              ></div>
                                <p className="text-black text-[12px] px-[15px] py-[5px]">Popularity</p>
                                <MdKeyboardArrowDown className='mr-[10px] mt-[5px]' />
                            </div>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center">
                            <p className="text-white text-[12px]">View</p>
                            <BsFillGridFill className='text-white' />
                            <FaListUl className='text-white' />
                        </div>
                    </div>
                    <div className="rounded-[15px] bg-gray-50 p-[20px] grid grid-rows-3 grid-cols-5 max-[1127px]:grid-cols-4 max-[972px]:grid-cols-3 max-[640px]:grid-cols-2 gap-5 w-full ">
                        {slideImages.map((product) => {
                            return (
                                <div className="group relative flex flex-col rounded-[15px] bg-white h-[250px] overflow-hidden">
                                    <div className=" group-hover:opacity-100 group-hover:z-10 opacity-0 -z-10 absolute h-full w-full flex duration-150">
                                        <div className="relative  h-full w-full flex items-center justify-center">
                                            <div className="absolute h-full w-full bg-black opacity-50 z-[1]"></div>
                                            {clicked ?
                                                <div className="absolute px-[20px] py-[5px] rounded-[10px] text-[12px] bg-white z-[2] cursor-pointer font-bold"
                                                    onClick={() => {
                                                        setClicked(!clicked)
                                                    }}
                                                >Add To Cart</div> :
                                                <div className="absolute px-[20px] py-[5px] rounded-[10px] text-[12px] bg-white z-[2] cursor-pointer font-bold flex flex-row gap-[10px] items-center"
                                                    onMouseLeave={() => {
                                                        setClicked(!clicked)
                                                    }}
                                                >
                                                    <p>Added To Cart</p>
                                                    <Tick/>
                                                </div>}
                                        </div>

                                    </div>
                                    <div className="h-[170px] p-[20px]">
                                        <div className="h-full w-full bg-cover bg-center bg-no-repeat"
                                            style={{ backgroundImage: `url(${hand})` }}
                                        ></div>
                                    </div>
                                    <div className="flex flex-col px-[12px] items-center gap-[10px]">
                                        <div className="">
                                            <p className="text-[10px] text-center font-bold">Office Chair, Office Metal Table & Visitor's Chairs</p>
                                        </div>
                                        <div className="flex flex-row gap-[5px]">
                                            <p className="text-[12px] text-gray-400 line-through">$640.00</p>
                                            <p className="text-[12px] ">$400.00</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
  )
}
