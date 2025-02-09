"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, LayoutDashboard, MoveRight } from "lucide-react";
import Container from "@/components/custom/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGetCategoriesQuery } from "@/redux/api/categoryApi";
import Image from "next/image";

export default function Category({ toggleMenu }) {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedCategory, setExpandedCategory] = useState(null);
    const popupRef = useRef(null);
    const buttonRef = useRef(null);

    const { data: categories, isLoading } = useGetCategoriesQuery(undefined, {
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    const toggleCategory = (index) => {
        setExpandedCategory((prev) => (prev === index ? null : index));
    };

    return (
        <section className="px-0 md:container">
            <div className="flex items-center justify-between w-full">
                <button
                    ref={buttonRef}
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center bg-indigo-400 text-white justify-between w-full px-4 py-3 hover:bg-blue-800 transition"
                >
                    <span className="flex">
                        <LayoutDashboard className="mr-4" />
                        All Categories
                    </span>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="ml-2"
                    >
                        <ChevronDown />
                    </motion.div>
                </button>
            </div>

            <div className="relative">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            ref={popupRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-full overflow-hidden bg-white dark:bg-gray-700 shadow-lg border border-gray-200 dark:border-gray-600 z-50"
                        >
                            <ul>
                                {categories.map((category, index) => (
                                    <span key={index} >
                                        {
                                            category.subCategories ? <li className="border-b  dark:border-gray-600">
                                                <button
                                                    onClick={() => toggleCategory(index)}
                                                    className={`flex items-center justify-between w-full px-4 py-4 hover:bg-blue-100 dark:hover:bg-gray-600 rounded text-gray-800 dark:text-gray-200 ${expandedCategory === index && 'dark:bg-gray-600 bg-blue-100 '}`}
                                                >
                                                    <span className="flex gap-2">

                                                        <Image src={category?.icon} width={30} height={30} alt={category?.name} />
                                                        <span className="ml-2">{category.name}</span>
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
                                                            <ul className=" py-3 space-y-2">
                                                                {category?.subCategories?.map((sub, subIndex) => (
                                                                    <li key={subIndex} className=" px-10 py-2 gap-5 text-gray-600 dark:text-gray-300 border-b last:border-b-0 dark:border-gray-600">
                                                                        <Link href={`/categories/${sub.name}`} onClick={toggleMenu} className="flex items-center  justify-between">
                                                                            <span className="flex gap-4">


                                                                                <Image src={sub?.icon} width={30} height={30} alt={sub?.name} />

                                                                                <p>{sub.name}</p>
                                                                            </span>
                                                                            <MoveRight />
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </li> : <Link href={`/categories/${category.name}`} onClick={toggleMenu} className="flex items-center justify-between w-full px-4 py-3 hover:bg-blue-100 dark:hover:bg-gray-600 rounded text-gray-800 dark:text-gray-200 border-b  dark:border-gray-600 cursor-pointer">
                                                <span className="flex gap-2">
                                                    <Image src={category?.icon} width={30} height={30} alt={category?.name} />
                                                    <span className="ml-2">{category?.name}</span>
                                                </span>
                                            </Link>
                                        }
                                    </span>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
