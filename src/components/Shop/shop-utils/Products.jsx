
// "use client";
// import React, { useEffect, useState } from 'react';
// import { motion } from "framer-motion";
// import Container from '@/components/custom/Container';
// import { EyeIcon, Grid, List, ShoppingCartIcon } from 'lucide-react';
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
// import { Button } from '@/components/ui/button';
// import Pagination from '@/components/custom/Pagination';

// export default function Products({ isGridView, setIsGridView }) {


//     const products = [
//         { id: 1, name: "Wireless Bluetooth Headphones", price: 59.99, category: "Featured", image: "/p.jpg", rating: 4.5 },
//         { id: 2, name: "Smartwatch Series 6", price: 249.99, category: "Trending", image: "/p.jpg", rating: 4.7 },
//         { id: 3, name: "4K Ultra HD Smart TV", price: 799.99, category: "Top rated", image: "/p.jpg", rating: 4.9 },
//         { id: 4, name: "Portable Bluetooth Speaker", price: 29.99, category: "On sale", image: "/p.jpg", rating: 4.3 },
//         { id: 5, name: "Gaming Laptop", price: 1299.99, category: "Featured", image: "/p.jpg", rating: 4.8 },
//         { id: 6, name: "Noise Cancelling Earbuds", price: 99.99, category: "On sale", image: "/p.jpg", rating: 4.6 },
//         { id: 7, name: "Digital SLR Camera", price: 499.99, category: "Trending", image: "/p.jpg", rating: 4.4 },
//         { id: 8, name: "Smart Home Assistant", price: 89.99, category: "Top rated", image: "/p.jpg", rating: 4.7 },
//     ];

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.15,
//                 ease: "easeInOut",
//                 duration: 0.8,
//             },
//         },
//     };

//     const cardVariants = {
//         hidden: { y: 0, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 type: "spring",
//                 stiffness: 80,
//                 damping: 25,
//                 ease: "easeInOut",
//             },
//         },
//     };
//     const [currentPage, setCurrentPage] = useState(1);
//     const productsPerPage = 6;

//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//     // Reset to first page if products length changes (optional)
//     useEffect(() => {
//         if (currentPage > Math.ceil(products.length / productsPerPage)) {
//             setCurrentPage(1);
//         }
//     }, [products.length]);
//     return (
//         <Container className="mt-5 pb-10">


//             <motion.section
//                 className={`grid ${isGridView
//                     ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//                     : "grid-cols-1 gap-4"
//                     }`}
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"

//             >
//                 {currentProducts.map((product) => (
//                     <motion.div
//                         key={product.id}
//                         variants={cardVariants}
//                         className={`group p-4 border rounded shadow transition-transform duration-500 hover:scale-105 ${isGridView ? "h-auto" : "flex items-center space-x-4"}`}
//                     >
//                         <img
//                             src={product.image}
//                             alt={product.name}
//                             className={`${isGridView ? "w-full h-40 object-cover rounded" : "w-24 h-24 object-cover rounded"}`}
//                         />

//                         <div className={`${isGridView ? "mt-2" : "ml-4 flex-1"}`}>
//                             <h2 className="text-lg font-semibold">{product.name}</h2>
//                             <p className="text-gray-500">${product.price}</p>
//                         </div>

//                         <div
//                             className={`opacity-0 mt-5 space-x-4 transition-opacity duration-300 group-hover:opacity-100 ${isGridView ? "flex justify-center" : "ml-auto"}`}
//                         >
//                             <TooltipProvider>
//                                 <Tooltip>
//                                     <TooltipTrigger asChild>
//                                         <Button variant="primary" className="border py-2 px-4 bg-white text-black font-bold rounded">
//                                             <EyeIcon />
//                                         </Button>
//                                     </TooltipTrigger>
//                                     <TooltipContent>
//                                         <p>Quick View</p>
//                                     </TooltipContent>
//                                 </Tooltip>
//                             </TooltipProvider>

