import React from 'react';
import NavLinks from './NavLinks';
import {FaTimes} from '@react-icons/all-files/fa/FaTimes';
import {FaSearch} from '@react-icons/all-files/fa/FaSearch';

export default function MobileMenu({isOpen, onClose}) {
    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/80 bg-opacity-50 z-40"
                onClick={onClose}
            />

            <div
                className="fixed top-0 right-0 h-screen w-[300px] bg-[#fcfaf8] z-50 shadow-lg transform transition-transform duration-300 translate-x-0 overflow-y-auto">
                <div className="flex justify-end p-4 absolute left-0">
                    <button
                        onClick={onClose}
                        className="p-0 w-auto h-auto text-[#795444] text-2xl hover:text-[#a16a51] transition-colors"
                    >
                        <FaTimes/>
                    </button>
                </div>

                <div className="flex justify-center mb-2">
                    <img
                        src="/images/Logo.svg"
                        alt="Logo"
                        className="h-[80px] w-[200px]"
                    />
                </div>

                <div className="relative px-4 mb-2">
                    <input
                        type="text"
                        placeholder="جستجو کنید..."
                        className="bg-[#ece2d6] placeholder:text-sm text-gray-900 rounded-full py-2 px-4 w-full outline-none pl-10"
                    />
                    <FaSearch className="absolute left-7 top-1/2 transform -translate-y-1/2 text-[#795444]"/>
                </div>

                <nav className="px-4 mt-5">
                    <NavLinks onClick={onClose}/>
                </nav>
            </div>
        </>
    );
}