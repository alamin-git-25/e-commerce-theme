"use client"

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, Phone, X, Sun, Moon, Box, Cpu, Gift, Camera, Utensils, Globe, Headphones, Smartphone, Tv, ChevronRight, LayoutDashboard, MoveRight } from "lucide-react";
import Container from "@/components/custom/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";



const Navigation = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "Contact", href: "/contact" }
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [showStickyNav, setShowStickyNav] = useState(false);
    const popupRef = useRef(null);
    const buttonRef = useRef(null);

    const [expandedCategory, setExpandedCategory] = useState(null);
    const [categories, setCategories] = useState([]);

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
    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
            setIsOpen(false);
            setExpandedCategory(null)
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);
    useEffect(() => {
        if (isOpen && setShowStickyNav) {
            setIsOpen(false)
        }
    }, [showStickyNav])
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowStickyNav(true);
            } else {
                setShowStickyNav(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);
    const pathName = usePathname()
    return (
        <header className="bg-white dark:bg-gray-800 shadow-md z-50">
            <Container className="flex items-center justify-between h-14 relative">
                <div className="flex items-center w-[30%] justify-between">
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
                <nav className="ml-6 space-x-6 hidden md:flex">
                    {navLinks.map(item => {
                        const isActive = pathName === item.href || pathName.startsWith(item.href) && item.href !== '/'
                        return <Link key={item.name} href={item.href} className={`text-gray-700  pb-1 text-xl dark:text-gray-300 hover:text-blue-700 ${isActive && 'border-b-2 border-gray-600'}`}>
                            {item.name}
                        </Link>
                    })}
                </nav>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <Phone className="text-blue-700" />
                        <span className="text-gray-800 dark:text-gray-200">
                            Hotline: <strong className="text-black dark:text-white">8 800 332 65-66</strong>
                        </span>
                    </div>
                </div>
            </Container>

            <Container className="relative">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            ref={popupRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-[30%] overflow-hidden bg-white dark:bg-gray-700 shadow-lg border border-gray-200 dark:border-gray-600 z-50"
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
                                                        {category.icon}
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
                                                                        <Link href={`/categories/${sub.name}`} onClick={() => setIsOpen(false)} className="flex items-center  justify-between">
                                                                            <span className="flex gap-4">
                                                                                {sub.icon}
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
                                            </li> : <Link href={`/categories/${category.name}`} onClick={() => setIsOpen(false)} className="flex items-center justify-between w-full px-4 py-3 hover:bg-blue-100 dark:hover:bg-gray-600 rounded text-gray-800 dark:text-gray-200 border-b  dark:border-gray-600 cursor-pointer">
                                                <span className="flex gap-2">
                                                    {category.icon}
                                                    <span className="ml-2">{category.name}</span>
                                                </span>
                                            </Link>
                                        }
                                    </span>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </header>
    );
};

export default Navigation;