//                             <TooltipProvider>
//                                 <Tooltip>
//                                     <TooltipTrigger asChild>
//                                         <Button variant="primary" className="border py-2 px-4 bg-white text-black font-bold rounded">
//                                             <ShoppingCartIcon />
//                                         </Button>
//                                     </TooltipTrigger>
//                                     <TooltipContent>
//                                         <p>Add to Cart</p>
//                                     </TooltipContent>
//                                 </Tooltip>
//                             </TooltipProvider>
//                         </div>
//                     </motion.div>
//                 ))}
//             </motion.section>
//             <div className="flex justify-center mt-4">
//                 <Pagination
//                     currentPage={currentPage}
//                     totalPages={Math.ceil(products.length / productsPerPage)}
//                     onPageChange={setCurrentPage}
//                 />
//             </div>
//         </Container>
//     );
// }
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Container from '@/components/custom/Container';
import { EyeIcon, ShoppingCartIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import Pagination from '@/components/custom/Pagination';

export default function Products({ isGridView, setIsGridView }) {
    const products = [
        { id: 1, name: "Wireless Bluetooth Headphones", price: 59.99, image: "/p.jpg" },
        { id: 2, name: "Smartwatch Series 6", price: 249.99, image: "/p.jpg" },
        { id: 3, name: "4K Ultra HD Smart TV", price: 799.99, image: "/p.jpg" },
        { id: 4, name: "Portable Bluetooth Speaker", price: 29.99, image: "/p.jpg" },
        { id: 5, name: "Gaming Laptop", price: 1299.99, image: "/p.jpg" },
        { id: 6, name: "Noise Cancelling Earbuds", price: 99.99, image: "/p.jpg" },
        { id: 7, name: "Digital SLR Camera", price: 499.99, image: "/p.jpg" },
        { id: 8, name: "Smart Home Assistant", price: 89.99, image: "/p.jpg" },
        { id: 9, name: "Wireless Mouse", price: 19.99, image: "/p.jpg" },
        { id: 10, name: "Bluetooth Keyboard", price: 39.99, image: "/p.jpg" },
        { id: 11, name: "Smart LED Light Bulb", price: 15.99, image: "/p.jpg" },
        { id: 12, name: "Fitness Tracker", price: 59.99, image: "/p.jpg" },
        { id: 13, name: "USB-C Power Bank", price: 39.99, image: "/p.jpg" },
        { id: 14, name: "Cordless Handheld Vacuum", price: 89.99, image: "/p.jpg" },
        { id: 15, name: "4K Action Camera", price: 199.99, image: "/p.jpg" },
        { id: 16, name: "Smart Light Strip", price: 29.99, image: "/p.jpg" },
        { id: 17, name: "Portable Charger", price: 49.99, image: "/p.jpg" },
        { id: 18, name: "Electric Kettle", price: 29.99, image: "/p.jpg" },
        { id: 19, name: "Robot Vacuum Cleaner", price: 229.99, image: "/p.jpg" },
        { id: 20, name: "LED Desk Lamp", price: 24.99, image: "/p.jpg" },
        { id: 21, name: "Smartphone Case", price: 12.99, image: "/p.jpg" },
        { id: 22, name: "Portable Air Conditioner", price: 159.99, image: "/p.jpg" },
        { id: 23, name: "Electric Toothbrush", price: 79.99, image: "/p.jpg" },
        { id: 24, name: "Bluetooth Earphones", price: 34.99, image: "/p.jpg" },
        { id: 25, name: "Noise Cancelling Headphones", price: 199.99, image: "/p.jpg" },
        { id: 26, name: "Smartphone Stand", price: 18.99, image: "/p.jpg" },
        { id: 27, name: "External Hard Drive", price: 59.99, image: "/p.jpg" },
        { id: 28, name: "Smart Thermostat", price: 129.99, image: "/p.jpg" },
        { id: 29, name: "Wireless Charging Pad", price: 24.99, image: "/p.jpg" },
        { id: 30, name: "Smart Doorbell", price: 149.99, image: "/p.jpg" },
        { id: 31, name: "Car Dash Cam", price: 89.99, image: "/p.jpg" },
        { id: 32, name: "Electric Grill", price: 99.99, image: "/p.jpg" },
        { id: 33, name: "Coffee Maker", price: 59.99, image: "/p.jpg" },
        { id: 34, name: "Smartphone Gimbal", price: 119.99, image: "/p.jpg" },
        { id: 35, name: "Smart Plug", price: 22.99, image: "/p.jpg" },
        { id: 36, name: "Home Security Camera", price: 179.99, image: "/p.jpg" },
    ];


    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);


    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    return (
        <Container className="mt-5 pb-10">
            <AnimatePresence mode="wait">
                <motion.section
                    key={currentPage} // Trigger animation on page change
                    className={`grid ${isGridView ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "grid-cols-1 gap-4"}`}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={containerVariants}
                >
                    {currentProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            whileHover={{ scale: 1.01 }}
                            className={`group p-4 border rounded shadow transition-transform duration-500 ${isGridView ? "h-auto" : "flex items-center space-x-4"}`}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className={`${isGridView ? "w-full h-40 object-cover rounded" : "w-24 h-24 object-cover rounded"}`}
                            />

                            <div className={`${isGridView ? "mt-2" : "ml-4 flex-1"}`}>
                                <h2 className="text-lg font-semibold">{product.name}</h2>
                                <p className="text-gray-500">${product.price}</p>
                            </div>

                            <div className={`opacity-0 mt-5 space-x-4 transition-opacity duration-300 group-hover:opacity-100 ${isGridView ? "flex justify-center" : "ml-auto"}`}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="primary" className="border py-2 px-4 bg-white text-black rounded">
                                                <EyeIcon />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Quick View</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="primary" className="border py-2 px-4 bg-white text-black rounded">
                                                <ShoppingCartIcon />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Add to Cart</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </motion.div>
                    ))}
                </motion.section>
            </AnimatePresence>

            <div className="flex justify-center mt-4">
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(products.length / productsPerPage)}
                    onPageChange={setCurrentPage}
                />
            </div>
        </Container>
    );
}
