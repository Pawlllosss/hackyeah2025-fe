import icon from "./assets/circle-of-fifths-svgrepo-com.svg"
import {NavLink} from "react-router-dom";

const Nav = () => {
    return <nav className="top-0">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex shrink-0 items-center">
                        <img className="h-8 w-auto"
                             src={icon}
                             alt="Your Company"/>
                    </div>
                    <div className="absolute right-0 hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            <NavLink to="/"
                                     className={({isActive}) => "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white " + (isActive ? "bg-gray-900" : "bg-white")}
                                     aria-current="page">Home</NavLink>
                            <NavLink to="/about"
                                     className={({isActive}) => "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white " + (isActive ? "bg-gray-900" : "bg-white")}
                            >Experience</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}

export default Nav;