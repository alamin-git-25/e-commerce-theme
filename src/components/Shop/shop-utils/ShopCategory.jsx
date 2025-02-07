"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Box, Camera, ChevronRight, Cpu, Gift, Globe, Headphones, LayoutGrid, Smartphone, Tv, Utensils } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
export default function ShopCategory() {
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [categories, setCategories] = useState([]);
    const popupRef = useRef(null);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const res = await fetch("/api/category");
                const data = await res.json();
                setCategories(data);
            } catch (error) {
                console.error("Failed to fetch categories", error);
            }
        }
        fetchCategories();
    }, []);

    const toggleCategory = (index) => {
        setExpandedCategory((prev) => (prev === index ? null : index));
    };

    return (
        <div
            className=" w-full mt-5 shadow-sm rounded overflow-hidden bg-white dark:bg-gray-700  border border-gray-200 dark:border-gray-600 z-50"
        >
            <h2 className="text-lg font-semibold mb-3 px-4 py-2">Categories</h2>
            <Link href='/shop' className="border-t flex items-center gap-4 w-full px-4 py-3 hover:bg-blue-100 dark:hover:bg-gray-600 rounded text-gray-800 dark:text-gray-200"><LayoutGrid /> All Categories</Link>
            <motion.div
                ref={popupRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className=" w-full overflow-hidden bg-white dark:bg-gray-700 shadow-lg border border-gray-200 dark:border-gray-600 z-50"
            >
                <ul>
                    {categories?.map((category, index) => (
                        category.subCategories ? <li key={index} className="border-b last:border-b-0 dark:border-gray-600">
                            <button
                                onClick={() => toggleCategory(index)}
                                className="flex items-center justify-between w-full px-4 py-3 hover:bg-blue-100 dark:hover:bg-gray-600 rounded text-gray-800 dark:text-gray-200"
                            >
                                <span className="flex gap-2">
                                    {category.icon}
                                    <span className="ml-2">{category?.name}</span>
                                </span>
                                <motion.div
                                    animate={{ rotate: expandedCategory === index ? 90 : 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="mr-2"
                                >
                                    <ChevronRight />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {expandedCategory === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeInOut",
                                            delay: 0.05
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <ul className="pl-10 py-3 space-y-2">
                                            {category?.subCategories?.map((sub, subIndex) => (
                                                <li key={subIndex} className="flex items-center gap-5 text-gray-600 dark:text-gray-300">
                                                    {sub?.icon}
                                                    <Link href={`/categories/${sub?.name}`}>{sub?.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li> : <Link href={`/categories/${category.name}`} className="flex items-center justify-between w-full px-4 py-3 hover:bg-blue-100 dark:hover:bg-gray-600 rounded text-gray-800 dark:text-gray-200 border-b  dark:border-gray-600 cursor-pointer">
                            <span className="flex gap-2">
                                {category.icon}
                                <span className="ml-2">{category.name}</span>
                            </span>
                        </Link>
                    ))}
                </ul>
            </motion.div>
        </div>
    )
}
