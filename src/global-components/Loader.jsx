import React from 'react'
import { GooSpinner } from "react-spinners-kit";

export default function Loader() {
    return (
        <div className="h-[100vh] w-full flex justify-center items-center bg-black-100">
            <GooSpinner
                size={60}
                color="#e5ba42"
                loading={true}
            />
        </div>
    )
}


// import React from 'react'

// const Loader = () => {

//     bodymovin.loadAnimation({
//     container: document.getElementById('loader'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'data.json'
//     })
    
//   return (
//     <div id="loader" className="h-[100vh] w-full"></div>
//   )
// }

// export default Loader