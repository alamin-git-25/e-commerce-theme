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

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Container from "@/components/custom/Container";
// import { SectionHeader } from "@/components/custom/Heading";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { useGetAllProductsQuery } from "@/redux/api/productApi";

// export function RelatedProducts({ category }) {
//     const { data, isLoading, isFetching } = useGetAllProductsQuery({ page: 1, limit: 12 }, {
//         refetchOnFocus: true,
//         refetchOnMountOrArgChange: true
//     })
//     const products = data?.data
//     const [index, setIndex] = useState(0);
//     const visibleCards = 4;
//     const handleNext = () => {
//         setIndex((prev) => (prev + 1) % products.length);
//     };

//     const handlePrev = () => {
//         setIndex((prev) => (prev - 1 + products.length) % products.length);
//     };

//     const carouselRef = useRef(null);
//     const maxStars = 5;


//     return (
//         <Container className="md:block hidden">
//             {isLoading || isFetching && <p>Loading...</p>}
//             <div className="relative w-full  mx-auto mt-10 overflow-hidden">

//                 <SectionHeader title="Related Products" onNext={handleNext} onPrev={handlePrev} />

//                 <div className="relative overflow-hidden py-5">
//                     <motion.div
//                         ref={carouselRef}
//                         className="flex gap-4 cursor-grab"
//                         initial={{ x: 0 }}
//                         animate={{ x: `-${index * (100 / visibleCards)}%` }}
//                         transition={{ type: "spring", stiffness: 100, damping: 15 }}
//                         drag="x"
//                         dragConstraints={{ left: -500, right: 0 }}
//                         whileTap={{ cursor: "grabbing" }}
//                     >
//                         {[...products, ...products]?.map((product, index) => (
//                             <motion.div
//                                 key={index}
//                                 className="z-20 flex flex-col   md:w-full w-80 md:h-full h-20 bg-card shadow-md rounded-lg p-4 md:min-w-80 min-w-20"

//                             >
//                                 <Image src={product.images[0] || '/p.jpg'} width={300} height={300} priority alt="d" className="text-4xl mb-2 z-10" />
//                                 <div className="text-yellow-500">
//                                     {Array.from({ length: maxStars }, (_, index) => (
//                                         <span key={index}>
//                                             {index < Math.floor(product.rating) ? '★' : '☆'}
//                                         </span>
//                                     ))}
//                                 </div>
//                                 <h3 className="text-xl font-semibold  md:block hidden">{product.name}</h3>
//                                 <h3 className="text-sm font-semibold  md:block hidden">${product.price}</h3>
//                                 <div className="flex justify-between w-full gap-2 mt-2">
//                                     <Button variant="outline" className="w-full ">View Details</Button>
//                                     <Button variant="secondary" className="w-full ">Add To Cart</Button>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 </div>
//             </div>
//         </Container>
//     );
// }
"use client"
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Container from "@/components/custom/Container";
import { SectionHeader } from "@/components/custom/Heading";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import LoadingSpinner from "@/components/hooks/Spinner";

export function RelatedProducts({ category }) {
    const { data, isLoading, isFetching } = useGetAllProductsQuery({ page: 1, limit: 12 }, {
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    });
    const products = data?.data?.filter((item) => item?.subCategory === category);

    // Always call hooks at the top level
    const [index, setIndex] = useState(0);
    const visibleCards = 6;

    // Functions to handle the carousel movement
    const handleNext = () => {
        if (products) {
            setIndex((prev) => (prev + 1) % products.length);
        }
    };

    const handlePrev = () => {
        if (products) {
            setIndex((prev) => (prev - 1 + products.length) % products.length);
        }
    };

    const carouselRef = useRef(null);
    const maxStars = 5;

    return (
        <Container className="md:block hidden">
            {isLoading || isFetching ? <LoadingSpinner /> : null}
            <div className="relative w-full mx-auto mt-10 overflow-hidden">
                <SectionHeader title="Related Products" onNext={handleNext} onPrev={handlePrev} />
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
                        {products && products.map((product, idx) => (
                            <motion.div
                                key={product.id || idx}
                                className="z-20 flex flex-col md:w-full w-80 md:h-full h-20 bg-card shadow-md rounded-lg p-4 md:min-w-80 min-w-20"
                            >
                                <Image
                                    src={product.images[0] || '/p.jpg'}
                                    width={300}
                                    height={300}
                                    priority
                                    alt="Product image"
                                    className="text-4xl mb-2 z-10"
                                />
                                <div className="text-yellow-500">
                                    {Array.from({ length: maxStars }, (_, idx) => (
                                        <span key={idx}>
                                            {idx < Math.floor(product.rating) ? '★' : '☆'}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold md:block hidden">{product.name}</h3>
                                <h3 className="text-sm font-semibold md:block hidden">${product.price}</h3>
                                <div className="flex justify-between w-full gap-2 mt-2">
                                    <Button variant="outline" className="w-full ">View Details</Button>
                                    <Button variant="secondary" className="w-full ">Add To Cart</Button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Container>
    );
}

