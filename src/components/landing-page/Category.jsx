// "use client";

// import { motion } from "framer-motion";
// import Container from "../custom/Container";
// import { Box, Camera, Cpu, Gift, Globe, Headphones, Smartphone, Tv, Utensils } from "lucide-react";
// import { SectionHeader } from "../custom/Heading";
// import { useState } from "react";

// const categories = [
//     { name: "New Arrivals", icon: "📦" },
//     { name: "Electronics", icon: "💻" },
//     { name: "Gifts", icon: "🎁" },
//     { name: "Computers", icon: "🖥️" },
//     { name: "Smartphones & Tablets", icon: "📱" },
//     { name: "TV, Video & Music", icon: "📺" },
//     { name: "Cameras", icon: "📷" },
//     { name: "Cooking", icon: "🍳" },
//     { name: "Accessories", icon: "🎒" },
//     { name: "Sports", icon: "⚽" },
//     { name: "Electronic Gadgets", icon: "🎧" },
// ];

// export function Category() {
//     const [startIndex, setStartIndex] = useState(0);
//     const visibleCount = 9;

//     const handlePrev = () => {
//         setStartIndex((prev) => (prev === 0 ? categories.length - visibleCount : prev - 1));
//     };

//     const handleNext = () => {
//         setStartIndex((prev) => (prev + visibleCount >= categories.length ? 0 : prev + 1));
//     };

//     const visibleCategories = categories.slice(startIndex, startIndex + visibleCount);

//     return (
//         <Container>
//             <SectionHeader title="Categories" onNext={handleNext} onPrev={handlePrev} />

//             <div className="relative flex gap-4 justify-center w-full h-full my-8 py-10 ">
//                 <motion.div
//                     className="flex gap-4 cursor-grab"
//                     whileTap={{ cursor: "grabbing" }}
//                     initial={{ opacity: 0, x: 100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     {visibleCategories.map((category, index) => (
//                         <motion.div
//                             key={index}
//                             className="flex flex-col items-center justify-center w-40 h-40 bg-white shadow-md rounded-full p-4 min-w-40"
//                             whileHover={{ scale: 1.1 }}
//                         >
//                             <div className="text-4xl mb-2">{category.icon}</div>
//                             <h3 className="text-sm font-semibold text-center">{category.name}</h3>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </Container>
//     );
// }

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "../custom/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

// Duplicate categories for infinite loop effect


export function Category() {
    const [index, setIndex] = useState(0);
    const visibleCards = 4;
    const handleNext = () => {
        setIndex((prev) => (prev + 1) % categories.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + categories.length) % categories.length);
    };



    return (
        <Container>
            <div className="relative w-full  mx-auto mt-10 overflow-hidden">

                <SectionHeader title="Categories" onNext={handleNext} onPrev={handlePrev} />

                <div className="relative overflow-hidden py-5">
                    <motion.div
                        className="flex gap-4"
                        initial={{ x: 0 }}
                        animate={{ x: `-${index * (100 / visibleCards)}%` }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    >
                        {[...categories, ...categories].map((category, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center justify-center md:w-40 w-20 md:h-40 h-20 bg-white shadow-md rounded-full p-4 md:min-w-40 min-w-20"
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

