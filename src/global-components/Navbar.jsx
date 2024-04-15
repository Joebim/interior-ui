import React from 'react'
import { ReactComponent as Logo } from '../assets/images/Logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";


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
        <div className={`absolute ${location.pathname === '/store' ? "bg-gray-50" : "bg-white"} h-[70px] px-[70px] w-full flex flex-row items-center justify-between gap-[50px]`}>
            <div className="flex flex-row items-center gap-[60px]">
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
            
            <div className="cursor-pointer p-[5px] pr-[8px] duration-150 rounded-[5px] hover:bg-gray-100">
                <div className="absolute h-[10px] w-[10px] rounded-full bg-red-600 mt-[-6px] ml-[-9px]"></div>
            <IoCartOutline className='text-[25px]'/>
            </div>
        </div>
    )
}
