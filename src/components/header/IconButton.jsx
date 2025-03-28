import React from 'react';

export default function IconButton({icon, onClick}) {
    return (
        <button
            className="lg:py-3 py-2 px-2 lg:px-3 cursor-pointer text-[#795444] bg-[#ece2d6] rounded-full hover:bg-[#a16a51] transition-all"
            onClick={onClick}
        >
            {icon}
        </button>
    );
}
