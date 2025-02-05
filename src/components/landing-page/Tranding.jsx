"use client";
import React from "react";
import Container from "../custom/Container";
import { SectionHeader } from "../custom/Heading";
import { motion } from "framer-motion";
import Offer from "./Offer";
import ProductCard from "../custom/card/ProductCard";

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };



    return (
        <Container>
            <SectionHeader title="Trending Products" tabs={tabs} onTabChange={handleTabChange} />
            <motion.section
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"

            >
                {products.map((product, idx) => (
                    <ProductCard key={idx} product={product} />
                ))}
            </motion.section>
            <Offer />
        </Container>
    );
}
