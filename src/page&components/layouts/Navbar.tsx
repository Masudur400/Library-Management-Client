import { useState } from "react"; 
import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from 'react-icons/ai';
import { LiaTimesSolid } from 'react-icons/lia'; 
import { Link, NavLink } from "react-router";

const Navbar = () => {

    // const [profile, setProfile] = useState(false);
    // const { user, logOut, loading } = useAuth();
    // const axiosSecure = useAxiosSecure();
    const [click, setClick] = useState(false); 


    const handleClick = () => setClick(!click);
    const closeMenu = () => {
        setClick(false);
        // setProfile(false);
    };


     

    const routes = <>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>All Books</NavLink></li>

        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/addBooks' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Add Books</NavLink></li>

        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/borrowBooks' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Borrow Summary</NavLink></li>
         
    </>;

     

    return (
        <div className="shadow-md border-b border-base-300 fixed z-10 w-full top-0">
            <nav className="container mx-auto bg-base-100">
                <div className='container mx-auto flex justify-between items-center'>

                    {/* Left Section - Logo */}
                    <div className="flex items-center p-2">
                        <div className="flex gap-5 lg:gap-10 justify-start items-center">
                            {/* Burger Icon: visible only on mobile and medium screens */}
                            <div className="lg:hidden mt-1" onClick={handleClick}>
                                {click ? (
                                    <AiOutlineClose className="text-2xl lg:text-3xl cursor-pointer" />
                                ) : (
                                    <SlMenu className="text-2xl lg:text-3xl cursor-pointer" />
                                )}
                            </div>
                            <Link to='/'> <p title="Home" className="text-3xl font-bold">
                                <span className="text-orange-500">Book</span><span className="text-xl">Library</span>
                            </p>
                            </Link>
                        </div>
                    </div>

                    {/* Center Menu Items (visible only on large screens) */}
                    <ul className="hidden lg:flex space-x-8 items-center justify-end w-full mx-auto font-medium mr-7">
                        {routes}
                    </ul>

                    {/* Right Section - User Info */}
                     {/* <div className="mr-10">profile</div> */}
                </div>
            </nav>

            {/* Burger Menu Items (visible only on smaller screens) */}
            <div
                className={`fixed top-0 left-0 w-[250px] h-full bg-base-100 transition-transform duration-500 ease-in-out z-50 ${click ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}
            >
                <div className="sticky top-0 bg-base-100 px-4 py-2 md:py-[8px] border-b border-gray-700">
                    <div className="flex justify-between items-center">
                        <p className="text-3xl font-bold mb-0">
                            <span className="text-orange-500">Book</span><span className="text-xl">Library</span>
                        </p>
                        <a onClick={closeMenu} className="hover:text-pink-500 cursor-pointer border-2">
                            <LiaTimesSolid className="text-xl lg:text-2xl cursor-pointer" />
                        </a>
                    </div>
                </div>

                {/* Scrollable Content with Hidden Scrollbar */}
                <ul className="overflow-y-scroll px-4 space-y-4 font-medium mt-3" style={{ maxHeight: 'calc(100vh - 64px)' }}>
                    <style>{`ul::-webkit-scrollbar { display: none; }`}</style>
                    {routes}
                </ul>
            </div>

            {/* Overlay when burger menu is open */}
            {click && (
                <div className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden" onClick={closeMenu}></div>
            )}
        </div>
    );
};

export default Navbar;