import React from 'react';

export default function Header() {
    const navLinks = [
        {title: "صفحه اصلی", href: "/"},
        {title: "فروشگاه", href: "/shop"},
        {title: "وبلاگ", href: "/blog"},
        {title: "درباره ما", href: "/about"},
        {title: "تماس با ما", href: "/contact"},
    ];

    return (
        <header className="bg-[#fcfaf8]">
            <section className="container mx-auto max-w-screen-xl py-4 flex items-center justify-between">
                <section className={'flex items-center gap-x-6'}>
                    <div>
                        <img src="/images/Logo.svg" alt="Logo" className={'h-[52px] w-[244px]'}/>
                    </div>
                    <nav>
                        <ul className="flex gap-8">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className=" text-gray-950 hover:text-[#a16a51] transition-all">
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </section>
                <section className={'flex items-center gap-x-3'}>
                    <input
                        type="text"
                        placeholder="جستجو کنید..."
                        className="bg-[#ece2d6] placeholder:text-sm text-gray-900 rounded-full py-2 px-4 w-[300px] outline-none transition-all"
                    />
                    <div className={'flex items-center gap-x-3'}>
                        <button className={'py-2 px-4 text-[#795444] bg-[#ece2d6] rounded-full'}>
                            a
                        </button>
                        <button className={'py-2 px-4 text-[#795444] bg-[#ece2d6] rounded-full'}>
                            b
                        </button>
                    </div>
                </section>
            </section>
        </header>
    );
}
