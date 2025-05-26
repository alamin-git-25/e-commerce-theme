"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
    {
        id: 1,
        image: "/banner/banner200.png",
        title: "UltraFast Laptop - Power Meets Portability",
        subtitle: "Starting at $1,299.00",
        offer: "Limited Deal - Save $200",
        button: "Shop Now",
    },
    {
        id: 2,
        image: "/banner/banner700.png",
        title: "Capture Every Moment - 4K Camera",
        subtitle: "Starting at $799.00",
        offer: "Holiday Sale - 15% Off",
        button: "Shop Now",
    },
    {
        id: 3,
        image: "/banner/banner100.png",
        title: "High-Tech Drone - Aerial Photography Redefined",
        subtitle: "Starting at $1,499.00",
        offer: "Special Launch Offer - 12% Off",
        button: "Shop Now",
    },
    {
        id: 4,
        image: "/banner/banner300.png",
        title: "Smartwatch Pro - Fitness & Connectivity",
        subtitle: "Starting at $299.00",
        offer: "Exclusive - Free Strap Included",
        button: "Shop Now",
    },
    {
        id: 5,
        image: "/banner/banner400.png",
        title: "Next-Gen Graphics Card - Ultimate Performance",
        subtitle: "Starting at $699.00",
        offer: "Gaming Week - 10% Off",
        button: "Shop Now",
    },
    {
        id: 6,
        image: "/banner/banner800.png",
        title: "Wireless Headphones - Pure Sound, No Wires",
        subtitle: "Starting at $199.00",
        offer: "Flash Sale - 20% Off",
        button: "Shop Now",
    },
    {
        id: 7,
        image: "/banner/banner500.png",
        title: "4K Ultra HD Monitor - Crystal Clear Display",
        subtitle: "Starting at $499.00",
        offer: "Cyber Deals - Save $100",
        button: "Shop Now",
    },
    {
        id: 8,
        image: "/banner/banner600.png",
        title: "Pro Gaming Joystick - Ultimate Control",
        subtitle: "Starting at $149.00",
        offer: "Gamer’s Choice - 15% Off",
        button: "Shop Now",
    },
];


const Banner = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext()
        }, 8000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };


    return (
        <div

            className="relative w-full h-[100vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence>
                {slides.map((slide, index) =>
                    index === currentIndex ? (
                        <section key={index} className={`bg-gradient-to-br from-slate-700 to-indigo-400 w-full h-full`}>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                            ease: [0.25, 1, 0.5, 1],
                                            staggerChildren: 0.2,
                                            delayChildren: 0.2,
                                        },
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -10,
                                        transition: {
                                            duration: 1,
                                            ease: [0.25, 1, 0.5, 1],
                                        },
                                    },
                                }}
                                className={`absolute inset-0 flex flex-col md:flex-row items-center justify-between px-10 container mx-auto bg-cover bg-no-repeat`}
                            >
                                <motion.div
                                    className="text-left text-neutral space-y-4 px-4 sm:px-6 md:px-0"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.6, ease: "easeOut" },
                                        },
                                    }}
                                >
                                    <motion.p className="text-base sm:text-lg leading-8">{slide.subtitle}</motion.p>
                                    <motion.h2 className="text-3xl sm:text-6xl leading-relaxed font-bold  my-4">
                                        {slide.title}
                                    </motion.h2>
                                    <motion.p className="text-lg sm:text-xl mb-6">{slide.offer}</motion.p>
                                    <motion.button
                                        className="bg-button text-white px-6 py-2 rounded-lg font-semibold hover:bg-button-foreground transition"
                                    >
                                        {slide.button}
                                    </motion.button>
                                </motion.div>
                                <motion.div
                                    className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0"
                                    variants={{
                                        hidden: { opacity: 0, x: 100 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 0.9, ease: "easeOut" },
                                        },
                                    }}
                                >
                                    <Image
                                        width={1920}
                                        height={1080}
                                        src={slide.image}
                                        alt={slide.title}
                                        className="md:w-[500px] w-full h-auto  object-contain"
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
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
                    />
                ))}
            </div>
        </div>

    );
};

export default Banner;



// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";

// const slides = [
//     { id: 1, image: "/banner/banner200.png", title: "UltraFast Laptop", subtitle: "Starting at $1,299.00", offer: "Save $200", button: "Shop Now" },
//     { id: 2, image: "/banner/banner700.png", title: "4K Camera", subtitle: "Starting at $799.00", offer: "15% Off", button: "Shop Now" },
//     { id: 3, image: "/banner/banner100.png", title: "High-Tech Drone", subtitle: "Starting at $1,499.00", offer: "12% Off", button: "Shop Now" },
// ];

// const Banner = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isHovered, setIsHovered] = useState(false);

//     // Auto-slide effect (pauses when hovered)
//     useEffect(() => {
//         if (isHovered) return; // Pause when hovered
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//         }, 4000); // Auto-slide every 4 seconds

//         return () => clearInterval(interval);
//     }, [currentIndex, isHovered]);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
//     };

//     return (
//         <div
//             className="relative w-full h-[70vh] overflow-hidden"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         >
//             <AnimatePresence>
//                 {slides.map((slide, index) =>
//                     index === currentIndex ? (
//                         <motion.section
//                             key={slide.id}
//                             initial={{ opacity: 0, y: 10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -10 }}
//                             transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
//                             className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-10 bg-gradient-to-br from-slate-700 to-indigo-400"
//                         >
//                             {/* Text Content */}
//                             <motion.div
//                                 className="text-left text-white space-y-4"
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, ease: "easeOut" }}
//                             >
//                                 <p className="text-lg">{slide.subtitle}</p>
//                                 <h2 className="text-3xl font-bold my-4">{slide.title}</h2>
//                                 <p className="text-xl">{slide.offer}</p>
//                                 <button className="mt-4 bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200">
//                                     {slide.button}
//                                 </button>
//                             </motion.div>

//                             {/* Image */}
//                             <motion.div
//                                 className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0"
//                                 initial={{ opacity: 0, x: 100 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.9, ease: "easeOut" }}
//                             >
//                                 <Image width={500} height={300} src={slide.image} alt={slide.title} className="object-contain" />
//                             </motion.div>
//                         </motion.section>
//                     ) : null
//                 )}
//             </AnimatePresence>

//             {/* Navigation Buttons */}
//             <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
//                 <ChevronLeft className="w-6 h-6 text-gray-700" />
//             </button>
//             <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
//                 <ChevronRight className="w-6 h-6 text-gray-700" />
//             </button>

//             {/* Dots Navigation */}
//             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentIndex(index)}
//                         className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Banner;


