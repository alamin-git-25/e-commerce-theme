"use client"

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, Phone, X, Sun, Moon, Box, Cpu, Gift, Camera, Utensils, Globe, Headphones, Smartphone, Tv, ChevronRight, LayoutDashboard } from "lucide-react";
import Container from "@/components/custom/Container";
import Link from "next/link";

const categories = [
    { name: "New Arrivals", icon: <Box className="w-5 h-5" /> },
    { name: "Electronics", icon: <Cpu className="w-5 h-5" /> },
    { name: "Gifts", icon: <Gift className="w-5 h-5" /> },
    { name: "Computers", icon: <Cpu className="w-5 h-5" /> },
    { name: "Smartphones & Tablets", icon: <Smartphone className="w-5 h-5" /> },
    { name: "TV, Video & Music", icon: <Tv className="w-5 h-5" /> },
    { name: "Cameras", icon: <Camera className="w-5 h-5" /> },
    { name: "Cooking", icon: <Utensils className="w-5 h-5" /> },
    { name: "Accessories", icon: <Box className="w-5 h-5" /> },
    { name: "Sports", icon: <Globe className="w-5 h-5" /> },
    { name: "Electronic Gadgets", icon: <Headphones className="w-5 h-5" /> }
];

const Navigation = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "Vendors", href: "/vendors" },
        { name: "Pages", href: "/pages" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" }
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [showStickyNav, setShowStickyNav] = useState(false);
    const popupRef = useRef(null);
    const buttonRef = useRef(null);

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
            setIsOpen(false);
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
    return (
        <header className="bg-white dark:bg-gray-800 shadow-md z-50">
            <Container className="flex items-center justify-between h-14 relative">
                <div className="flex items-center w-[25%] justify-between">
                    <button
                        ref={buttonRef}
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center bg-blue-800 text-white justify-between w-full px-4 py-4 hover:bg-blue-900 transition"
                    >
                        <span className="flex">
                            <LayoutDashboard className="mr-4" />
                            All Categories
                        </span>
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-2"
                        >
                            <ChevronDown />
                        </motion.div>
                    </button>
                </div>
                <nav className="ml-6 space-x-4 hidden md:flex">
                    {navLinks.map(item => (
                        <Link key={item.name} href={item.href} className="text-gray-700 dark:text-gray-300 hover:text-blue-700 ">
                            {item.name}
                        </Link>
                    ))}
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
                            initial={{ opacity: 0, y: 20 }}  // Start 20px above
                            animate={{ opacity: 1, y: 0 }}   // Move to normal position
                            exit={{ opacity: 0, y: 20 }}    // Exit back to above
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",  // Smooth easing
                            }}
                            className="absolute top-0 left-0 md:w-[25%] overflow-hidden  bg-white dark:bg-gray-700 shadow-lg border border-gray-200 dark:border-gray-600 z-50"
                        >

                            <ul className="">
                                {categories.map((category, index) => (
                                    <li key={index} className="border-b last:border-b-0 dark:border-gray-600">
                                        <Link href="#" className="flex items-center justify-between  px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-600 rounded text-gray-800 dark:text-gray-200">
                                            <span className="flex gap-2">
                                                {category.icon}
                                                <span className="ml-2">{category.name}</span>
                                            </span>
                                            <ChevronRight className="mr-2" />
                                        </Link>
                                    </li>
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
