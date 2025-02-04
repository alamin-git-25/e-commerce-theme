"use client";
import React from "react";
import Container from "../custom/Container";
import { SectionHeader } from "../custom/Heading";
import { Button } from "../ui/button";
import { EyeIcon, ShoppingCartIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { motion } from "framer-motion";
import Offer from "./Offer";

export default function Tranding() {
    const products = [
        { id: 1, name: "Wireless Bluetooth Headphones", price: 59.99, category: "Featured", image: "/p.jpg", rating: 4.5 },
        { id: 2, name: "Smartwatch Series 6", price: 249.99, category: "Trending", image: "/p.jpg", rating: 4.7 },
        { id: 3, name: "4K Ultra HD Smart TV", price: 799.99, category: "Top rated", image: "/p.jpg", rating: 4.9 },
        { id: 4, name: "Portable Bluetooth Speaker", price: 29.99, category: "On sale", image: "/p.jpg", rating: 4.3 },
        { id: 5, name: "Gaming Laptop", price: 1299.99, category: "Featured", image: "/p.jpg", rating: 4.8 },
        { id: 6, name: "Noise Cancelling Earbuds", price: 99.99, category: "On sale", image: "/p.jpg", rating: 4.6 },
        { id: 7, name: "Digital SLR Camera", price: 499.99, category: "Trending", image: "/p.jpg", rating: 4.4 },
        { id: 8, name: "Smart Home Assistant", price: 89.99, category: "Top rated", image: "/p.jpg", rating: 4.7 },
    ];

    const tabs = ["All", "Featured", "On sale", "Trending", "Top rated"];

    const handleTabChange = (tab) => {
        console.log(`Selected Tab: ${tab}`);
    };

    // Parent animation: Controls the stagger effect
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Each child animates with a 0.2s delay
            },
        },
    };

    // Child animation: Controls individual cards
    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 20,
            },
        },
    };

    return (
        <Container>
            <SectionHeader title="Trending Products" tabs={tabs} onTabChange={handleTabChange} />

            {/* Parent motion.section with stagger effect */}
            <motion.section
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"

            >
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        variants={cardVariants}
                        className="group relative w-full h-[480px] bg-primary-foreground border rounded-xl overflow-hidden"
                    >
                        <div className="relative w-full flex justify-center items-center pt-5 z-10">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-[300px] w-auto transition-transform duration-500 group-hover:scale-90"
                            />
                        </div>
                        <div className="relative p-5 flex flex-col items-center text-center z-20">
                            <h3 className="text-lg text-primary font-medium uppercase tracking-wider">
                                {product.name.substring(0, 20)}
                            </h3>
                            <h2 className="text-2xl text-primary font-bold tracking-wide">{product.price} $</h2>
                            <div className="opacity-0 space-x-4 mt-5 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="primary" className="relative border py-2 px-8 bg-white text-black font-bold uppercase tracking-wider rounded">
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
                                            <Button title="Add To Cart" variant="primary" className="relative border py-2 px-8 bg-white text-black font-bold uppercase tracking-wider rounded">
                                                <ShoppingCartIcon />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Add to Cart</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.section>
            <Offer />
        </Container>
    );
}
