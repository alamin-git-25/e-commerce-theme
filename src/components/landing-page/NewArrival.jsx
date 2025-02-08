// "use client"
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, ShoppingCart, Heart, RefreshCcw } from 'lucide-react';
// import Container from '../custom/Container';
// import { SectionHeader } from '../custom/Heading';
// import ProductCard from '../custom/card/ProductCard';

// const products = [
//     { id: 1, name: "Wireless Bluetooth Headphones", price: 59.99, category: "Featured", image: "/p.jpg", rating: 4.5 },
//     { id: 2, name: "Smartwatch Series 6", price: 249.99, category: "Trending", image: "/p.jpg", rating: 4.7 },
//     { id: 3, name: "4K Ultra HD Smart TV", price: 799.99, category: "Top rated", image: "/p.jpg", rating: 4.9 },
//     { id: 4, name: "Portable Bluetooth Speaker", price: 29.99, category: "On sale", image: "/p.jpg", rating: 4.3 },
//     { id: 5, name: "Gaming Laptop", price: 1299.99, category: "Featured", image: "/p.jpg", rating: 4.8 },
//     { id: 6, name: "Noise Cancelling Earbuds", price: 99.99, category: "On sale", image: "/p.jpg", rating: 4.6 },
//     { id: 7, name: "Digital SLR Camera", price: 499.99, category: "Trending", image: "/p.jpg", rating: 4.4 },
//     { id: 8, name: "Smart Home Assistant", price: 89.99, category: "Top rated", image: "/p.jpg", rating: 4.7 },
// ];

// export default function NewArrival() {
//     const [current, setCurrent] = useState(0);
//     const [direction, setDirection] = useState(0);

//     const next = () => {
//         setDirection(1);
//         setCurrent((prev) => (prev + 1) % products.length);
//     };

//     const prev = () => {
//         setDirection(-1);
//         setCurrent((prev) => (prev - 1 + products.length) % products.length);
//     };

//     const visibleProducts = products.slice(current, current + 4);
//     if (visibleProducts.length < 4) {
//         visibleProducts.push(...products.slice(0, 4 - visibleProducts.length));
//     }

//     const variants = {
//         enter: (direction) => ({
//             x: direction > 0 ? 300 : -300,
//             opacity: 0,
//         }),
//         center: {
//             x: 0,
//             opacity: 1,
//         },
//         exit: (direction) => ({
//             x: direction < 0 ? 300 : -300,
//             opacity: 0,
//         }),
//     };

//     return (
//         <Container className="md:grid hidden">
//             <SectionHeader title="New Arrival" onNext={next} onPrev={prev} />
//             <div className=" overflow-hidden">
//                 <div className="flex items-center gap-4 mt-4">
//                     <div className="md:grid  md:grid-cols-4 gap-4 w-full overflow-hidden">
//                         <AnimatePresence initial={false} custom={direction} mode="popLayout">
//                             {visibleProducts.map((product) => (
//                                 <motion.div
//                                     key={product.id}
//                                     className=""
//                                     custom={direction}
//                                     variants={variants}
//                                     initial="enter"
//                                     animate="center"
//                                     exit="exit"
//                                     transition={{ duration: 0.5 }}
//                                 >
//                                     <ProductCard product={product} />
//                                 </motion.div>
//                             ))}
//                         </AnimatePresence>
//                     </div>

//                 </div>
//             </div>
//         </Container>
//     );
// }
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

import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import Container from "@/components/custom/Container";
import { SectionHeader } from "@/components/custom/Heading";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import { addToCart } from "@/redux/cartSlice";
import Link from "next/link";


const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 59.99,
        image: "/p.jpg",
        category: "Electronics",
        description: "High-quality wireless headphones with noise cancellation.",
        stock: 25,
        rating: 4.5,
    },
    {
        id: 2,
        name: "Smartphone",
        price: 699.99,
        image: "/p.jpg",
        category: "Electronics",
        description: "Latest model smartphone with 128GB storage and OLED display.",
        stock: 10,
        rating: 4.7,
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 89.99,
        image: "/p.jpg",
        category: "Fashion",
        description: "Lightweight and comfortable running shoes for daily workouts.",
        stock: 30,
        rating: 4.3,
    },
    {
        id: 4,
        name: "Gaming Laptop",
        price: 1299.99,
        image: "/p.jpg",
        category: "Computers",
        description: "Powerful gaming laptop with RTX 4060 and 16GB RAM.",
        stock: 5,
        rating: 4.8,
    },
    {
        id: 5,
        name: "Mechanical Keyboard",
        price: 129.99,
        image: "/p.jpg",
        category: "Accessories",
        description: "RGB mechanical keyboard with custom key switches.",
        stock: 20,
        rating: 4.6,
    },
    {
        id: 6,
        name: "Coffee Maker",
        price: 49.99,
        image: "/p.jpg",
        category: "Home Appliances",
        description: "Brew fresh coffee quickly with this easy-to-use coffee maker.",
        stock: 15,
        rating: 4.2,
    }
];



export function NewArrival() {
    const [page, setPage] = useState(1);
    const limit = 12;

    // Fetch product data
    const { data, isLoading, isFetching } = useGetAllProductsQuery(
        { page, limit },
        { refetchOnFocus: true, refetchOnMountOrArgChange: true }
    );

    const products = useMemo(() => data?.data || [], [data]);
    const [index, setIndex] = useState(0);
    const visibleCards = 4;
    const handleNext = () => {
        setIndex((prev) => (prev + 1) % products.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + products.length) % products.length);
    };
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {

        dispatch(addToCart({
            productId: product?.product_id,
            quantity: 1,
            color: "#fff",
            size: 'Cv',
            name: product?.name,
            image: product?.images?.[0],
            price: product?.price,
        }));
        toast.success(`${product?.name}  added to cart!`);
    };
    const carouselRef = useRef(null);
    const maxStars = 5;
    return (
        <Container className="md:block hidden">
            <div className="relative w-full  mx-auto mt-10 overflow-hidden">

                <SectionHeader title="New Arrival" onNext={handleNext} onPrev={handlePrev} />

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
                        {[...products, ...products].map((product, index) => (
                            <motion.div
                                key={index}
                                className="z-20 flex flex-col   md:w-full w-20 md:h-full h-20 bg-card shadow-md rounded-lg p-4 md:min-w-80 min-w-20"

                            >
                                <Image src={product?.images[0]} width={300} height={300} alt="d" className="text-4xl mb-2 z-10" />
                                <div className="text-yellow-500">
                                    {Array.from({ length: maxStars }, (_, index) => (
                                        <span key={index}>
                                            {index < Math.floor(product.rating) ? '★' : '☆'}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold  md:block hidden">{product.name}</h3>
                                <h3 className="text-sm font-semibold  md:block hidden">${product.price}</h3>
                                <div className="flex justify-between w-full gap-2 mt-2">
                                    <Button className="w-full "><Link href={`/details/${product.product_id}`}>View Details</Link></Button>
                                    <Button onClick={() => handleAddToCart(product)} variant="secondary" className="w-full ">Add To Cart</Button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Container>
    );
}

