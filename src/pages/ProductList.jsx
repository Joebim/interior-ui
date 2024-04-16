import React, { useState } from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import hand from "../assets/images/hand.png"
import Tick from '../components/Tick';
import { slideImages } from '../components/slideimages';
import { useLocation } from 'react-router-dom';
import Filter from './Filter';
import { FiUser } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";


export default function ProductList() {

  const location = useLocation()

  const [clicked, setClicked] = useState(false)
  const [togglePopularity, setTogglePopularity] = useState(false)
  const [popularity, setPopularity] = useState("Popularity")
  const [price, setPrice] = useState(0)
  const [toggleLayout, setToggleLayout] = useState("grid")
  const [filterToggle, setFilterToggle] = useState(false)



  console.log('togglePopularity', togglePopularity)

  console.log('filterToggle', filterToggle)

  return (
    <>
      <div className=" relative">
        <div className={` absolute sm:hidden h-[100%] w-full duration-200 bg-black ${filterToggle ? "z-[99] opacity-50" : "z-[-99] opacity-0"} `}
          onClick={() => {
            setFilterToggle(false)
          }}
        ></div>

        <div className={`relative flex flex-col sm:flex-row ${location.pathname === "/productlist" ? "pt-[100px]" : ""} p-[30px] am:p-[50px] gap-[30px]`}>
          <div className="flex-[1] hidden sm:block">
            <Filter
              setPrice={setPrice}
              price={price}
              hand={hand}
            />
          </div>

          <div className="flex-[4] flex flex-col gap-[20px]">
            <div className="flex flex-row justify-between rounded-[15px] bg-black py-[10px] px-[20px] z-[100]">
              <div className="flex flex-row items-center gap-[7px] sm:gap-[10px]">
                <p className="text-white text-[12px]">Sort by</p>
                <div className="relative flex flex-row bg-white rounded-[10px] cursor-pointer z-[20]"
                  onClick={() => {
                    setTogglePopularity(!togglePopularity)
                  }}
                >
                  <div className={`absolute bg-white w-full duration-200 flex flex-col gap-[8px] mt-[20px] rounded-b-[10px] ${togglePopularity ? "shadow-md z-[19] p-[10px] " : "h-[0px] z-[-20] overflow-hidden"} `}
                    onMouseLeave={() => {
                      setTogglePopularity(false)
                    }}
                  >
                    <div className={`rounded-[5px] ${popularity === "Popularity" ? "bg-gray-200" : " bg-gray-50"} text-[12px] flex justify-center items-center w-full h-[30px]`}
                      onClick={() => {
                        setPopularity("Popularity")
                      }}
                    >Popularity</div>
                    <div className={`rounded-[5px] ${popularity === "Price" ? "bg-gray-200" : " bg-gray-50"} text-[12px] flex justify-center items-center w-full h-[30px]`}
                      onClick={() => {
                        setPopularity("Price")
                      }}
                    >Price</div>
                  </div>

                  <p className="text-black text-[12px] px-[15px] py-[5px]">{popularity}</p>
                  <MdKeyboardArrowDown className='mr-[10px] mt-[5px]' />
                </div>
              </div>
              <div className="flex flex-row gap-[10px] items-center">
                <p className="text-white sm:block hidden text-[12px]">View</p>
                <div className={`p-[9px] rounded-[5px] cursor-pointer hover:bg-gray-700 ${toggleLayout === "grid" ? "bg-gray-800" : ""}`}>
                  <BsFillGridFill className='text-white'
                    onClick={() => {
                      setToggleLayout("grid")
                    }}
                  />
                </div>

                <div className={`p-[9px] rounded-[5px] cursor-pointer hover:bg-gray-700 ${toggleLayout === "row" ? "bg-gray-800" : ""}`}>
                  <FaListUl className='text-white'
                    onClick={() => {
                      setToggleLayout("row")
                    }}
                  />
                </div>

              </div>
            </div>
            <div className={`rounded-[15px] bg-gray-50 p-[20px] ${toggleLayout === "grid" ? "grid" : "flex flex-col"}  grid-rows-3 grid-cols-5 max-[1127px]:grid-cols-4 max-[972px]:grid-cols-3 max-[640px]:grid-cols-2 gap-5 w-full `}>
              {slideImages.map((product, id) => {
                return (
                  <div key={id} className={`group relative flex ${toggleLayout === "row" ? "flex-row" : "flex-col"} rounded-[15px] bg-white h-[250px] overflow-hidden`}>
                    <div className=" group-hover:opacity-100 group-hover:z-10 opacity-0 -z-10 absolute h-full w-full flex duration-150">
                      <div className="relative  h-full w-full flex items-center justify-center">
                        <div className="absolute h-full w-full bg-black opacity-50 z-[1]"></div>
                        {clicked ?
                          <div className="absolute px-[20px] py-[5px] rounded-[10px] text-[12px] bg-white z-[2] cursor-pointer font-bold"
                            onClick={() => {
                              setClicked(!clicked)
                            }}
                          >Add To Cart</div> :
                          <div className="absolute px-[8px] sm:px-[20px] py-[5px] rounded-[10px] text-[10px] sm:text-[12px] bg-white z-[2] cursor-pointer font-bold flex flex-row gap-[5px] sm:gap-[10px] items-center"
                            onMouseLeave={() => {
                              setClicked(!clicked)
                            }}
                          >
                            <p>Added To Cart</p>
                            <Tick />
                          </div>}
                      </div>

                    </div>

                    <div className={` ${toggleLayout === "row" ? "h-full w-[200px]" : "h-[170px]"} p-[20px]`}>
                      <div className="h-full w-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${hand})` }}
                      ></div>
                    </div>

                    <div className={`flex flex-col px-[12px] ${toggleLayout === "row" ? "justify-center items-start" : "items-center"} gap-[10px]`}>
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

          <div className="sm:hidden p-[20px] px-0 sticky bottom-0 z-[100]">


            <div className="relative h-[50px]">




              <div className={`absolute bottom-0 w-full flex flex-col gap-[8px] mt-[20px] rounded-[20px] duration-200 ${filterToggle ? "shadow-md z-[100] h-[80vh] overflow-y-scroll mb-[70px]" : "h-[0px] z-[-20] overflow-hidden"} `}
              >
                <Filter
                  setPrice={setPrice}
                  price={price}
                  hand={hand}
                />
              </div>

              <div className="relative w-full h-[50px] rounded-[20px] px-[30px] p-[5px] bg-black flex flex-row justify-around items-center z-[100]">

                <div className="flex-[4] flex flex-row cursor-pointer gap-[3px]"
                  onClick={() => {
                    setFilterToggle(!filterToggle)
                  }}
                >
                  <p className="text-white text-[15px] font-bold">Filters</p>
                  <MdKeyboardArrowDown className={`text-[20px] duration-200 text-white ${filterToggle ? " rotate-180" : " rotate-0"}`} />
                </div>
                <hr className="mr-[20px] h-[20px] bg-white w-[1.5px]" />
                <div className="flex-[1] h-[30px] w-[30px] cursor-pointer flex justify-center items-center rounded-[8px] bg-gray-100">
                  <HiArrowNarrowRight className="text-[20px] text-black" />
                </div>
              </div>

            </div>




          </div>

        </div>
      </div>



    </>

  )
}
