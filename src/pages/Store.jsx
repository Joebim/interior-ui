import { useEffect, useState } from "react";
import Button from "../components/Button.jsx";
import axios from "axios"
import { BsCarFront } from "react-icons/bs";
import { LiaTapeSolid } from "react-icons/lia";
import { TbRulerMeasure } from "react-icons/tb";
import { FiEdit3 } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { PiPaintBucket } from "react-icons/pi";
import { VscLayoutSidebarRight } from "react-icons/vsc";
import { CgIfDesign } from "react-icons/cg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ReactComponent as Polygon } from '../assets/images/polygon.svg'
import cloud from "../assets/images/cloud.png"
import Carousel from "../components/Carousel.jsx";
import Loader from "../global-components/Loader.jsx";




export default function Store() {

  const [data, setData] = useState()
  const [currentSlide, setCurrentSlide] = useState(0)



  useEffect(() => {
    const baseUrl = 'https://eclectic-longma-326fe9.netlify.app'; // Base URL of your site
    const functionPath = '/.netlify/functions/api'; // Path to the Netlify Function endpoint

    const apiUrl = `${baseUrl}${functionPath}`; // Combine the base URL and path
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response?.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)

  }



  console.log('data', data)
  console.log('currentSlide', currentSlide)
  if (!data) {
    return <div><Loader /></div>;
  }

  return (
    <>
      <div className="w-full sm:h-[100vh] p-0 sm:p-[20px] sm:pt-[70px] justify-center items-center bg-gray-50">
        <div className="h-full relative w-full justify-end items-end overflow-hidden bg-white sm:rounded-[20px] shadow-lg flex flex-col gap-[30px]">
          <div className="flex-[9] flex flex-col sm:flex-row">
            <div className="flex-[1] relative mt-[-10px]">
              <div className="z-[5] absolute h-[600px] w-[600px] mt-[-27%] ml-[-30%]"
                // style={{ transform: `rotate(${currentSlide == 0 ? 97 : currentSlide == 1 ? 298 : currentSlide == 2 ? 140 : ""}deg`, transitionDuration: `1000ms` }}
                style={{ transform: `rotate(${(currentSlide * 200) + 97}deg`, transitionDuration: `1000ms` }}

              >
                <div className="relative h-full w-full ">
                  {data?.map((item) => (
                    <div key={item?.set_id}
                      className={`w-full h-full absolute duration-500 rounded-full flex flex-row flex-wrap ${currentSlide !== item.set_id - 1 ? "opacity-0" : ""}`}
                    >

                      <div className="relative h-full w-full"
                        style={{ transform: `rotate(${(item?.id) * 40}deg)` }}
                      >

                        {item?.items?.map((item_set) => (
                          <div key={item_set?.id} className={`absolute top-0 left-0 h-full w-full `}
                            style={{ transform: `rotate(${(currentSlide + item_set?.id) * 40}deg)`, transitionDuration: `${1000}ms` }}>
                            <img src={item_set?.image} alt=""
                              style={{ width: `${currentSlide !== 0 ? 250 : 180}px` }}
                              className={`sm:w-auto w-[150px]`}
                            />
                          </div>


                        ))}
                      </div>
                    </div>

                  ))}
                </div>

              </div>
              <div className="mt-[0%] sm:mt-[-14%] ml-[4%] sm:ml-[-20%] relative w-[100%]">
                <div className="absolute h-full w-full flex flex-col justify-center items-center overflow-hidden">

                  <div className="h-[180px] w-[200px] z-[3] mt-[150px] flex overflow-hidden">
                    <div className="h-full flex flex-row duration-1000"
                      style={{ width: `${data?.length * 200}px`, transform: `translateX(-${(currentSlide) * 200}px)` }}>
                      {data?.map((item) => (
                        <div key={item.set_id} className="w-[200px]">
                          <h1 className="text-[40px] font-bold text-center text-white w-full">{item.type}</h1>
                        </div>
                      ))}
                    </div>

                  </div>

                  <img src={cloud} alt="" className="h-[50px] z-[4] ml-[-200px]" />

                </div>
                <Polygon style={{ color: `${data[currentSlide]?.themeColor}`, transform: `rotate(${currentSlide * 50}deg)` }} className=" duration-1000 h-[400px] sm:h-[500px]" />

              </div>

            </div>
            <div className="flex-[1] w-full flex flex-col gap-[30px] ">
              <div className="flex flex-row items-center justify-end pt-[40px] pr-[20px] sm:pr-[40px]">
                <Button><CgIfDesign className="text-[20px] text-[black]" /></Button>

              </div>
              <div className="flex flex-col w-full gap-[30px]">
                <div className="pr-[55px] pl-[40px] ">
                  <h1 className="text-[25px] font-medium text-right sm:text-left">My<br />storehouse</h1>

                </div>

                <div className="w-full relative flex flex-col gap-[15px]  overflow-hidden">
                  <div className="w-full flex flex-row justify-between items-center pr-[55px] pl-[40px] ">
                    <h1 className="text-[11px] font-semibold">Products</h1>
                    <p className="text-[11px] font-semibold">Qty</p>
                  </div>

                  <div className="w-[100%]">
                    <div className="w-[300%] flex flex-row  duration-1000 "
                      style={{ transform: `translateX(-${currentSlide * 33.4}%)` }}
                    >
                      <Carousel data={data} />
                    </div>



                  </div>
                  <div className="absolute h-full w-full flex items-center justify-between">
                    <div className="h-full w-[100px] mt-[30px] ml-[-5px] flex items-center duration-150 justify-start pl-[8px]">
                      <div className="slider-btn h-[30px] relative w-[30px] cursor-pointer shadow-md flex justify-center items-center z-[4] bg-white duration-150 rounded-full"
                        onClick={previousSlide}
                      >
                        <MdKeyboardArrowLeft className="text-[20px] text-[white]" />
                      </div>
                    </div>
                    <div className="h-full w-[100px] mt-[30px] mr-[-5px] flex items-center duration-150 justify-end pr-[20px]">
                      <div className="slider-btn h-[30px] relative w-[30px] cursor-pointer shadow-md flex justify-center items-center z-[4] bg-white duration-150 rounded-full"
                        onClick={nextSlide}
                      >
                        <MdKeyboardArrowRight className="text-[20px] text-[white]" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
          <div className="absolute w-[60%] pb-[30px] flex items-end justify-start">
            <div className="control-panel pl-[20px] w-[300px] h-[60px] rounded-full flex flex-row justify-around items-center bg-white shadow-[0px_50px_100px_0px_#cbd5e0]">
              <TbRulerMeasure className="text-[20px] cursor-pointer text-[black]" />
              < FiEdit3 className="text-[20px] cursor-pointer text-[black]" />
              <div className="flex flex-row cursor-pointer gap-[3px]">
                <FiUser className="text-[20px] text-[black]" />
                <MdKeyboardArrowDown className="text-[20px] text-[black]" />
              </div>
              <hr className="h-[20px] bg-gray-400 w-[1.5px]" />
              <div className="h-[50px] w-[50px] cursor-pointer flex justify-center items-center rounded-[15px] bg-black">
                <HiArrowNarrowRight className="text-[20px] text-white" />
              </div>
            </div>
          </div>
          <div className="flex-[1] flex flex-row w-full items-center justify-between pb-[40px] px-[20px] sm:px-[40px]">
            <div className="flex  flex-row gap-[20px]">
              <Button><BsCarFront className="text-[20px] text-[black]" /></Button>
              <Button><LiaTapeSolid className="text-[20px] text-[black]" /></Button>
              <Button><PiPaintBucket className="text-[20px] text-[black]" /></Button>
            </div>
            <Button><VscLayoutSidebarRight className="text-[20px] text-[black]" /></Button>
          </div>
        </div>


      </div>
    </>
  )
}
