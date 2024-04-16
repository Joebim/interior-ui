import { Link } from "react-router-dom"

export default function Button(props) {

    console.log('props', props)
    return (
        <Link to={props.link}>
            <div title={props.title} className="relative h-[40px] cursor-pointer w-[40px] rounded-[13px] flex justify-center items-center duration-150 z-[30] hover:bg-gray-100">
                {props.children}
            </div>
        </Link>

    )
}
