import { FaStar } from "react-icons/fa";


export default function Filter(props) {
    return (
        <div className="sm:relative bottom-0 sm:p-0 p-[20px] w-full sm:w-auto rounded-[10px] sm:bg-inherit bg-white shadow-md sm:shadow-none z-[100]">
            <div className=" flex flex-col gap-[20px]">
                <div className=" rounded-[15px] bg-gray-50">
                    <div className="pt-[18px] flex flex-row gap-[10px]">
                        <div className="h-[20px] w-[18px] bg-black rounded-r-full "></div>
                        <h1 className="font-bold text-[15px]">Filter</h1>
                    </div>
                    <div className="flex flex-col gap-[10px] px-[26px] py-[15px]">
                        <input id="range" type="range" value={props.price} className="w-full h-2 bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-200"
                            onChange={(e) => {
                                props.setPrice(e.target.value)
                            }}
                        ></input>
                        <p className="text-[12px] font-bold ">Price: $0.00 - ${props.price}.00</p>
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
                                <img src={props.hand} alt="" />
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
                                <img src={props.hand} alt="" />
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
                                <img src={props.hand} alt="" />
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
        </div>
    )
}