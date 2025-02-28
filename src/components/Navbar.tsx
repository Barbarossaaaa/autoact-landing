import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import GrayLogo from '../assets/images/navbar/autocat_logo.svg';
import Cross from '../assets/images/navbar/cross.svg';
import Hamburger from '../assets/images/navbar/hamburger.svg';

const Navbar = () => {
    // State to toggle the mobile menu
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center w-full px-6 sm:py-2 -sm:px-0 lg:py-[10px] xl:py-[12.5px] 2xl:py-4">
            <div className="flex justify-between items-center gap-x-16">
                <Link
                    className="flex w-max justify-start items-center gap-2 pointer-events-auto"
                    to="/"
                >
                    <img
                        src={GrayLogo}
                        className="h-[24px] md:h-[28px] xl:h-[36px] mac:h-[40px] 2xl:h-[56px] w-auto"
                    />
                    <span className="font-bold text-white text-lg md:text-xl xl:text-2xl">
                        AutoAct
                    </span>
                </Link>

                <div className="hidden lg:flex w-max items-center lg:gap-8 mac:gap-9 2xl:gap-10 font-regular text-sm mac:text-base 2xl:text-lg text-white">
                    <NavLink
                        className={({ isActive }) =>
                            `hover:underline hover:underline-offset-4 pointer-events-auto ${
                                isActive ? 'font-bold' : ''
                            }`
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                    <Link
                        className="hover:underline hover:underline-offset-4 pointer-events-auto"
                        to="https://docs.kleo.network/"
                        target="_blank"
                    >
                        Docs
                    </Link>
                </div>
            </div>

            {/* Hamburger Menu (Visible on small screens only) */}
            <div className="lg:hidden">
                <button
                    onClick={() => setMenuOpen(!isMenuOpen)}
                    className="flex items-center text-white pointer-events-auto focus:outline-none"
                >
                    {isMenuOpen ? (
                        <img
                            src={Cross}
                            className="w-5 h-5"
                        />
                    ) : (
                        <img
                            src={Hamburger}
                            className="w-5 h-5"
                        />
                    )}
                </button>
            </div>

            {/* RIGHT : NavLinks + LaunchBtn (hidden on small screens) */}
            <div className="hidden lg:flex w-max justify-end items-center lg:gap-8 mac:gap-9 2xl:gap-10 font-regular text-sm mac:text-base 2xl:text-lg text-white">
                <Link
                    className="h-fit px-[14px] py-2 lg:px-[18px] rounded-lg bg-white cursor-pointer hover:bg-white/50 font-semibold text-sm mac:text-base 2xl:text-lg text-blue-800 pointer-events-auto"
                    to="https://www.app.kleo.network"
                    target="_blank"
                >
                    Free Trial
                </Link>
            </div>

            {/* Mobile Menu (Visible when menu is open) */}
            <div
                className={`${
                    isMenuOpen ? 'block' : 'hidden'
                } lg:hidden absolute top-full left-0 w-full flex flex-col items-center bg-gray-800 text-white p-6 space-y-4`}
            >
                <NavLink
                    className={({ isActive }) =>
                        `hover:underline hover:underline-offset-4 pointer-events-auto ${
                            isActive ? 'font-bold' : ''
                        }`
                    }
                    to="/"
                >
                    Home
                </NavLink>
                <Link
                    className="block hover:underline pointer-events-auto"
                    to="https://docs.kleo.network/"
                    target="_blank"
                >
                    Docs
                </Link>
                <Link
                    className="block h-12 px-5 py-3 rounded-lg bg-white cursor-pointer hover:bg-white/50 font-semibold text-base text-blue-800 pointer-events-auto"
                    to="https://www.app.kleo.network"
                    target="_blank"
                >
                    Free Trial
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
