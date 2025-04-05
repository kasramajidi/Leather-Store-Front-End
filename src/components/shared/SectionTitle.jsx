import React from 'react';

export default function SectionTitle({children, highlightText}) {
    return (
        <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold leading-[2rem] sm:leading-[2.2rem] md:leading-[2.4rem] text-[#6a4b4a] font-dana-bold">
            {children.split(highlightText)[0]}
            {highlightText ? (
                <span
                    className="relative z-[1] inline-block before:content-[''] before:absolute before:w-full before:h-2 before:bg-[#ece2d6] before:rounded-[3px] before:-z-10 before:bottom-[2px]">{highlightText}</span>
            ) : null}

            {children.split(highlightText)[1]}
        </h3>
    );
} 