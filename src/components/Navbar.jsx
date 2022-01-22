import { useState, useContext } from 'react';
import { HiMenu, HiMenuAlt4 } from 'react-icons/hi';  //bg-gradient-to-r from-[#654ea3] to-[#eaafc8] dark:
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../../Images/logo.png';
import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';




const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );

}
const List = ["About", "Tutorials", "Wallet"];







const Navbar = ({ theme }) => {



    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className=" w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-32 text-white cursor-pointer"></img>
            </div>
            <ul className="text-white md:flex hidden list-none flex-row items-center justify-between  ">
                {List.map((items, index) => (
                    <NavbarItem key={items + index} title={items} />
                ))}
                <li className="bg-[#61E5FF] dark:bg-[#2952e3] py-2 px-7 mx-4 rounded-full hover:bg-[#52C2D8] dark:hover:bg-[#2546bd] cursor-pointer">
                    Login
                </li>
            </ul>
            <div className="flex-relative">
                {toggleMenu ?
                    <AiOutlineClose fontSize={28} className="text-white cursor-pointer md:hidden" onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className="text-white cursor-pointer md:hidden" onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <ul
                        className=" z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-empty blue-glassmorphism text-white animate-slide-in"
                    >
                        <li className=" text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />

                        </li>
                        {List.map((items, index) => (
                            <NavbarItem key={items + index} title={items} classProps="my-2 text-lg" />
                        ))}
                    </ul>

                )}
            </div>
            <div className='flex items-center justify-center inline-flex '>
                <label className='pt-0 pb-1 w-10 mb-6 ' >

                    <div className='w-12 h-5 border-2 justify-center items-center rounded-lg bg-#172d42 mt-1 absolute' type='checkbox' />
                    <input onClick={theme} className='bg-[#ffffff] w-7 h-7  flex justify-center items-center duration-500 checked:translate-x-6 checked:bg-black appearance-none rounded-full absolute ease-in-out' type='checkbox' >
                    </input>


                </label>

            </div>
        </nav>
    )
}

export default Navbar;
