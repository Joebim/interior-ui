import React from 'react'

export default function Button({ children }) {
    return (
        <div className="h-[40px] cursor-pointer w-[40px] rounded-[13px] flex justify-center items-center duration-150 hover:bg-gray-100">
            {children}
        </div>
    )
}
