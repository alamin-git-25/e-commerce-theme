// "use client";
// import React from "react";
// import Container from "../custom/Container";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Ads() {
//     const ads = {
//         id: 5,
//         image: "/banner/banner400.png",
//         title: "Next-Gen Graphics Card - Ultimate Performance",
//         subtitle: "Starting at $699.00",
//         offer: "Gaming Week - 10% Off",
//         button: "Shop Now",
//     };

//     return (
//         <Container>
//             <div className="h-[40vh] w-full bg-gradient-to-r from-slate-300 to-slate-400 rounded-xl flex  items-center overflow-hidden shadow-lg p-2">

//                 {/* Image Animation (Appears from Left when in View) */}
//                 <motion.div
//                     initial={{ x: -100, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}

//                     className="w-full flex justify-center"
//                 >
//                     <Image src={ads.image} width={500} height={500} alt={ads.title} className="rounded-lg " />
//                 </motion.div>

//                 {/* Text Animation (Appears from Right when in View) */}
//                 <motion.div
//                     initial={{ x: 100, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//                     className="w-full text-white space-y-4"
//                 >
//                     <motion.p className="text-4xl font-bold">{ads.title}</motion.p>
//                     <motion.p className="text-lg text-white">{ads.subtitle}</motion.p>
//                     <motion.p className="text-sm text-gray-800 font-medium">{ads.offer}</motion.p>

//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="bg-button px-4 py-2 rounded"
//                     >
//                         {ads.button}
//                     </motion.button>
//                 </motion.div>
//             </div>
//         </Container>
//     );
// }

"use client";
import React from "react";
import Container from "../custom/Container";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Ads() {
    const ads = {
        id: 3,
        image: "/banner/banner100.png",
        title: "High-Tech Drone - Aerial Photography Redefined",
        subtitle: "Starting at $1,499.00",
        offer: "Special Launch Offer - 12% Off",
        button: "Shop Now",
    };

    return (
        <Container>
            <div className="h-auto md:h-[40vh] w-full bg-gradient-to-r from-slate-300 to-slate-400 rounded-xl flex flex-col md:flex-row items-center justify-center overflow-hidden shadow-lg p-4 gap-6">

                {/* Image Animation (Comes from Left, then Floats) */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }} // Starts off-screen
                    whileInView={{ x: 0, opacity: 1 }} // Enters smoothly
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <motion.div
                        animate={{ y: [-12, 12] }} // Moves up and down smoothly
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    >
                        <Image
                            src={ads.image}
                            width={500}
                            height={500}
                            alt={ads.title}
                            className="rounded-lg w-[80%] md:w-auto"
                        />
                    </motion.div>
                </motion.div>

                {/* Text Animation (Appears from Right) */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="w-full md:w-1/2 text-white text-center md:text-left space-y-4"
                >
                    <motion.p className="text-2xl md:text-4xl font-bold text-gray-900">{ads.title}</motion.p>
                    <motion.p className="text-lg text-gray-700">{ads.subtitle}</motion.p>
                    <motion.p className="text-sm text-gray-800 font-medium">{ads.offer}</motion.p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-button text-white px-6 py-2 rounded  transition-all"
                    >
                        {ads.button}
                    </motion.button>
                </motion.div>
            </div>
        </Container>
    );
}

