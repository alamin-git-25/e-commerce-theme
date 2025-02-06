"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Container from "../custom/Container";
import { SectionHeader } from "../custom/Heading";

const categories = [
    { name: "New Arrivals", icon: "📦" },
    { name: "Electronics", icon: "💻" },
    { name: "Gifts", icon: "🎁" },
    { name: "Computers", icon: "🖥️" },
    { name: "Smartphones & Tablets", icon: "📱" },
    { name: "TV, Video & Music", icon: "📺" },
    { name: "Cameras", icon: "📷" },
    { name: "Cooking", icon: "🍳" },
    { name: "Accessories", icon: "🎒" },
    { name: "Sports", icon: "⚽" },
    { name: "Electronic Gadgets", icon: "🎧" },
];



export function Category() {
    const [index, setIndex] = useState(0);
    const visibleCards = 4;
    const handleNext = () => {
        setIndex((prev) => (prev + 1) % categories.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + categories.length) % categories.length);
    };

    const carouselRef = useRef(null);

    return (
        <Container>
            <div className="relative w-full  mx-auto mt-10 overflow-hidden">

                <SectionHeader title="Categories" onNext={handleNext} onPrev={handlePrev} />

                <div className="relative overflow-hidden py-5">
                    <motion.div
                        ref={carouselRef}
                        className="flex gap-4 cursor-grab"
                        initial={{ x: 0 }}
                        animate={{ x: `-${index * (100 / visibleCards)}%` }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        drag="x"
                        dragConstraints={{ left: -500, right: 0 }}
                        whileTap={{ cursor: "grabbing" }}
                    >
                        {[...categories, ...categories].map((category, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center justify-center md:w-40 w-20 md:h-40 h-20 bg-card shadow-md rounded-full p-4 md:min-w-40 min-w-20"
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="text-4xl mb-2">{category.icon}</div>
                                <h3 className="text-sm font-semibold text-center md:block hidden">{category.name}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Container>
    );
}

