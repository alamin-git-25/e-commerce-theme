"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../custom/Container";
import { OfferBanner, OfferCard } from "../custom/card/OfferCard";

export default function Offer() {
    const products = [
        {
            id: 1,
            name: "Delicious Apples",
            code: "45999",
            price: 7.93,
            description: [
                "Apples are nutritious",
                "Apples may be good for weight loss",
                "Apples may be good for bone health",
                "They're linked to the lowest risk of diabetes"
            ],
            image: '/p.jpg'
        },
        {
            id: 2,
            name: "Fresh Bananas",
            code: "12345",
            price: 5.49,
            description: [
                "Rich in potassium",
                "Great for digestion",
                "Boosts energy levels",
                "Supports heart health"
            ],
            image: '/p.jpg'
        },
        {
            id: 3,
            name: "Delicious Apples",
            code: "45999",
            price: 7.93,
            description: [
                "Apples are nutritious",
                "Apples may be good for weight loss",
                "Apples may be good for bone health",
                "They're linked to the lowest risk of diabetes"
            ],
            image: '/p.jpg'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [products.length]);

    return (
        <Container className="grid gap-3 my-10 grid-cols-1 md:grid-cols-3">

            <div className="col-span-1 md:col-span-2 md:h-[60vh] h-full  relative rounded-xl w-full">
                <motion.div
                    className="w-full h-full rounded-xl "
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <OfferBanner title={products[0].name} price={products[0].price} description={products[0].description} image={'/p.jpg'} />
                </motion.div>
            </div>

            <motion.div className="grid grid-rows-2 gap-3 md:h-[60vh] h-full">
                <motion.div
                    className="w-full rounded-xl "
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <OfferCard title={products[0].name} price={products[0].price} description={products[0].description} image={'/p.jpg'} />
                </motion.div>
                <motion.div
                    className="w-full rounded-xl "
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <OfferCard title={products[1].name} price={products[1].price} description={products[1].description} image={'/p.jpg'} />
                </motion.div>
            </motion.div>
        </Container>

    );
}
