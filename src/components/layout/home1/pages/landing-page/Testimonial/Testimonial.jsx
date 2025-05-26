// "use client"
// import Container from '@/components/custom/Container';
// import React from 'react'
// import { motion } from "framer-motion";
// export default function Testimonial() {
//     const divs = []
//     for (let index = 0; index < 5; index++) {
//         divs.push(index)


//     }
//     return (
//         <Container className='overflow-hidden grid grid-rows-1 grid-flow-col gap-4' >
//             {
//                 [...divs, ...divs].map((item, inx) => (
//                     <motion.div key={inx} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 1 }} className='flex gap-3' >
//                         <div className='w-80 h-80 bg-black'></div>
//                     </motion.div >
//                 ))
//             }
//         </Container >
//     )
// }

// "use client";
// import Container from "@/components/custom/Container";
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export default function Testimonial() {
//     const divs = Array.from({ length: 5 }, (_, i) => i);

//     return (
//         <Container className="slider w-full h-[var(--height)]" style="
//         --width:100px;
//         --height:50px;
//         --quantity:divs.length
//         ">
//             <div className="list flex w-full min-w:calc(var(--width)*var(--quantity)) relative">
//                 {
//                     divs.map((item) => (
//                         <div key={item} className="item w-[var(--width)] h-[var(--height)] absolute left-full">
//                             <img src="/p.jpg" alt="" className="w-full" />
//                         </div>
//                     ))
//                 }
//             </div>
//         </Container>
//     );
// }

// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export default function Testimonial() {
//     const images = Array.from({ length: 5 }, (_, i) => `/p.jpg`);
//     const [isPlaying, setIsPlaying] = useState(true);

//     return (
//         <div className="relative w-full overflow-hidden bg-gray-200 p-4">
//             {/* Infinite Scrolling Wrapper */}
//             <motion.div
//                 className="flex flex-nowrap whitespace-nowrap w-max"
//                 animate={isPlaying ? { x: ["0%", "-100%"] } : { x: "0%" }}
//                 transition={{
//                     repeat: isPlaying ? Infinity : 0,
//                     duration: 10,
//                     ease: "linear",
//                 }}
//                 onMouseEnter={() => setIsPlaying(false)} // Pause on hover
//                 onMouseLeave={() => setIsPlaying(true)} // Resume scrolling
//             >
//                 {/* Duplicate items for seamless loop */}
//                 {[...images, ...images].map((src, index) => (
//                     <div
//                         key={index}
//                         className="w-32 h-20 flex-shrink-0 min-w-0 bg-white rounded-lg shadow-md flex items-center justify-center"
//                     >
//                         <img src={src} alt="img" className="w-full h-full object-cover rounded-lg" />
//                     </div>
//                 ))}
//             </motion.div>

//             {/* Play/Pause Button */}
//             <button
//                 onClick={() => setIsPlaying(!isPlaying)}
//                 className="absolute bottom-2 right-2 bg-black text-white px-4 py-2 rounded-md"
//             >
//                 {isPlaying ? "Pause" : "Play"}
//             </button>
//         </div>
//     );
// }

// "use client";
// import Container from "@/components/custom/Container";
// import { motion, useAnimation } from "framer-motion";
// import { Star } from "lucide-react";
// import { useRef, useState, useEffect } from "react";

// export default function Testimonial() {
//     const products = Array.from({ length: 5 }, (_, i) => i);
//     const carouselRef = useRef(null);
//     const [isHovered, setIsHovered] = useState(false);
//     const controls = useAnimation(); // Framer Motion control

//     useEffect(() => {
//         if (isHovered) {
//             controls.stop(); // Pause animation on hover
//         } else {
//             controls.start({ x: ["0%", "-100%"] }); // Resume animation
//         }
//     }, [isHovered, controls]);

//     return (
//         <Container className="">
//             <div className="relative w-full mx-auto mt-10 overflow-hidden">
//                 <div className="relative overflow-hidden py-5">
//                     <motion.div
//                         ref={carouselRef}
//                         className="flex gap-4 cursor-grab"
//                         initial={{ x: 0 }}
//                         animate={controls} // Controlled animation
//                         transition={{ ease: "linear", repeat: Infinity, duration: 10 }} // Smooth scrolling
//                         drag="x"
//                         dragConstraints={{ left: -500, right: 0 }}
//                         whileTap={{ cursor: "grabbing" }}
//                         onMouseEnter={() => setIsHovered(true)}
//                         onMouseLeave={() => setIsHovered(false)}
//                     >
//                         {[...products, ...products].map((product, index) => (
//                             <motion.div
//                                 key={index}
//                                 className="z-20 flex flex-col relative md:w-full w-20 md:h-auto h-20 bg-card shadow-md rounded-lg p-4 md:min-w-80 min-w-20 overflow-hidden"
//                             >
//                                 <blockquote className="rounded-lg bg-gray-50 p-6 shadow-xs sm:p-8">
//                                     <div className="flex items-center gap-4">
//                                         <img
//                                             alt=""
//                                             src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
//                                             className="size-14 rounded-full object-cover"
//                                         />

//                                         <div>

//                                             <p className="text-lg font-medium text-gray-900">Paul Starr</p>
//                                         </div>
//                                     </div>

//                                     <p className="mt-4 text-gray-700">
//                                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
//                                         consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
//                                         error officiis atque voluptates magnam!
//                                     </p>
//                                 </blockquote>
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 </div>
//             </div>
//         </Container>
//     );
// }


"use client";
import Container from "@/components/custom/Container";
import { motion, useAnimation } from "framer-motion";
import { UserCircle } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Testimonial() {
    const products = Array.from({ length: 5 }, (_, i) => i);
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) {
            controls.stop();
        } else {
            controls.start({
                x: ["0%", "-100%"],
                transition: { ease: "linear", repeat: Infinity, duration: 15 },
            });
        }
    }, [isHovered, controls]);

    return (
        <Container>
            <div className="relative w-full mx-auto mt-10 overflow-hidden">
                <h2 className="text-2xl sm:text-4xl font-semibold my-2 text-blue-600">Your Words, Our Pride !!</h2>
                <div className="relative overflow-hidden py-5">
                    <motion.div
                        className="flex gap-6 cursor-grab"
                        animate={controls}
                        drag="x"
                        dragConstraints={{ left: -500, right: 0 }}
                        whileTap={{ cursor: "grabbing" }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {[...products, ...products].map((_, index) => (
                            <motion.div
                                key={index}
                                className="z-20 flex flex-col relative w-80 h-auto bg-white shadow-lg rounded-lg p-2 min-w-[320px] overflow-hidden"
                            >
                                <blockquote className="rounded-lg  p-6">
                                    <div className="flex items-center gap-4">
                                        <UserCircle />
                                        <div>
                                            <p className="text-lg font-medium text-gray-900">Customer</p>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-gray-700">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt,
                                        a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam.
                                    </p>
                                </blockquote>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Container>
    );
}


