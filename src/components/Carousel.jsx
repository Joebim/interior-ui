import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

export default function Carousel(props) {
    return (
        <>
            {props?.data?.map((item) => (
                <div key={item.set_id} className="w-[100%]  flex flex-col">
                    {item?.items?.map((item_set) => (
                        <div key={item_set.id} className={`h-[70px]  pr-[55px] pl-[40px]  flex flex-row ${item_set.id % 2 === 0 ? "" : "bg-gray-50"} items-center`}>
                            <div className="flex-[4.5]">
                                <h1 className="text-[13px] font-semibold">{item_set.name}</h1>
                            </div>

                            <div className="flex-[5.5] flex flex-row justify-between items-center">
                                <div className="flex flex-row items-center gap-[5px]">
                                    <span className="text-[11px]">{item_set.size.height}</span>
                                    <RxCross2 className="text-[10px] text-[black]" />
                                    <span className="text-[11px]">{item_set.size.width}</span>
                                </div>
                                <img src={item_set.previewImage} className='w-[70px] mt-[-10px]' alt="" />
                                <PiStarFourFill className="text-[13px] text-[black]" />
                            </div>
                        </div>
                    ))}

                </div>

            ))}
        </>
    )
}
