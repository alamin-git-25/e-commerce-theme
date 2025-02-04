"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../custom/Container";

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
            images: [
                "https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png",
                "https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png",
                "https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png",
                "https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png",
                "https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png"
            ]
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
            images: [
                "https://res.cloudinary.com/demo/image/upload/v1611848997/bananas_1.png",
                "https://res.cloudinary.com/demo/image/upload/v1611848997/bananas_2.png"
            ]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [products.length]);

    return (
        <Container className="grid  grid-cols-3 gap-3 my-10">
            <div className="col-span-2 h-[60vh]  relative rounded-xl w-full bg-black">
                <AnimatePresence>
                    {products.map((product, index) => (
                        index === currentIndex && (
                            <motion.section
                                key={product.id}
                                className="absolute inset-0 grid grid-cols-1 md:grid-cols-[0.9fr_1fr] w-full bg-white p-10  rounded-lg shadow-lg"
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
                            >
                                {/* Product Photo Section */}
                                <div className="product__photo relative">
                                    <div className="photo-container absolute left-[-2.5em] grid grid-rows-1 w-full h-full rounded-t-lg shadow-lg">
                                        <div className="photo-main rounded-t-lg bg-gradient-to-r from-[#96e001] to-[#9be010]">
                                            <div className="controls flex justify-between p-3 text-white">
                                                <i className="material-icons cursor-pointer">share</i>
                                                <i className="material-icons cursor-pointer">favorite_border</i>
                                            </div>
                                            <motion.img
                                                key={product.images[0]}
                                                src={product.images[0]}
                                                alt={product.name}
                                                className="absolute left-[-3.5em] top-[2em] max-w-[500px] filter saturate-150 contrast-120 hue-rotate-10 drop-shadow-lg"
                                                variants={{
                                                    hidden: { opacity: 0, y: 20 },
                                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Product Info Section */}
                                <div className="product__info p-6">
                                    <h1 className="text-gray-800 font-extrabold text-2xl mb-1">{product.name}</h1>
                                    <span className="text-gray-500 text-sm">COD: {product.code}</span>
                                    <div className="price my-6 text-red-500 text-xl">
                                        ${" "}
                                        <motion.span className="text-4xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}>
                                            {product.price}
                                        </motion.span>
                                    </div>
                                    <ul className="list-disc pl-5 text-sm">
                                        {product.description.map((benefit, index) => (
                                            <motion.li key={index} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.3 }}>
                                                {benefit}
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <motion.button
                                        className="buy--btn bg-red-500 text-white sticky mt-10 font-semibold text-lg py-3 px-7 rounded-lg shadow-lg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ duration: 0.5, delay: index * 0.3 }}
                                        whileHover={{ scale: 1.05 }}  // Optional, if you want a hover effect too
                                    >
                                        ADD TO CART
                                    </motion.button>
                                </div>
                            </motion.section>
                        )
                    ))}
                </AnimatePresence>
            </div>

            {/* Special Offer Sections */}
            <motion.div className="grid grid-rows-2 gap-3 h-[60vh]">
                <motion.div
                    className="w-full rounded-xl bg-black"
                    initial={{ x: 100, opacity: 0 }}

                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                />
                <motion.div
                    className="w-full rounded-xl bg-black"
                    initial={{ x: 100, opacity: 0 }}

                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />
            </motion.div>
        </Container>
    );
}
