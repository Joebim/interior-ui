import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import interiorbg from "../assets/images/interiorbg.jpg"
import InfiniteSlider from '../components/InfiniteSlider';
import { commentsData } from '../components/commentsData';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

export default function Landing() {

    const [isHovered, setIsHovered] = useState(false);
    const [open, setOpen] = useState(false);

    const REVIEW_DURATION = 50000;
    const REVIEW_ROWS = 1;
    const REVIEW_TAGS_PER_ROW = 10;

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const shuffle = (arr) => [...arr].sort(() => .5 - Math.random());

    return (
        <>
            <div className="flex flex-col sm:flex-row h-auto sm:h-[100vh] pt-[70px] px-[30px] sm:px-[70px] pb-[50px] gap-[50px]">
                <div className="flex-[1] flex flex-col justify-end">
                    <div className="w-full flex flex-col gap-[50px]">
                        <div className="flex flex-col gap-[20px] w-[90%]">
                            <h1 className='font-bold text-[50px] sm:mt-0 mt-[40px]'>Capsule Interior For Your Home</h1>
                            <p className="text-[14px]">Ready-made interior solutions created to easily transform the space around you while preserving the mood and harmony of your house or apartment</p>
                        </div>

                        <div className="flex gap-[20px]">
                            <Link to="/productlist">
                                <div className="px-[20px] py-[6px] rounded-full text-black text-[13px] font-bold bg-[#e5ba42]">Choose Capsule</div>
                            </Link>
                            <div className="flex items-center gap-[10px] px-[20px] py-[2px] hover:bg-gray-100 rounded-[15px] duration-150 cursor-pointer"
                            onClick={()=> {
                                setOpen(true)
                            }}
                            >
                                <FaPlay className='text-[]' />
                                <p className="font-semibold text-[12px]">Watch Video</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="sm:flex-[1] sm:h-auto h-[200px] bg-cover bg-center bg-no-repeat rounded-[40px]"
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


            <ProductList />

            <Modal open={open} setOpen={setOpen} />

        </>
    )
}
