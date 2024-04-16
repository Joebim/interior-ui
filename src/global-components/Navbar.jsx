import React from 'react'
import { ReactComponent as Logo } from '../assets/images/Logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi"



export default function Navbar() {



    const location = useLocation()

    const routes = [
        {
            routeName: "Home",
            route: "/"
        },
        {
            routeName: "My Store",
            route: "/store"
        }
    ]

    return (
        <div className={`absolute ${location.pathname === '/store' ? "bg-gray-50" : "bg-white"} h-[70px] px-[20px] sm:px-[70px] w-full flex flex-row items-center justify-between gap-[30px] sm:gap-[50px] z-[100]`}>
            <div className="flex flex-row items-center gap-[30px] sm:gap-[60px]">
                <div className="flex flex-row gap-[10px] items-center">
                    <Logo style={{ color: "#000000" }} className=" h-[35px]" />
                    <h1 className='font-bold'>Capsule</h1>
                </div>
                <div className="flex flex-row items-center gap-[30px]">
                    {routes.map((route, id) => (
                        <Link key={id} to={route.route}><div className={`text-[#575757]  hover:text-black hover:font-black cursor-pointer sm:text-[13px] text-[12px] duration-300 ${location.pathname == route.route ? "font-black text-[#e5ba42]" : "font-bold"}`}>{route.routeName}</div></Link>
                    ))}
                </div>
            </div>

            <div className={`${location.pathname === "/productlist" ? "sm:flex" : "hidden"} group h-[35px] hidden w-[40%] border-[1px] border-solid border-black  duration-200 sm:duration-500 ease-linear rounded-full relative flex-row justify-center  px-[20px]`}>
               
                <div className="h-full w-[30px] flex justify-center items-center duration-150">
                    <BiSearch className='w-[20px] h-[20px] text-gray-500 group-hover:relative' />

                </div>

                <input type="text" placeholder='Search' className='w-full outline-none bg-transparent pl-[10px] text-[14px]'

                />
            </div>

            <Link to="/cart">
                <div title='Cart' className="cursor-pointer p-[5px] pr-[8px] duration-150 rounded-[5px] hover:bg-gray-100">
                    <div className="absolute h-[10px] w-[10px] rounded-full bg-red-600 mt-[-6px] ml-[-9px]"></div>
                    <IoCartOutline className='text-[25px]' />
                </div>
            </Link>

        </div>
    )
}
