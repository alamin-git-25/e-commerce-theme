"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        id: 1,
        image: "/2.png", // Replace with your image paths
        title: "The best tablet Collection 2023",
        subtitle: "Starting at $274.00",
        offer: "Exclusive offer -35% off this week",
        button: "Shop Now",
        bg: 'bg-gradient-to-br from-teal-900 to-violet-600'
    },
    {
        id: 2,
        image: "/3.png",
        title: "Smart Watches on Sale",
        subtitle: "Starting at $199.00",
        offer: "Exclusive offer -25% off this week",
        button: "Discover More",
        bg: 'bg-gradient-to-br from-orange-800 to-cyan-700'
    },
    {
        id: 3,
        image: "/4.png",
        title: "Explore Latest Wearables",
        subtitle: "Starting at $150.00",
        offer: "Exclusive offer -20% off this week",
        button: "Check Deals",
        bg: 'bg-gradient-to-br from-slate-700 to-indigo-400'
    },
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 7000); // Slide every 7 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div
            className="relative w-full h-[60vh] overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Slide Content */}
            <AnimatePresence>
                {slides.map((slide, index) =>

                    index === currentIndex ? (
                        <section key={index} className={`${slide.bg} w-full h-full`}>
                            <motion.div
                                key={slide.id}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={{
                                    hidden: { opacity: 0, y: 100 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1, // Smooth duration for entry
                                            ease: [0.25, 1, 0.5, 1], // Smooth easing
                                            staggerChildren: 0.2, // Adds stagger effect
                                            delayChildren: 0.2, // Delays child animations slightly
                                        },
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -100,
                                        transition: {
                                            duration: 1,
                                            ease: [0.25, 1, 0.5, 1],
                                        },
                                    },
                                }}
                                className={`absolute inset-0 flex items-center justify-between container mx-auto  bg-cover bg-no-repeat `}

                            >
                                <motion.div
                                    className="text-left text-neutral max-w-md space-y-4"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                                    }}
                                >
                                    <motion.p className="text-lg">{slide.subtitle}</motion.p>
                                    <motion.h2 className="text-4xl font-bold leading-tight my-4">
                                        {slide.title}
                                    </motion.h2>
                                    <motion.p className="text-xl mb-6">{slide.offer}</motion.p>
                                    <motion.button
                                        className="bg-neutral text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                                    >
                                        {slide.button}
                                    </motion.button>

                                </motion.div>
                                <motion.div className="w-1/2 flex justify-center"
                                    variants={{
                                        hidden: { opacity: 0, x: 100 },
                                        visible: {
                                            opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" }
                                        },
                                    }}
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="h-[350px] object-contain"
                                    />
                                </motion.div>
                            </motion.div>
                        </section>
                    ) : null

                )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <AnimatePresence>
                {isHovered && (
                    <>
                        {/* Previous Button */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </motion.button>

                        {/* Next Button */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-700" />
                        </motion.button>
                    </>
                )}
            </AnimatePresence>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div >
    );
};

export default Banner;
