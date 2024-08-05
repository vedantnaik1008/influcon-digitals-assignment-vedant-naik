import { useState } from 'react';
import logo from '../../public/image/logocotel.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [click, setClick] = useState(false);
    const pathname = window.location.pathname === '#contact'; 
    console.log(pathname);
    return (
        <header className='p-5 bg-white'>
            <div className='flex justify-between items-center relative'>
                <img
                    src={logo}
                    alt='logo'
                    width={80}
                    height={42}
                    className='object-cover'
                />
                <div
                    className='flex flex-col gap-1 md:hidden'
                    onClick={() => setClick(!click)}>
                    <span className='h-1 w-8 bg-[#002a69] rounded-lg'></span>
                    <span className='h-1 w-8 bg-[#002a69] rounded-lg'></span>
                    <span className='h-1 w-8 bg-[#002a69] rounded-lg'></span>
                </div>
                <nav
                    className={
                        click
                            ? 'md:hidden absolute z-[50] top-16 -right-0 flex justify-center w-full h-screen bg-white translate-x-[0%] transition-all duration-300 ease-in-out flex-grow'
                            : 'md:hidden absolute z-[50] top-16 -right-0 flex justify-center w-full h-screen bg-white translate-x-[150%] transition-all duration-300 ease-in-out flex-grow'
                    }>
                    <ul className='flex flex-col gap-8 items-center mt-20'>
                        <li
                            onClick={() =>{ setClick(false); history.pushState(null, null, '/');}}
                            className='text-[#002a69] hover:text-[#FFDF4D]'>
                            <a href='#contact'>Home</a>
                        </li>
                        <li
                            onClick={() => setClick(false)}
                            className='text-[#002a69] hover:text-[#FFDF4D]'>
                            <Link to='/explore'>Explore Residences</Link>
                        </li>
                        <li
                            onClick={() =>{ setClick(false); history.pushState(null, null, '/');}}
                            className='text-[#002a69] hover:text-[#FFDF4D]'>
                            <a href='#contact'>Contact Us</a>
                        </li>
                    </ul>
                </nav>
                <nav className='hidden md:block'>
                    <ul className='flex gap-8 items-center'>
                        <li className='px-8 py-2 rounded-lg text-white bg-[#002a69] hover:text-[#FFDF4D]'>
                            <a
                                onClick={() =>
                                    history.pushState(null, null, '/')
                                }
                                href='#contact'
                                className={`${pathname ? 'active' : ''}`}>
                                Home
                            </a>
                        </li>
                        <li className='px-8 py-2 rounded-lg text-white bg-[#002a69] hover:text-[#FFDF4D]'>
                            <NavLink to='/explore' activeClassName='active'>
                                Explore Residences
                            </NavLink>
                        </li>
                        <li className='px-8 py-2 rounded-lg text-white bg-[#002a69] hover:text-[#FFDF4D]'>
                            <a
                                onClick={() =>
                                    history.pushState(null, null, '/')
                                }
                                href='#contact'
                                className={`${pathname ? 'active' : ''}`}>
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;