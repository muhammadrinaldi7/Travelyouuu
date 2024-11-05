import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => setOpen(!open)
    return (
    <header className="bg-transparent">
        <div className="w-full">
            {/* NavMobile */}
            <div className="fixed top-0 z-30 flex items-center justify-between w-full h-16 px-6 bg-transparent md:hidden">
                <div className="">
                    <a className="block" href="#">
                    <h1 className="text-2xl font-bold font-logo text-primary-300 ">TravelYouuu</h1>
                    </a>
                </div>
                <div className="flex flex-col gap-10">
                    <div>
                        <button type="button" className="text-gray-500 hover:text-gray-500/75" onClick={handleToggle}>
                            <span className="sr-only">Toggle navigation</span>
                            <FontAwesomeIcon className="w-6 h-6 font-bold text-gray-600" icon={faBars} />
                        </button>
                    </div>
                    <div className={`fixed px-8 py-4 rounded-lg bg-gray-50/70 right-4 top-20 ${open ? 'block' : 'hidden'}`}>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <a href="#"> Home </a>
                            </li>
                            <li>
                                <a href="#"> About </a>
                            </li>
                            <li>
                                <a href="#"> Destination </a>
                            </li>
                            <li>
                                <a href="#"> Exclusive Tour </a>
                            </li>
                            <li>
                                <a href="#"> Review </a>
                            </li>
                            <li>
                                <Link to="/login" className="text-red-400"> Login </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* NavDesktop */}
            <div className="items-center justify-center hidden w-full px-6 bg-transparent h-14 md:flex md:w-full">
                <div className="flex flex-row justify-between max-w-screen-xl gap-16 p-2 rounded-lg bg-white/65">
                    <ul className="flex flex-row justify-center gap-8 font-thin text-black/85 ">
                        <li>
                            <Link to="/" className="p-2 rounded-md hover:text-white hover:bg-primary-100"> Home </Link>
                        </li>
                        <li>
                            <a href="#about" className="p-2 rounded-md hover:text-white hover:bg-primary-100"> About </a>
                        </li>
                        <li>
                            <a href="#" className="p-2 rounded-md hover:text-white hover:bg-primary-100"> Destination </a>
                        </li>
                    </ul>
                    <h1 className="text-xl font-bold text-primary-300 drop-shadow-md font-logo ">TravelYouuu</h1>
                    <ul className="flex flex-row justify-center gap-8 font-thin text-black/85 ">
                        <li>
                            <a href="#" className="p-2 rounded-md hover:text-white hover:bg-primary-100"> Exclusive Tour </a>
                        </li>
                        <li>
                            <a href="#" className="p-2 rounded-md hover:text-white hover:bg-primary-100"> Review </a>
                        </li>
                        <li>
                            <Link to="/login" className="p-2 text-white rounded-md hover:text-black hover:bg-red-400 bg-secondary-100"> Login </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    );
};