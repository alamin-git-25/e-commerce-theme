"use client"
import { useEffect, useState } from "react";

const Loader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;
    return (
        <div className="fixed inset-0 flex md:w-full md:h-full w-screen h-screen items-center justify-center bg-gray-900/80 backdrop-blur-2xl z-50">
            <svg viewBox="0 0 400 200" className="loading">
                <text x="50%" y="50%" dy=".32em" textAnchor="middle" className="text-body text-white">
                    DTT
                </text>
                <text x="50%" y="50%" dy="2.1em" textAnchor="middle" className="title text-only">
                    Dark Tech Team
                </text>
            </svg>
        </div>
    );
};

export default Loader;

