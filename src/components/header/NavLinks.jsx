import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLinks({ onClick }) {
    const navLinks = [
        { title: "صفحه اصلی", href: "/" },
        { title: "فروشگاه", href: "/shop" },
        { title: "وبلاگ", href: "/blog" },
        { title: "درباره ما", href: "/about" },
        { title: "تماس با ما", href: "/contact" },
    ];

    return (
        <div className="bg-white md:bg-transparent rounded-lg md:rounded-none">
            <ul className="flex flex-col md:flex-row gap-2 md:gap-8">
                {navLinks.map((link, index) => (
                    <li key={index} className="w-full md:w-auto md:border-none border-b border-gray-200 last:border-b-0">
                        <Link
                            to={link.href}
                            className="block w-full text-gray-950 md:hover:text-[#653a2a] hover:text-white
                            md:inline-block md:py-0 md:px-0
                            py-2 px-4 hover:bg-[#653a2a] md:hover:bg-transparent transition-colors duration-150 text-sm md:text-base lg:text-sm xl:text-base"
                            onClick={onClick}
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}