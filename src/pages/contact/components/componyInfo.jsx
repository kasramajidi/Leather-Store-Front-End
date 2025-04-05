import React from 'react';
import Map from "./map.jsx";
import Communication from "./communication.jsx";

export default function ComponyInfo() {
    return (
        <section className="bg-[#fcfaf8] text-black w-full relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center">
                <div className=" w-8 h-8 bg-[#ece2d6] rounded-full mt-4 sm:mt-6"></div>
            </div>
            <section className={'page-container flex flex-col md:flex-row justify-between gap-4 sm:gap-8 py-8 sm:py-0'}>
                <div className="w-full md:w-1/2">
                    <Communication/>
                </div>
                <div className="w-full md:w-1/2">
                    <Map/>
                </div>
            </section>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-[#ece2d6] rounded-full mb-4 sm:mb-6"></div>
            </div>
        </section>
    );
}