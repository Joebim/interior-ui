import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import interiorbg from "../assets/images/interiorbg.jpg"
import InfiniteSlider from '../components/InfiniteSlider';
import { slideImages } from '../components/slideimages';
import { commentsData } from '../components/commentsData';
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";

export default function Landing() {

    const [isHovered, setIsHovered] = useState(false);

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
                    <div className=" rounded-[15px] h-[100px] bg-gray-50">
                        <div className="py-[18px] flex flex-row gap-[10px]">
                            <div className="h-[20px] w-[18px] bg-black rounded-r-full"></div>
                            <h1 className="font-bold text-[15px]">Filter</h1>
                        </div>
                        <div className=""></div>
                    </div>
                    <div className=" rounded-[15px] h-[100px] bg-gray-50">
                        <div className="py-[18px] flex flex-row gap-[10px]">
                            <div className="h-[20px] w-[18px] bg-black rounded-r-full"></div>
                            <h1 className="font-bold text-[15px]">Products By Rating</h1>
                        </div>
                        <div className=""></div>
                    </div>
                    <div className=" rounded-[15px] h-[100px] bg-gray-50">
                        <div className="py-[18px] flex flex-row gap-[10px]">
                            <div className="h-[20px] w-[18px] bg-black rounded-r-full"></div>
                            <h1 className="font-bold text-[15px]">Product Categories</h1>
                        </div>
                        <div className=""></div>
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
                        <BsFillGridFill className='text-white'/>
                        <FaListUl className='text-white'/>
                        </div>
                    </div>
                    <div className="rounded-[15px] bg-gray-50 p-[20px] grid grid-rows-3 grid-cols-5 max-[1127px]:grid-cols-4 max-[972px]:grid-cols-3 max-[640px]:grid-cols-2 gap-5 w-full ">
                        <div className="rounded-[15px] bg-white h-[250px]"></div>
                        <div className="rounded-[15px] bg-white h-[250px]"></div>
                        <div className="rounded-[15px] bg-white h-[250px]"></div>
                        <div className="rounded-[15px] bg-white h-[250px]"></div>
                        <div className="rounded-[15px] bg-white h-[250px]"></div>
                    </div>
                </div>
            </div>

        </>
    )
}
