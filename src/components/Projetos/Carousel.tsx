"use client"

import React, { useState, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

type CarouselProps = {
    children: ReactNode;
};

export default function Carousel({ children }: CarouselProps) {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? 0 : curr - 1));
    const next = () =>
    setCurr((curr) => (curr === React.Children.count(children) - 1 ? 0 : curr + 1));

    return (
        <div className="overflow-hidden relative">
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
            {children}
            </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
                onClick={prev}
                className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
                <ChevronLeft size={40} />
            </button>
            <button
                onClick={next}
                className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
                <ChevronRight size={40} />
            </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
                {React.Children.map(children, (_, i) => (
                    <div
                    key={i}
                    className={`
                        transition-all w-3 h-3 bg-white rounded-full
                        ${curr === 1 ? "p-2" : "bg-opacity-50"}
                    `}
                    ></div>
                ))}
            </div>
        </div>
    </div>
    );
}
