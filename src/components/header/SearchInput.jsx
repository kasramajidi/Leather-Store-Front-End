import React from 'react';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';

export default function SearchInput() {
    return (
        <div className="relative hidden lg:block">
            <input
                type="text"
                placeholder="جستجو کنید..."
                className="bg-[#ece2d6] placeholder:text-sm text-gray-900 rounded-full py-2 px-4 w-[300px] outline-none transition-all pl-10"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#795444]" />
        </div>
    );
}
