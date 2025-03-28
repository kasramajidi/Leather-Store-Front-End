import React, {useState} from 'react';
import {FaShoppingCart} from '@react-icons/all-files/fa/FaShoppingCart';
import {FaUser} from '@react-icons/all-files/fa/FaUser';
import {FaBars} from '@react-icons/all-files/fa/FaBars';
import { Link } from 'react-router-dom';

import NavLinks from './NavLinks';
import SearchInput from './SearchInput.jsx';
import IconButton from './IconButton.jsx';
import MobileMenu from './MobileMenu.jsx';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-[#fcfaf8] relative">
            <section className="container mx-auto max-w-screen-xl py-4 flex items-center justify-between px-4 lg:px-0">
                <section className="flex items-center gap-x-3">
                    <button
                        className="py-3 px-3 cursor-pointer text-[#795444] bg-[#ece2d6] rounded-full hover:bg-[#a16a51] transition-all md:hidden"
                        onClick={toggleMenu}
                    >
                        <FaBars/>
                    </button>

                    <Link to="/">
                        <img
                            src="/images/Logo.svg"
                            alt="Logo"
                            className="h-[52px] w-[160px] sm:w-[160px] lg:w-[180px] xl:w-[244px]"
                        />
                    </Link>
                    <nav className="hidden md:block">
                        <NavLinks/>
                    </nav>
                </section>

                <section className="flex items-center gap-x-3">
                    <SearchInput/>
                    <div className="flex items-center lg:gap-x-4 gap-x-1">
                        <Link to="/cart">
                            <IconButton icon={<FaShoppingCart/>}/>
                        </Link>
                        <Link to="/account">
                            <IconButton icon={<FaUser/>}/>
                        </Link>
                    </div>
                </section>
            </section>
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
        </header>
    );
}