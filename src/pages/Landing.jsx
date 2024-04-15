import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import interiorbg from "../assets/images/interiorbg.jpg"
import InfiniteSlider from '../components/InfiniteSlider';
import { slideImages } from '../components/slideimages';
import { commentsData } from '../components/commentsData';
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import hand from "../assets/images/hand.png"
import Tick from '../components/Tick';

export default function Landing() {

    const [isHovered, setIsHovered] = useState(false);
    const [clicked, setClicked] = useState(false)

    const REVIEW_DURATION = 50000;
    const REVIEW_ROWS = 1;
    const REVIEW_TAGS_PER_ROW = 10;

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const shuffle = (arr) => [...arr].sort(() => .5 - Math.random());
    return (
        <>
            <div className="flex flex-row h-[100vh] pt-[70px] px-[70px] pb-[50px] gap-[50px]">
                <div className="flex-[1] flex flex-col justify-end">
                    <div className="w-full flex flex-col gap-[50px]">
                        <div className="flex flex-col gap-[20px] w-[90%]">
                            <h1 className='font-bold text-[50px]'>Capsule Interior For Your Home</h1>
                            <p className="text-[14px]">Ready-made interior solutions created to easily transform the space around you while preserving the mood and harmony of your house or apartment</p>
                        </div>

                        <div className="flex gap-[20px]">
                            <div className="px-[20px] py-[6px] rounded-full text-black text-[13px] font-bold bg-[#e5ba42]">Choose Capsule</div>
                            <div className="flex items-center gap-[10px]">
                                <FaPlay className='text-[]' />
                                <p className="font-semibold text-[12px]">Watch Video</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex-[1] bg-cover bg-center bg-no-repeat rounded-[40px]"
                    style={{ backgroundImage: `url(${interiorbg})` }}

                >

                </div>
            </div>

            <div className="p-[40px] border border-solid  overflow-hidden bg-gray-200">

                {[...new Array(REVIEW_ROWS)].map((_, i) => (
                    <InfiniteSlider
                        key={i}
                        duration={random(REVIEW_DURATION - 5000, REVIEW_DURATION + 5000)}
                        reverse={i % 2}
                        isHovered={isHovered} // Pass the isHovered state
                        className="gap-[20px] sm:gap-[40px] h-full"
                    >
                        {shuffle(commentsData).slice(0, REVIEW_TAGS_PER_ROW).map((data, id) => (
                            <div
                                key={id}
                                className="flex flex-col h-[150px] w-[250px] sm:h-[200px] sm:w-[350px] bg-[#313131] rounded-[15px] sm:rounded-[20px] duration-300"
                            >
                                <div className="flex-[1] flex flex-row gap-[20px] items-center pt-[20px] px-[25px]">
                                    <div className="bg-gray-200 h-[40px] w-[40px] rounded-full"></div>
                                    <div className="text-white">{data.user.name}</div>
                                </div>
                                <div className="flex-[3] text-[12px] sm:text-[15px] text-white px-[25px] py-[20px]">{data.comment}</div>

                            </div>
                        ))}
                    </InfiniteSlider>
                ))}

            </div>

            <div className="h-[100vh] flex flex-row p-[50px] gap-[30px]">
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
                            <div className="flex flex-row gap-[10px] px-[15px] py-[5px] bg-white rounded-[10px]">
                                <p className="text-black text-[12px]">Popularity</p>
                                <MdKeyboardArrowDown />
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

        </>
    )
}
